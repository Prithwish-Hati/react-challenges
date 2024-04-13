import { useState } from "react";
import { useRef } from "react";

const TableColorizer = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState([]);

  const handleColorMe = () => {
    setInput([...input, Number(inputRef.current.value)]);
    inputRef.current.value = "";
  };

  const handleClearMe = () => {
    setInput([]);
  };

  return (
    <div className="mb-16">
      <h1 className="text-3xl font-semibold">Table Colorizer</h1>
      <input
        type="number"
        placeholder="A number from 0 to 9"
        className="border-2 border-gray-600 w-full p-2 rounded-md mt-2"
        ref={inputRef}
      />
      {/* {(inputRef !== null && inputRef.current.value < 1) ||
        (inputRef.current.value > 9 && (
          <p className="text-red-700">Number has to be from 0 to 9</p>
        ))} */}
      <div className="mt-3 flex justify-center gap-4">
        <button
          onClick={handleColorMe}
          className=" bg-my-blue mt-4 p-2 rounded-md"
        >
          Color Me
        </button>
        <button
          onClick={handleClearMe}
          className=" bg-my-red mt-4 p-2 rounded-md"
        >
          Clear Me
        </button>
      </div>
      <table cellPadding={5} className="w-full text-center mt-8 text-3xl">
        <tbody>
          <tr>
            <td
              className={`border-2 border-collapse border-my-yellow ${
                input.includes(1) ? "bg-my-red" : "bg-white"
              }`}
            >
              1
            </td>
            <td
              className={`border-2 border-collapse border-my-yellow ${
                input.includes(2) ? "bg-my-red" : "bg-white"
              }`}
            >
              2
            </td>
            <td
              className={`border-2 border-collapse border-my-yellow ${
                input.includes(3) ? "bg-my-red" : "bg-white"
              }`}
            >
              3
            </td>
          </tr>
          <tr>
            <td
              className={`border-2 border-collapse border-my-yellow ${
                input.includes(4) ? "bg-my-red" : "bg-white"
              }`}
            >
              4
            </td>
            <td
              className={`border-2 border-collapse border-my-yellow ${
                input.includes(5) ? "bg-my-red" : "bg-white"
              }`}
            >
              5
            </td>
            <td
              className={`border-2 border-collapse border-my-yellow ${
                input.includes(6) ? "bg-my-red" : "bg-white"
              }`}
            >
              6
            </td>
          </tr>
          <tr>
            <td
              className={`border-2 border-collapse border-my-yellow ${
                input.includes(7) ? "bg-my-red" : "bg-white"
              }`}
            >
              7
            </td>
            <td
              className={`border-2 border-collapse border-my-yellow ${
                input.includes(8) ? "bg-my-red" : "bg-white"
              }`}
            >
              8
            </td>
            <td
              className={`border-2 border-collapse border-my-yellow ${
                input.includes(9) ? "bg-my-red" : "bg-white"
              }`}
            >
              9
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableColorizer;
