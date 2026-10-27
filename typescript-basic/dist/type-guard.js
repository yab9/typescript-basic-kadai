"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printValue = (value) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
};
printValue("peko");
printValue(123.456);
//# sourceMappingURL=type-guard.js.map