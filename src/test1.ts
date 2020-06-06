import { test2 } from "./Module2/src/test2";

export class test1 {
    static async one() {
        console.log("one");
        await test2.three();
    }
}

test1.one();