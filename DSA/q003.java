// inheritance 

public class q003 {
    public static void main(String[] args) {
        q003child car = new q003child("Toyota", "Camaro", 4 , 5 , "black");
        car.startEng();
        car.startAc();
        car.stopEng();
    }
}
