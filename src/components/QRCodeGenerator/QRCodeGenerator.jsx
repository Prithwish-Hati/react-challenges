import { useRef, useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  //   console.log(inputRef);
  console.log(input);
  return (
    <section>
      <h2 className="text-3xl font-semibold">QR Code Generator</h2>
      <div className="mt-6 flex flex-col items-center">
        <div
        // className="flex justify-center items-center"
        >
          <input
            type="text"
            // onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
            placeholder="Type anything"
            className="mb-4 border-2 border-r-0 border-gray-400 rounded-l-lg h-10 px-3"
          />
          <button
            className="bg-gray-600 text-white rounded-r-lg px-3 h-[41px]"
            onClick={() => setInput(inputRef.current.value)}
          >
            Generate
          </button>
        </div>
        <QRCode value={input} />
      </div>
    </section>
  );
};

export default QRCodeGenerator;
