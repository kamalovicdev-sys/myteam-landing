import stripe
from flask import Flask, jsonify, request
from flask_cors import CORS
import uuid

app = Flask(__name__)

# React frontend (5173 port) bilan muammosiz bog'lanish uchun CORS ni yoqamiz
CORS(app)

# DIQQAT: Stripe dashboardingizdan olingan haqiqiy Secret Key ni shu yerga yozasiz
stripe.api_key = "sk_test_51T9y3vCcCzPz0NGSf8Dkvunv2zRAw17fe6CL8RvtrYUVe8hUtfmYCKqQReQ79ZDdS0psdAI1k4rR2Kiu4jHwZCV100dlF4hDtD"

# -------------------------------------------------------------
# MA'LUMOTLAR BAZASI (Simulyatsiya)
# Xavfsizlik qoidasi: Narxlar doim backend'da saqlanishi shart!
# -------------------------------------------------------------

# Stripe uchun narxlar (USD, sentlarda: $9 = 900 sent)
PLANS_USD = {
    'tier-basic': 900,
    'tier-pro': 2900,
}

# Uzum Pay uchun narxlar (UZS, tiyinlarda: 115,000 so'm = 11500000 tiyin)
PLANS_UZS = {
    'tier-basic': 11500000,
    'tier-pro': 37000000,
}


# =============================================================
# 1-YO'NALISH: STRIPE UCHUN (Xalqaro to'lovlar)
# =============================================================
@app.route('/create-payment-intent', methods=['POST'])
def create_payment():
    try:
        data = request.json
        plan_id = data.get('plan_id')

        # Narxni backend'dan aniqlaymiz
        amount = PLANS_USD.get(plan_id)

        if not amount:
            return jsonify({'error': "Noto'g'ri tarif tanlandi"}), 400

        # Stripe to'lov sessiyasini (PaymentIntent) yaratish
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency='usd',
            automatic_payment_methods={
                'enabled': True,
            },
        )

        # React'ga Stripe to'lov oynasini ochishi uchun ruxsat kodini qaytaramiz
        return jsonify({'clientSecret': intent.client_secret})

    except Exception as e:
        return jsonify({'error': str(e)}), 403


# =============================================================
# 2-YO'NALISH: UZUM PAY UCHUN (Mahalliy to'lovlar)
# =============================================================
@app.route('/create-uzumpay-url', methods=['POST'])
def create_uzumpay():
    try:
        data = request.json
        plan_id = data.get('plan_id')

        # Narxni UZS da aniqlaymiz
        amount = PLANS_UZS.get(plan_id)

        if not amount:
            return jsonify({'error': "Noto'g'ri tarif tanlandi"}), 400

        # Har bir xarid uchun unikal (takrorlanmas) buyurtma raqami yaratamiz
        order_id = str(uuid.uuid4())

        # Muvaffaqiyatli to'lovdan so'ng Uzum Pay mijozni qaytarib olib keladigan manzil
        return_url = "http://localhost:5173/success"

        # DIQQAT: Bu yerda aslida Uzum Pay serveriga API orqali so'rov yuborilib,
        # ruxsat olinishi kerak. Biz hozir to'g'ridan-to'g'ri simulyatsiya ssilkasini yasayapmiz.
        uzumpay_redirect_url = f"https://checkout.uzumpay.uz/pay?order_id={order_id}&amount={amount}&return_url={return_url}"

        # URL ni React'ga yuboramiz, u esa mijozni shu manzilga yo'naltiradi (redirect)
        return jsonify({'url': uzumpay_redirect_url})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


# =============================================================
# SERVERNI ISHGA TUSHIRISH
# =============================================================
if __name__ == '__main__':
    print("🚀 Backend server 4242-portda muvaffaqiyatli ishga tushdi...")
    # Port 4242 qilib belgilandi (React qismimiz ham shu portga so'rov yuborishga sozlangan)
    app.run(port=4242, debug=True)