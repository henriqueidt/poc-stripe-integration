export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 p-8">
      <section className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-700">
          Payment Successful!
        </h1>
        <p className="text-gray-700">
          Thank you for your purchase. Your transaction has been completed
          successfully.
        </p>
      </section>
    </main>
  );
}
