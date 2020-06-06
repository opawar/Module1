"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test2_1 = require("./Module2/src/test2");
class test1 {
    static async one() {
        console.log("one");
        await test2_1.test2.three();
    }
}
exports.test1 = test1;
test1.one();
