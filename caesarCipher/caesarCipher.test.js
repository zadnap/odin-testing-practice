import caesarCipher from "./caesarCipher";

describe("Check Caesar Cipher Function", () => {
  test("Check if inputs are valid", () => {
    expect(() => caesarCipher(123, 3)).toThrow(
      "First argument must be a string!"
    );
    expect(() => caesarCipher("abc", "hollyshit")).toThrow(
      "Second argument must be an integer!"
    );
    expect(() => caesarCipher("abc", 1.2)).toThrow(
      "Second argument must be an integer!"
    );
    expect(() => caesarCipher("abc", [])).toThrow(
      "Second argument must be an integer!"
    );
    expect(() => caesarCipher("abc", {})).toThrow(
      "Second argument must be an integer!"
    );
    expect(() => caesarCipher("abc", undefined)).toThrow(
      "Second argument must be an integer!"
    );
  });
  test("Cipher non-letter characters", () => {
    expect(caesarCipher('!@#$%^&*()_+~<>:"?{}|', 100)).toBe(
      '!@#$%^&*()_+~<>:"?{}|'
    );
  });
  test("Cipher string with 0 shift", () => {
    expect(caesarCipher("abc", 0)).toBe("abc");
    expect(caesarCipher("xyz", 0)).toBe("xyz");
  });
  test("Cipher string with characters at egde", () => {
    expect(caesarCipher("abc", -3)).toBe("xyz");
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("Cipher string and preserve case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
});
