import { useEffect, useRef, useState } from "react";

const WordCounter = () => {
  const [cleanText, setCleanText] = useState("");
  const textRef = useRef(null);

  const handleCount = () => {
    let inputText = textRef.current.value;
    inputText = inputText.replace(/\n\s*\n/g, "\n").replace(/\s{2,}/g, " "); // Remove consecutive line breaks and multiple spaces
    setCleanText(inputText);
  };

  const wordCounter = () => {
    if (cleanText.length > 0) {
      const wordsArr = cleanText.split(/\s+/);
      return wordsArr.length;
    } else {
      return 0;
    }
  };

  const charCounter = () => {
    if (cleanText.length > 0) {
      const charsArr = cleanText.split(/\s+/).join("");
      return charsArr.length;
    } else {
      return 0;
    }
  };

  const paraCounter = () => {
    if (cleanText.length > 0) {
      const paraArr = cleanText.split(/\n/);
      return paraArr.length;
    } else {
      return 0;
    }
  };

  const handleClear = () => {
    textRef.current.value = "";
    setCleanText(textRef.current.value);
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold">Word Counter</h2>
      <div className="mt-4">
        <textarea
          ref={textRef}
          placeholder="Start typing..."
          rows="10"
          className="mb-4 border-2 border-gray-400 rounded-lg p-3 w-[500px]"
        />
        <div className="mt-2 flex justify-between items-center">
          <div className="flex gap-3">
            <span>Words: {wordCounter()}</span>
            <span>Characters: {charCounter()}</span>
            <span>Paragraphs: {paraCounter()}</span>
          </div>
          <div>
            <button
              className="bg-my-red text-white font-medium p-2 rounded-md"
              onClick={handleCount}
            >
              Count
            </button>
            <button
              className="bg-my-red text-white font-medium p-2 rounded-md ml-4"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordCounter;
