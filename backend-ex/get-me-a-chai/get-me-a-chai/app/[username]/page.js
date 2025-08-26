import React from "react";
import Paymentpage from "../components/paymentpage";

const Username = async ({ params }) => {
  params = await params
  return (
    <>
      <Paymentpage username={params.username}/>
    </>
  );
};

export default Username;
