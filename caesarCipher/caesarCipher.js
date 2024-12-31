function caesarCipher(string, shift) {
  if (typeof string !== "string")
    throw new Error("First argument must be a string!");
  if (typeof shift !== "number" || !Number.isInteger(shift))
    throw new Error("Second argument must be an integer!");

  const isLetter = (char) => char.toUpperCase() != char.toLowerCase();

  return string
    .split("")
    .map((char) => {
      if (!isLetter(char)) return char;

      const charCode = char.charCodeAt(0);
      const base = char >= "a" ? 97 : 65;
      return String.fromCharCode(
        ((((charCode - base + shift) % 26) + 26) % 26) + base
      );
    })
    .join("");
}

export default caesarCipher;
