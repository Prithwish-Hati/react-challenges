import React, { useRef, useState } from "react";

const TempConverter = () => {
  const [inputs, setInputs] = useState({
    temp: null,
    scale: null, // true -> celcius, false -> fahrenheit
  });
  const tempRef = useRef(null);
  const scaleRef = useRef(null);

  const handleConvert = () => {
    setInputs({
      temp: tempRef.current.value,
      scale: scaleRef.current.value,
    });
    console.log(scaleRef.current.value);
  };

  const convertTemp = () => {
    if (inputs.temp !== null) {
      if (inputs.scale === "Celcius") {
        return (inputs.temp * 9) / 5 + 32 + " fahrenheit";
      } else {
        return ((inputs.temp - 32) * 5) / 9 + " celcius";
      }
    } else return "";
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold">Temperature Converter</h2>
      <div className="mt-6">
        <input
          type="number"
          placeholder="Enter temperature"
          ref={tempRef}
          className="mb-4 border-2 border-gray-400 rounded-lg h-10 px-3 w-full"
        />

        <select
          type="checkbox"
          placeholder="Enter temperature"
          ref={scaleRef}
          className="mb-4 border-2 border-gray-400 rounded-lg h-10 px-3 w-full"
        >
          <option>Celcius</option>
          <option>Fahrenheit</option>
        </select>

        <button
          className="bg-my-red text-white font-medium p-2 rounded-md"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>

      <div>Converted temperature: {convertTemp()} </div>
    </section>
  );
};

export default TempConverter;
