import React from "react";
import Options from "./Options";
import Packs from "./Packs";

function Pricing() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center py-8 md:py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-950">شحال غادي نخلص ؟</h1>
      </div>
      <Options />
      <Packs />
    </div>
  );
}

export default Pricing;