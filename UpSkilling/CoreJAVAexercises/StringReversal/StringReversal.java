import java.util.Scanner;

public class StringReversal{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a string: ");
        String s=sc.nextLine();
        System.out.println(new StringBuilder(s).reverse());
        sc.close();
    }
}