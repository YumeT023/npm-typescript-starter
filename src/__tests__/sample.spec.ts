import {checkProject} from "../index";

describe("$pkg_name", () => {
  test("$pkg_description", () => {
    expect("$pkg_name works").toBe(checkProject());
  });
});
