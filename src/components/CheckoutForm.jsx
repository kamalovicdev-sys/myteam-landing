import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Loader2 } from 'lucide-react';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    // To'lovni tasdiqlash uchun Stripe serveriga so'rov
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:5173/success', // To'lov muvaffaqiyatli bo'lsa qayerga qaytish kerak
      },
    });

    // Agar xatolik bo'lsa (masalan, kartada pul yo'q) ekranga chiqaramiz
    if (error) {
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
      {/* Stripe o'zi avtomatik chiroyli karta kiritish joyini chizib beradi */}
      <PaymentElement />

      {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}

      <button
        disabled={!stripe || isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md disabled:opacity-50 flex justify-center items-center"
      >
        {isLoading ? <Loader2 className="animate-spin" /> : "To'lovni tasdiqlash"}
      </button>
    </form>
  );
}