import React from "react";
import PaymentCard from "./payment-card";
type Props = {};

const Billing = (props: Props) => {
  //WIP: Get the Billing data for the customer
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-10/12 xl:w-8/12 container">
      <PaymentCard current={"FREE"} label="FREE" />
      <PaymentCard current={"FREE"} label="PRO" />
    </div>
  );
};

export default Billing;
