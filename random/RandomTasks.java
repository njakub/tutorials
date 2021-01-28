import java.util.*;  


public class RandomTasks {
    private static Scanner sc= new Scanner(System.in);    //System.in is a standard input stream  

    public static void main(String[] args){

        mainMenuText();            
	
    }

    private static void mainMenuText(){
        Scanner sc= new Scanner(System.in);    //System.in is a standard input stream  

        System.out.print("Welcome to Random Tasks!" +"\n");  
        System.out.print("Select one of the following tasks:");  
        System.out.print("1. Generate a random number.");  
        System.out.print("2. Reverse a word.");  
        int choice= sc.nextInt();  
    }

}