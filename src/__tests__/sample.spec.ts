import {greet} from "../index";

describe("Sample test", () => {
  test("greets everyone", () => {
    expect("Hello world").toBe(greet());
  });
});
