import { getStore } from '@netlify/blobs';

// Xatdagi havolalar shu yerdan o'tadi: https://my-team.uz/r/<id>/<manzil> (Check/send.py yasaydi).
// <id> - qabul qiluvchi belgisi (sha256(email) ning 16 belgisi): pochtaning o'zi havolada ko'rinmaydi.
// <manzil> - base64url: query'da bo'lsa, Netlify so'rov query'sini yo'naltirish manziliga ham qo'shib yuboradi.
// Faqat o'z saytlarimizga yo'naltiriladi - aks holda har kim bu manzildan fishing havolasi yasay olardi
const RUXSAT_ETILGAN = /^(?:[a-z0-9-]+\.)*my-team\.uz$/;
const BOSH_SAHIFA = 'https://my-team.uz/';
const ID_SHABLONI = /^[0-9a-f]{16}$/;

function manzilniTanlash(kodlangan) {
  try {
    const baytlar = Uint8Array.from(atob(kodlangan.replace(/-/g, '+').replace(/_/g, '/')), (b) => b.charCodeAt(0));
    const manzil = new URL(new TextDecoder().decode(baytlar));
    if (manzil.protocol === 'https:' && RUXSAT_ETILGAN.test(manzil.hostname)) return manzil.href;
  } catch {
    // Noto'g'ri manzil - bosh sahifaga
  }
  return BOSH_SAHIFA;
}

export default async (req, context) => {
  const { id, manzil: kodlangan = '' } = context.params;
  const manzil = manzilniTanlash(kodlangan);
  if (ID_SHABLONI.test(id)) {
    try {
      await getStore('kliklar').setJSON(`${id}/${Date.now()}-${crypto.randomUUID().slice(0, 8)}`, {
        id,
        url: manzil,
        vaqt: new Date().toISOString(),
        ua: req.headers.get('user-agent') || '',
      });
    } catch (e) {
      // Saqlab bo'lmasa ham odam saytga o'tadi
      console.error('Bosish saqlanmadi:', e);
    }
  }
  // no-store: brauzer yo'naltirishni eslab qolsa, keyingi bosishlar sanalmay qolardi
  return new Response(null, { status: 302, headers: { Location: manzil, 'Cache-Control': 'no-store' } });
};

export const config = { path: ['/r/:id', '/r/:id/:manzil'] };
