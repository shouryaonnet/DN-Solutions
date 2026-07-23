class Car{
    String make,model;
    int year;
    Car(String make,String model,int year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    void displayDetails(){
        System.out.println(make+" "+model+" "+year);
    }
}

public class ClassAndObjectCreation{
    public static void main(String[] args){
        Car c=new Car("Toyota","Fortuner",2024);
        c.displayDetails();
    }
}