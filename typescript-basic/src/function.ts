type CaluculateTotal = (price: number, shippingFee?: number) => number;

const caluculateTotal: CaluculateTotal = (price, shippingFee?) => {
  if (typeof shippingFee === "undefined") {
    return price;
  }
  return price + shippingFee;
};

console.log(caluculateTotal(1000));
console.log(caluculateTotal(1000, 200));
// console.log(caluculateTotal("3000"));