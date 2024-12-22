import { sum } from "../sum.js";
test("test sum of 2 and 3 equal to 5", () => {
  expect(sum(2, 3)).toBe(5);
});

test("test sum of 6 and 3 equal to 9", () => {
  expect(sum(6, 3)).toBe(9);
});
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

/** Test truthiness */
test("check null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

/** Number testing */

test("test numbers method: two plus two", () => {
  const num = 2 + 2;
  expect(num).toBeGreaterThan(3);
  expect(num).toBeGreaterThanOrEqual(3.5);
  expect(num).toBeLessThan(5);
  expect(num).toBeLessThanOrEqual(4.5);
  expect(num).toBe(4);
  expect(num).toEqual(4);
});

/*** String testing */

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});
test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

/**Arrays and iterables */
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];
test('test shoping list has milk on it', () => { 
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk')
 })