import java.util.Scanner;

public class TryCatchExample{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter two numbers: ");
        int a=sc.nextInt();
        int b=sc.nextInt();
        try{
            System.out.println("Result = "+(a/b));
        }catch(ArithmeticException e){
            System.out.println("Cannot divide by zero");
        }
        sc.close();
    }
}