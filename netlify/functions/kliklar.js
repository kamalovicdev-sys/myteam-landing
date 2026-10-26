import { getStore } from '@netlify/blobs';

// Xatlardagi havolalar bosilgani ro'yxati: faqat Check/send.py o'qiydi (python send.py --kliklar).
// Kalit X-Kalit sarlavhasida keladi. Repo ochiq, shuning uchun bu yerda kalitning o'zi emas, SHA-256 xeshi turadi
// (kalit Check/.env da, KLIK_KALIT)
const KALIT_XESHI = 'f1681b0bf10620bf1fd74f503c0ce06bd91a313c5bccbd0e927f66a1b5da557f';

async function sha256(matn) {
  const xesh = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(matn));
  return Array.from(new Uint8Array(xesh), (bayt) => bayt.toString(16).padStart(2, '0')).join('');
}

export default async (req) => {
  if ((await sha256(req.headers.get('x-kalit') || '')) !== KALIT_XESHI) {
    return new Response('Ruxsat berilmagan', { status: 403 });
  }
  const ombor = getStore('kliklar');
  const { blobs } = await ombor.list();
  const kliklar = await Promise.all(blobs.map(({ key }) => ombor.get(key, { type: 'json' })));
  return Response.json(kliklar.filter(Boolean), { headers: { 'Cache-Control': 'no-store' } });
};

export const config = { path: '/api/kliklar' };
