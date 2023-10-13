let a=[1,5,3,2,5,6,8,7,9];
//without using builtin method
let temp;
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<=a.length;j++){
        if(a[i]<a[j]){
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
a.forEach((e)=>{
    console.log(e);
})

//using inbuilt sort method

// a.sort((a,b)=>{
//     return b-a;
// })
// console.log(a);
