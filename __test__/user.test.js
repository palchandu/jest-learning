import { fetchUser } from "../user";
// beforeAll(() => {
//   console.log("Before test started one time.");
// });
// afterAll(() => {
//   console.log("After test completed one time.");
// });

// beforeEach(() => {
//   console.log("Before test started.");
// });
// afterEach(() => {
//   console.log("After test completed.");
// });

test("test fetch user by then and catch", () => {
  return fetchUser().then((data) => {
    expect(data).toEqual({ name: "ABC", age: 33 });
  });
});

test("test fetch user by async await", async () => {
  const user = await fetchUser();
  expect(user).toEqual({ name: "ABC", age: 33 });
});

describe('Scope based testing', () => {
   // beforeEach(() => { console.log('Inside scope') })
    test('scoped test 1', () => { 
        const str = "ScopeTest";
        expect(str).toMatch('ScopeTest')
    })
})