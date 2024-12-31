import analyzeArray from "./analyzeArray";

describe("Check Analyze Array Function", () => {
  test("Get objects with sufficient properties", () => {
    expect("average" in analyzeArray([])).toBe(true);
    expect("min" in analyzeArray([])).toBe(true);
    expect("max" in analyzeArray([])).toBe(true);
    expect("length" in analyzeArray([])).toBe(true);
  });
  test("Check if array input is valid", () => {
    expect(() => analyzeArray([null, 1, "something", undefined, NaN])).toThrow(
      "Array elements must be numbers"
    );
  });
  test("AnalyzeArray functions correctly", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
    expect(
      analyzeArray([28, 13, 60, 59, 76, 63, 70, 47, 42, 64, 64]).average
    ).toBeCloseTo(53.27);
    expect(
      analyzeArray([28, 13, 60, 59, 76, 63, 70, 47, 42, 64, 64]).max
    ).toEqual(76);
    expect(
      analyzeArray([28, 13, 60, 59, 76, 63, 70, 47, 42, 64, 64]).min
    ).toEqual(13);
    expect(
      analyzeArray([28, 13, 60, 59, 76, 63, 70, 47, 42, 64, 64]).length
    ).toEqual(11);
  });
});
