import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);

      fetch("http://localhost:3002/create-charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            amount: 100,
          }),
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <hr />
      <button type="submit" disabled={!stripe}>
        Complete Payment
      </button>
    </form>
  );
};

export default CheckoutForm;
