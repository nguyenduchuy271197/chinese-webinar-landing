import PaymentContent from "./_components/payment-content";
import PaymentForm from "./_components/payment-form";

export default function PaymentPage() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 gap-8 py-20">
          <PaymentContent />
          <PaymentForm />
        </div>
      </div>
    </section>
  );
}
