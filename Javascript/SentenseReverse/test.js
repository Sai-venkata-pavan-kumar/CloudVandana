let btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    let res="";
    let text=document.querySelector('.text').value;
    let arr=text.split(' ');
    for(let i=0;i<arr.length;i++){
        res+=reverse(arr[i])+" ";
    }
    console.log(res.trimEnd())
    document.querySelector('.result').innerHTML=res.trimEnd();
})  
function reverse(str){
    let res="";
    for(let i=0;i<str.length;i++){
        res=str.charAt(i)+res;
    }
    return res;
}
