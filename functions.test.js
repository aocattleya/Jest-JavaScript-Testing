const functions = require("./functions");

// toBe
test("adds 2+ 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test("adds 2+ 2 to equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test("User should be ao cattleya", () => {
  expect(functions.createUser()).toEqual({
    firstName: "cattleya",
    lastName: "ao"
  });
});
