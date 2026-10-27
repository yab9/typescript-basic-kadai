interface Shop {
  readonly id: number;
  name: string;
  address?: string;
}

const shopA: Shop = {
  id: 1,
  name: "SAMURAI TOKYO",
  address: "TOKYO",
};
const shopB: Shop = {
  id: 2,
  name: "SAMURAI OOSAKA",
  address: "OOSAKA",
};
const shopC: Shop = {
  id: 3,
  name: "SAMURAI ONLINE",
};

console.log(shopA);
console.log(shopB);
console.log(shopC);