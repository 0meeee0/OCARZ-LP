import React from "react";
import Packs from "./Packs";
import Options from "./Options";

function Pricing() {
  return (
    <div className="">
      <div className="text-center py-10 items-center mx-auto">
        <h1 className="text-6xl font-bold text-blue-950">شحال غادي نخلص ؟ </h1>
      </div>
      <Options/>
      <Packs />
    </div>
  );
}

export default Pricing;
