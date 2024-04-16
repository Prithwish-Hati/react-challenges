const usePasswordGenerator = ({ length }) => {
  const randomLowercaseAlphabet = () => {
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
    const randomIndex = Math.floor(Math.random() * alphabetArr.length);
    return alphabetArr[randomIndex];
  };

  const randomUppercaseAlphabet = () => {
    const alphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const randomIndex = Math.floor(Math.random() * alphabetArr.length);
    return alphabetArr[randomIndex];
  };

  const randomSpecialChar = () => {
    const specialCharArr = "!@#$%^&*()-_+=[]{}|;:',.<>?`".split("");
    const randomIndex = Math.floor(Math.random() * specialCharArr.length);
    return specialCharArr[randomIndex];
  };

  const randomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 9);
    return randomNumber;
  };

  const randomPassword = () => {
    const functions = [
      randomLowercaseAlphabet(),
      randomUppercaseAlphabet(),
      randomSpecialChar(),
      randomNumber(),
    ];

    // Math.floor
  };

  return {
    randomLowercaseAlphabet,
    randomUppercaseAlphabet,
    randomSpecialChar,
    randomNumber,
  };
};

export default usePasswordGenerator;
