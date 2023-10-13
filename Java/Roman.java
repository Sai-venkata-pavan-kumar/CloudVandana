import java.util.Scanner;

class Roman{
    public static void main(String arg[]){
        Roman obj=new Roman();
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the Roman numbers");
        String str=sc.nextLine();
        System.out.println("The Result is "+obj.romanToInt(str));
        sc.close();
    }
    int NumValue(char rom){
      if (rom == 'I'||rom == 'i')
         return 1;
      if (rom == 'V'||rom == 'v')
         return 5;
      if (rom == 'X'||rom == 'x')
         return 10;
      if (rom == 'L'||rom == 'l')
         return 50;
      if (rom == 'C'||rom == 'c')
         return 100;
      if (rom == 'D'||rom == 'd')
         return 500;
      if (rom == 'M'||rom == 'm')
         return 1000;
      return -1;
   } 
    int romanToInt(String str){
        int sum=0;
        for(int i=0;i<str.length();i++){
            int s1=NumValue(str.charAt(i));
            if(i+1<str.length()){
                int s2=NumValue(str.charAt(i+1));
                if(s1>=s2){
                    sum=sum+s1;
                }
                else{
                    sum=sum-s1;
                }
            }
            else{
                sum=sum+s1;
            }
        }
        return sum;
    }
}
