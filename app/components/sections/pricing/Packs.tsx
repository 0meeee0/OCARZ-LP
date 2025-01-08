import React from "react";

function Packs() {
  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="w-96 bg-white shadow-lg">
        <div className="bg-[#E4E4E4] text-slate-500 text-xl text-center py-5">
          Pack #1
        </div>
        <div className="p-4 text-gray-700 text-center">
          <p className="mb-2 text-4xl font-bold p-3">
            500 <span className="text-[1.4rem]">DH</span>
          </p>
          <p className="mb-2 font-bold text-slate-500 text-xl">3 véhicules</p>
          <p className="mb-2 w-36 mx-auto leading-10 tracking-tight hover:tracking-wide">
            qui correspondent exactement à ton besoin
          </p>
        </div>
        <div className="px-4 pb-10 text-center py-3">
          <button className="w-48 px-10 py-1 bg-[#FBA01A] text-white border-2 border-[#FBA01A] hover:text-[#FBA01A] hover:bg-white transition-colors">
            ACHETER MAINTENANT
          </button>
        </div>
      </div>

      <div className="w-96 bg-white shadow-lg">
        <div className="bg-[#13245A] text-white text-center py-10 text-xl">Pack #2</div>
        <div className="p-4 text-gray-700 text-center space-y-6">
          <p className="mb-2 text-4xl font-bold p-3">
            600 <span className="text-[1.4rem]">DH</span>
          </p>
          <p className="mb-2 font-bold text-slate-500 text-xl">5 véhicules</p>
          <p className="mb-2 w-36 mx-auto leading-10">
            qui correspondent exactement à ton besoin
          </p>
        </div>
        <div className="px-4 pb-10 text-center py-3">
          <button className="w-48 px-10 py-1 bg-[#FBA01A] text-white border-2 border-[#FBA01A] hover:text-[#FBA01A] hover:bg-white transition-colors">
            ACHETER MAINTENANT
          </button>
        </div>
      </div>

      <div className="w-96 bg-white shadow-lg">
        <div className="bg-[#E4E4E4] text-slate-500 text-center py-5 text-xl">
          Pack #3
        </div>
        <div className="p-4 text-gray-700 text-center">
          <p className="mb-2 text-4xl font-bold p-3">
            750 <span className="text-[1.4rem]">DH</span>
          </p>
          <p className="mb-2 font-bold text-slate-500 text-xl">10 véhicules</p>
          <p className="mb-2 w-36 mx-auto leading-10">
            qui correspondent exactement à ton besoin
          </p>
        </div>
        <div className="px-4 pb-10 text-center py-3">
          <button className="w-48 px-10 py-1 bg-[#FBA01A] text-white border-2 border-[#FBA01A] hover:text-[#FBA01A] hover:bg-white transition-colors">
            ACHETER MAINTENANT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Packs;
