"use client";

const CheckoutPage = () => {
  return (
    <form
      action="/api/checkout-cart"
      method="POST"
      className="min-h-screen flex items-center justify-center bg-gray-50 p-8"
    >
      <section className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <button
          type="submit"
          role="link"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Checkout
        </button>
      </section>
    </form>
  );
};

export default CheckoutPage;
