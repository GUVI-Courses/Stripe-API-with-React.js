import { Elements } from "@stripe/react-stripe-js";
import initializeStripe from "../utils/stipe-license";
import { FC, PropsWithChildren } from "react";

const StripeElements: FC<PropsWithChildren> = ({ children }) => {
  return <Elements stripe={initializeStripe}>{children}</Elements>;
};

export default StripeElements;
