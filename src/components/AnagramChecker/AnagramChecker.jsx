import { useState } from "react";

const AnagramChecker = () => {
  const [inputs, setInputs] = useState({
    firstWord: "",
    secondWord: "",
  });

  const handleClick = () => {
    console.log(inputs);
    let cleanInput1 = inputs.firstWord
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    let cleanInput2 = inputs.secondWord
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    if (cleanInput1 === cleanInput2) {
      alert("It's an anagram");
    } else {
      alert("It's not an anagram");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">Anagram Checker</h1>
      <div className="mt-4">
        <input
          placeholder="Enter First word or phrase"
          className="border-2 border-gray-600 w-full p-2 rounded-md"
          onChange={(e) =>
            setInputs((prevInputs) => ({
              ...prevInputs,
              firstWord: e.target.value,
            }))
          }
        />
        <input
          placeholder="Enter Second word or phrase"
          className="border-2 border-gray-600 w-full p-2 rounded-md mt-2"
          onChange={(e) =>
            setInputs((prevInputs) => ({
              ...prevInputs,
              secondWord: e.target.value,
            }))
          }
        />
        <button
          className="w-full  bg-my-green mt-4 p-2 rounded-md"
          onClick={handleClick}
        >
          Check
        </button>
      </div>
    </>
  );
};

export default AnagramChecker;
