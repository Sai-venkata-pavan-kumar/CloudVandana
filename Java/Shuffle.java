import java.util.Random;
class Shuffle{
    public static void main(String args[]){
        int arr[]={1,2,3,4,5,6,7};
        Random rand=new Random();
        int temp=0;
        for(int i=0;i<arr.length;i++){
            int r=rand.nextInt(arr.length);
            temp=arr[i];
            arr[i]=arr[r];
            arr[r]=temp;
        }
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }
}
