import Calculator from "./calculator";

const calculator = new Calculator();

describe("Check Calculator Functions", () => {
  test("Calculator class is defined", () => {
    expect(calculator).toBeDefined();
  });
  test("Calculator has essential functions", () => {
    expect("add" in calculator).toBe(true);
    expect("subtract" in calculator).toBe(true);
    expect("divide" in calculator).toBe(true);
    expect("multiply" in calculator).toBe(true);
  });
  test("add() functions correctly", () => {
    expect(() => calculator.add("a", 2)).toThrow("Inputs must be numbers!");
    expect(() => calculator.add(2, "b")).toThrow("Inputs must be numbers!");
    expect(() => calculator.add("a", "b")).toThrow("Inputs must be numbers!");
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, 2)).toBe(1);
    expect(calculator.add(1.6, 2.12)).toBe(3.72);
  });
  test("subtract() functions correctly", () => {
    expect(() => calculator.subtract("a", 2)).toThrow(
      "Inputs must be numbers!"
    );
    expect(() => calculator.subtract(2, "b")).toThrow(
      "Inputs must be numbers!"
    );
    expect(() => calculator.subtract("a", "b")).toThrow(
      "Inputs must be numbers!"
    );
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.subtract(-1, 2)).toBe(-3);
    expect(calculator.subtract(1.6, 2.12)).toBeCloseTo(-0.52);
  });
  test("divide() functions correctly", () => {
    expect(() => calculator.divide("a", 2)).toThrow("Inputs must be numbers!");
    expect(() => calculator.divide(2, "b")).toThrow("Inputs must be numbers!");
    expect(() => calculator.divide("a", "b")).toThrow(
      "Inputs must be numbers!"
    );
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero!");
    expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
    expect(calculator.divide(-1, 2)).toBeCloseTo(-0.5);
    expect(calculator.divide(1.6, 2.12)).toBeCloseTo(0.754);
  });
  test("multiply() functions correctly", () => {
    expect(() => calculator.multiply("a", 2)).toThrow(
      "Inputs must be numbers!"
    );
    expect(() => calculator.multiply(2, "b")).toThrow(
      "Inputs must be numbers!"
    );
    expect(() => calculator.multiply("a", "b")).toThrow(
      "Inputs must be numbers!"
    );
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.multiply(-1, 2)).toBe(-2);
    expect(calculator.multiply(1.6, 2.12)).toBeCloseTo(3.392);
  });
});
