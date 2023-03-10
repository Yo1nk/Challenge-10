const Manager = require("../lib/Manager");

test("creates a Manager", () => {
  const m = new Manager("Yoink", "1", "Yoink@email.com", "100");

  expect(m.getRole()).toBe("Manager");
});

test("gets office number property", () => {
  const m = new Manager("Yoink", "1", "Yoink@email.com", "100");

  expect(m.officeNumber).toBe("100");
});

test("gets office number method", () => {
  const m = new Manager("Yoink", "1", "Yoink@email.com", "100");

  expect(m.getOfficeNumber()).toBe("100");
});