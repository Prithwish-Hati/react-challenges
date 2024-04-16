import { useState } from "react";
import usePasswordGenerator from "../../hooks/usePasswordGenerator";

const PasswordGenerator = () => {
  const [inputs, setInputs] = useState({
    chars: 0,
    hasLowercase: true,
    hasUppercase: false,
    hasNumbers: false,
    hasSpecialChars: false,
  });

  const { randomLowercaseAlphabet } = usePasswordGenerator();

  //   console.log(inputs);

  const handleGeneratePassword = (items) => {
    if (items.hasLowercase === true) {
      randomLowercaseAlphabet();
    }
  };
  return (
    <section>
      <h2 className="text-3xl font-semibold">Password Generator</h2>
      <div className="mt-6">
        <div className="flex gap-4 text-lg">
          <p>Password length: {inputs.chars}</p>
          <input
            type="range"
            min={8}
            max={20}
            onChange={(e) => {
              setInputs({ ...inputs, chars: e.target.value });
            }}
          />
        </div>

        {/* <label className="text-lg">
          Include lowercase:
          <input
            type="checkbox"
            className="ml-2"
            onChange={(e) => {
              setInputs({ ...inputs, hasLowercase: e.target.checked });
            }}
          />
        </label>

        <br /> */}

        <label className="text-lg">
          Include uppercase:
          <input
            type="checkbox"
            className="ml-2"
            onChange={(e) => {
              setInputs({ ...inputs, hasUppercase: e.target.checked });
            }}
          />
        </label>

        <br />

        <label className="text-lg">
          Include Number:
          <input
            type="checkbox"
            className="ml-2"
            onChange={(e) => {
              setInputs({ ...inputs, hasNumbers: e.target.checked });
            }}
          />
        </label>

        <br />

        <label className="text-lg">
          Include Special Characters:
          <input
            type="checkbox"
            className="ml-2"
            onChange={(e) => {
              setInputs({ ...inputs, hasSpecialChars: e.target.checked });
            }}
          />
        </label>

        <br />

        <button
          className="px-4 py-1 bg-my-purple rounded-md shadow-md mt-3 text-white text-lg font-medium"
          onClick={handleGeneratePassword(inputs)}
        >
          Generate Password
        </button>

        <div>{/* {password} */}</div>
      </div>
    </section>
  );
};

export default PasswordGenerator;
