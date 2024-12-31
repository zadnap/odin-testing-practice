import reverseString from "./reverseString";

describe("Get String Reversed", () => {
  test("Reverse symmetric string", () => {
    expect(reverseString("cbaiabc")).toBe("cbaiabc");
    expect(reverseString("agojoga")).toBe("agojoga");
  });
  test("Reverse random string", () => {
    expect(reverseString("random string")).toBe("gnirts modnar");
    expect(reverseString("Hello World")).toBe("dlroW olleH");
    expect(reverseString("  hello  world  ")).toBe("  dlrow  olleh  ");
  });
});
