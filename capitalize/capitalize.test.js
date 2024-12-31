import capitalize from "./capitalize";

describe("Get String With Only First Letter Capitalized", () => {
  test("Transform lowercased string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
    expect(capitalize("my name is zadnap")).toBe("My name is zadnap");
  });
  test("Transform uppercased string", () => {
    expect(capitalize("HELLO WORLD")).toBe("Hello world");
    expect(capitalize("MY NAME IS ZADNAP")).toBe("My name is zadnap");
  });
  test("Transform mixed case string", () => {
    expect(capitalize("hElLo WOrlD!")).toBe("Hello world!");
    expect(capitalize("hErE We gO AgAiN")).toBe("Here we go again");
  });
});
