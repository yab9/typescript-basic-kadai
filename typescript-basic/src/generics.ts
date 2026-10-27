const echo = <T>(value: T): T => {
  return value;
};

console.log(echo<string>("hello"));
console.log(echo<number>(1234));
console.log(echo<boolean>(true));