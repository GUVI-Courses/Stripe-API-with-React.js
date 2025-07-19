import { Fragment } from "react";
import "./App.css";
import StripeElements from "./components/StripeElements";
import CheckoutForm from "./components/CheckoutForm";

const wrapper = {
  border: "1px solid #635bff",
  padding: "8px 16px",
  borderRadius: "5px",
  width: '50rem'
};

function App() {
  return (
    <Fragment>
      <h1>Stripe API Integration with React JS</h1>
      <StripeElements>
        <div style={wrapper}>
          <CheckoutForm />
        </div>
      </StripeElements>
    </Fragment>
  );
}

export default App;
