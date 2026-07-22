import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int num=new Random().nextInt(100)+1;
        int guess;
        do{
            System.out.print("Guess: ");
            guess=sc.nextInt();
            if(guess<num){
                System.out.println("Too Low");
            }else if(guess>num){
                System.out.println("Too High");
            }
        }while(guess!=num);
        System.out.println("Correct!");
        sc.close();
    }
}