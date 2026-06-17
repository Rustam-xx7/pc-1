var a = 12;
var b = 13;
// tuples , fixed length ,and predefined types where to put what .
let arr: [number, string] = [1, "hello"];

class Devise {
  name = "lg";
  price = 1200;
}

class BottleMaker {
  protected name = "milton";
}

class MetalBottleMaker extends BottleMaker {
  public material = "steel";

  changeName(name: string) {
    this.name = name;
  }
} 

let b1 = new MetalBottleMaker();
b1.changeName("tupperware");
   