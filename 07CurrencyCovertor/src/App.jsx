import { useState } from "react";
import "./App.css";
import { InputBox } from "./componensts";
import useCurrencyInfo from "./hooks/useCorrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  let options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const covert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-[100vw] flex">
      <div
        className="w-2/3 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/global-digital-money-transfer-techno-concept-background-design_1017-52486.jpg?t=st=1742303835~exp=1742307435~hmac=de0943f43e596f41936b769f7504351cf770955b7c1b106c2ecffbee3bc85cf1&w=1380')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                covert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-700 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from} to {to}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="w-1/3 h-screen bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/elevated-view-coins-open-jar-world-map_23-2147892237.jpg?t=st=1742317490~exp=1742321090~hmac=a72e471d682c08d044b3d1a6e4e61550244e9a1fe9648aed420daae527e23b07&w=740)",
        }}
      >
        <div className="overflow-hidden text-wrap text-red p-5">
          <h4 >🌎 Instant, Reliable, and Accurate Currency Conversion! </h4>💰 Convert
          currencies in real time with live exchange rates. No hidden fees, just
          the most up-to-date conversion data at your fingertips! <br />
          Why Use Our Currency Converter? 
          <ul>
            <li>✅ Real-Time Exchange Rates – Stay updated with
            live market rates.</li>
            <li>✅ Multi-Currency Support – Convert between 150+
            world currencies.</li>
            <li>  ✅ User-Friendly Interface – Quick and seamless
            experience on any device.</li>
            <li>✅ Historical Data & Trends – View past
            exchange rates for better financial planning. </li>
            <li>✅ No Extra Fees – 100%
            free and transparent conversions. </li>
          </ul>
       
        </div>
      </div>
    </div>
  );
}

export default App;
