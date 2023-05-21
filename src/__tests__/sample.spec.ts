test("passing test", () => {
  console.log("passes!");
});

test("failing test", () => {
  expect(() => {
    throw new Error();
  }).toThrow();
});

test("expect example", () => {
  expect(5).toEqual(5);
});
