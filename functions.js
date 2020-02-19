const axios = require("axios");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database Initializes...");
// const closeDatabase = () => console.log("Database Closed...");
const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: "cattleya" };
    user["lastName"] = "ao";
    return user;
  },
  fetchUser: () =>
    axios
      .get("http://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => "error")
};

module.exports = functions;
