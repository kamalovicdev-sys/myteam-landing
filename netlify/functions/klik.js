import { getStore } from '@netlify/blobs';

// Xatdagi havolalar shu yerdan o'tadi: https://my-team.uz/r/<id>?to=<manzil> (Check/send.py yasaydi).
// <id> - qabul qiluvchi belgisi (sha256("kampaniya:email") ning 16 belgisi): pochtaning o'zi havolada ko'rinmaydi.
// Faqat o'z saytlarimizga yo'naltiriladi - aks holda har kim bu manzildan fishing havolasi yasay olardi
const RUXSAT_ETILGAN = /^(?:[a-z0-9-]+\.)*my-team\.uz$/;
const BOSH_SAHIFA = 'https://my-team.uz/';
const ID_SHABLONI = /^[0-9a-f]{16}$/;

function manzilniTanlash(to) {
  try {
    const manzil = new URL(to);
    if (manzil.protocol === 'https:' && RUXSAT_ETILGAN.test(manzil.hostname)) return manzil.href;
  } catch {
    // Noto'g'ri manzil - bosh sahifaga
  }
  return BOSH_SAHIFA;
}

export default async (req, context) => {
  const manzil = manzilniTanlash(new URL(req.url).searchParams.get('to') || BOSH_SAHIFA);
  const { id } = context.params;
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

export const config = { path: '/r/:id' };
