"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 12;
var b = 13;
// tuples , fixed length ,and predefined types where to put what .
let arr = [1, "hello"];
class Devise {
    name = "lg";
    price = 1200;
}
class BottleMaker {
    name = "milton";
}
class MetalBottleMaker extends BottleMaker {
    material = "steel";
    changeName(name) {
        this.name = name;
    }
}
let b1 = new MetalBottleMaker();
b1.changeName("tupperware");
//# sourceMappingURL=app.js.map