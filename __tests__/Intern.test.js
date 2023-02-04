const Intern = require("../lib/Intern");

test("creates an Intern", () => {
  const i = new Intern("Yoink", "1", "Yoink@email.com", "Google");

  expect(i.getRole()).toBe("Intern");
});

test("gets school property", () => {
  const i = new Intern("Yoink", "1", "Yoink@email.com", "Google");

  expect(i.school).toBe("Google");
});

test("gets school method", () => {
  const i = new Intern("Yoink", "1", "Yoink@email.com", "Google");

  expect(i.getSchool()).toBe("Google");
});