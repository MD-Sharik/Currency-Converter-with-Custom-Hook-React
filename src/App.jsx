import "./App.css";
import useCurrency from "./hooks/UseCurrency.js";
import InputBox from "./assets/Components/InputBox/InputBox.jsx";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("0");

  const currencyInfo = useCurrency(from);

  const option = Object.keys(currencyInfo);

  const swapFunction = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
    console.log("swapping");
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div className="h-screen flex w-full justify-center  items-center bg-gray-950">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={option}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChage={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapFunction}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={option}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
