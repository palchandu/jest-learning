export function fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "ABC", age: 33 });
      }, 3000);
  })
}
