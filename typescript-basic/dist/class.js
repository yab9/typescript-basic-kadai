"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    category;
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    describe() {
        console.log('---- 同じクラス内からのアクセス ----');
        console.log(`商品名：${this.name}`); // OK
        console.log(`価格：${this.price}`); // OK
        console.log(`カテゴリ：${this.category}`); // OK  }
    }
}
class Drink extends Product {
    describe() {
        console.log('---- サブクラスからのアクセス ----');
        console.log(`商品名：${this.name}`); // OK
        // console.log(`価格：${this.price}`);  // エラー
        console.log(`カテゴリ：${this.category}`); // OK
    }
}
const shampoo = new Product("シャンプー", 500, "生活雑貨");
shampoo.describe();
const coffee = new Drink("コーヒー", 1500, "飲料");
console.log('---- 外部からのアクセス ----');
console.log(`商品名：${shampoo.name}`); // OK
// console.log(`価格：${shampoo.price}`);  // エラー
// console.log(`カテゴリ：${shampoo.category}`);  // エラー
//# sourceMappingURL=class.js.map