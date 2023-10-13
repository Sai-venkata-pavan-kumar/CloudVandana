const inp=document.querySelector('.input')
let exp="";
function input(value){
    exp=exp+value;
    inp.innerHTML=exp
}
function submit(){
    try{
    let res=eval(exp);
    exp=res;
    inp.innerHTML=res;
    }
    catch(e){
        alert('please enter valid expressions')
    }
}
function remove(){
  inp.innerHTML = "";
  exp = "";
}
