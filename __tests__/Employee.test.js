const Employee = require("../lib/Employee");

test("creates an employee", () => {
  const e = new Employee("Yoink", "1", "Yo1nk@email.com");

  expect(e.name).toBe("Yoink");
  expect(e.id).toBe("1");
  expect(e.email).toBe("Yo1nk@email.com");

  expect(e.getName()).toBe("Yoink");
  expect(e.getId()).toBe("1");
  expect(e.getEmail()).toBe("Yo1nk@email.com");
  expect(e.getRole()).toBe("Employee");
});