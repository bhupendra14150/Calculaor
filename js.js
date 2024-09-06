let btn=document.querySelectorAll(".first");
        let  input=document.querySelector("input");
        let str="";

       btn.forEach((btns)=>{
btns.addEventListener("click",function(e){
let select=e.target.dataset.filter;
console.log(select);
 if(select=="="){
    str=eval(str);
    input.value=str;
 }
 else if(select=="Del"){
    str=str.substring(0,str.length-1);
    input.value=str;

 }
 else if(select=="AC"){
    str="";
    input.value=str;
    console.log("this code is ")

 }
 else{
    str=str+select;
  input.value=str;
 
 }

})

       })