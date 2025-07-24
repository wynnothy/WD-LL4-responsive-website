// components/DonationFlow.jsx
import React, { useState } from "react";

const presetAmounts = [5, 20, 100];

const DonationFlow = ({ onSubmit }) => {
  const [plan, setPlan] = useState("once");
  const [amount, setAmount] = useState(null);
  const [custom, setCustom] = useState("");

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustom("");
  };

  const handleSubmit = () => {
    const selectedAmount = custom || amount;
    if (selectedAmount) {
      onSubmit({ plan, amount: selectedAmount });
    }
  };

  return (
    <div className="bg-black/60 backdrop-blur-sm border border-white/20 rounded-lg p-6 max-w-lg mx-auto mt-8 text-white">
      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 px-4 rounded-l-full ${plan === "once" ? "bg-black text-white" : "bg-white text-black"}`}
          onClick={() => setPlan("once")}
        >
          GIVE ONCE
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-r-full ${plan === "monthly" ? "bg-yellow-400 text-black" : "bg-white text-black"}`}
          onClick={() => setPlan("monthly")}
        >
          GIVE MONTHLY
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {presetAmounts.map((amt) => (
          <button
            key={amt}
            onClick={() => handleAmountClick(amt)}
            className={`py-2 border rounded ${amount === amt ? "bg-yellow-400 text-black" : "bg-black text-white border-white"}`}
          >
            ♥ Give ${amt}{plan === "monthly" ? "/month" : ""}
          </button>
        ))}
        <input
          type="number"
          className="col-span-2 py-2 px-4 text-black rounded"
          placeholder="enter custom amount..."
          value={custom}
          onChange={(e) => {
            setAmount(null);
            setCustom(e.target.value);
          }}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-lg"
      >
        take the next step →
      </button>
      <p className="text-xs text-center mt-2 opacity-80">every cent counts | give what you can</p>
    </div>
  );
};

export default DonationFlow;
