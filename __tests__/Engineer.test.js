const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates an Engineer", () => {
  const e = new Engineer("Yoink", "1", "Yoink@email.com", "Yo1nk");

  expect(e.getRole()).toBe("Engineer");
});

test("github property", () => {
  const e = new Engineer("Yoink", "1", "Yoink@email.com", "Yo1nk");

  expect(e.github).toBe("Yo1nk");
});

test("github method", () => {
  const e = new Engineer("Yoink", "1", "Yoink@email.com", "Yo1nk");

  expect(e.getGithub()).toBe(
    '<a href="https://github.com/Yo1nk" target="_blank" rel="noopener noreferrer">Yo1nk</a>'
  );