"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const caluculateTotal = (price, shippingFee) => {
    if (typeof shippingFee === "undefined") {
        return price;
    }
    return price + shippingFee;
};
console.log(caluculateTotal(1000));
console.log(caluculateTotal(1000, 200));
// console.log(caluculateTotal("3000"));
//# sourceMappingURL=function.js.map