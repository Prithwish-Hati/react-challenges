import { useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(false);
  const handleToggle = () => {
    setTheme((prev) => !prev);
  };
  return (
    <div
      className={`${
        theme === false ? "text-black bg-white" : "text-white bg-black"
      }`}
    >
      <h1 className="text-3xl font-semibold my-16">Theme Toggler</h1>
      <button
        onClick={handleToggle}
        className="bg-my-red text-white font-medium p-2 rounded-md"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
