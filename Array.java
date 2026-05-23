import java.util.*;
class Array{
    public static void main(String args[]){
        //first method
        // int arr[]={66,65,65,65};
        //secons method
         Scanner obj=new Scanner(System.in);
         int size = obj.nextInt();
        int [] marks=new int[size];
        int target=5;
        // marks[0]=15;
        // marks[1]=15;
        // marks[2]=5;
        // marks[3]=55;
        // marks[4]=85;
        for(int i=0;i<size;i++){
         marks[i]=obj.nextInt();   
        }
        for(int i=0;i<size;i++){
        if(marks[i]==target){
            System.out.print(i);
        }
     }


    }
}