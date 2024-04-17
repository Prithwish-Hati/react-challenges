import { useRef, useState } from "react";

const GuessTheNumber = () => {
  const theNumber = 59;
  const [input, setInput] = useState(null);
  const numbRef = useRef(null);
  const handleGuess = () => {
    setInput(Number(numbRef.current.value));
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold">Guess The Number</h2>
      <div className="mt-4">
        <input
          type="number"
          placeholder="Enter a Number"
          ref={numbRef}
          className="mb-4 border-2 border-r-0 border-gray-400 rounded-l-lg h-10 px-3"
        />
        <button
          className="bg-my-red text-white font-medium p-2 rounded-md"
          onClick={handleGuess}
        >
          Guess
        </button>
        <p>
          {input &&
            (input < theNumber
              ? "Guess a higher number"
              : input > theNumber
              ? "Guess a lower number"
              : `Yay! The number is ${theNumber}`)}
        </p>
      </div>
    </section>
  );
};

export default GuessTheNumber;
