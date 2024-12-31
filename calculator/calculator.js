class Calculator {
  add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
      throw new Error("Inputs must be numbers!");
    }
    return a + b;
  }
  subtract(a, b) {
    if (typeof a === "string" || typeof b === "string") {
      throw new Error("Inputs must be numbers!");
    }
    return a - b;
  }
  divide(a, b) {
    if (typeof a === "string" || typeof b === "string") {
      throw new Error("Inputs must be numbers!");
    }
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  }
  multiply(a, b) {
    if (typeof a === "string" || typeof b === "string") {
      throw new Error("Inputs must be numbers!");
    }
    return a * b;
  }
}

export default Calculator;
