import { useState, useEffect, useCallback, useRef } from "react";

function App() {

  let passref = useRef(null)

  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [scharAllowed, setscharAllowed] = useState(false);
  let [copied, setCopied] = useState(false)

  let [pass, setPass] = useState("");

  const PasswordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numberAllowed) str += "1234567890";
    if (scharAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = str[Math.floor(Math.random() * str.length)];
      pass += char;
    }
    setPass(pass);
  }, [length, numberAllowed, scharAllowed]);


  //useEffect
  useEffect(() => {
    PasswordGenerator(); //calls once when page reloaded and when depedencies are changed
  }, [length, numberAllowed, scharAllowed]);


  let copyToClipBoard = () =>{
    passref.current?.select();
    passref.current?.setSelectionRange(2, 4);
    window.navigator.clipboard.writeText(pass)
    setCopied(true)
    setTimeout(()=>setCopied(false), 300)
  }


  return (
    <>
      <div className="flex flex-col items-center w-full p-4 bg-gray-800 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold text-white mb-4">
          Password Generator
        </h4>
        <div className="flex items-center w-full mb-4">
          <input
            type="text"
            value={pass}
            className="flex-grow p-2 mr-2 text-gray-800 bg-gray-200 rounded-lg focus:outline-none"
            readOnly
            ref={passref} //------
          />
          <button 
          onClick={copyToClipBoard}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="flex flex-col w-full space-y-4">
          <div className="flex items-center">
            <label htmlFor="length" className="mr-2 text-white">
              Length: {length}
            </label>
            <input
              type="range"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min="1"
              max="20"
              className="flex-grow"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="numberAllowed" className="text-white">
              Include Numbers
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={scharAllowed}
              onChange={(e) => setscharAllowed(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="scharAllowed" className="text-white">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
