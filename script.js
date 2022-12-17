
var1="";
var2="";
test=0;
sum=0;
let output=document.getElementById('screen')
document.getElementById('item0').onclick=()=>{
    output.innerHTML+="0"
    if(test==1||test==2||test==3||test==4){
      var2+="0"
      console.log(var2)
    }else{
        var1+="0"
        console.log(var1)
    }
   
}
document.getElementById('item1').onclick=()=>{
    output.innerHTML+="1"
    if(test==1||test==2||test==3||test==4){
        var2+="1"
        console.log(var2)
      }else{
          var1+="1"
          console.log(var1)
      }
}
document.getElementById('item2').onclick=()=>{
    output.innerHTML+="2"
    if(test==1||test==2||test==3||test==4){
        var2+="2"
        console.log(var2)
      }else{
          var1+="2"
          console.log(var1)
      }
}
document.getElementById('item3').onclick=()=>{
    output.innerHTML+="3"
    if(test==1||test==2||test==3||test==4){
        var2+="3"
        console.log(var2)
      }else{
          var1+="3"
          console.log(var1)
      }
}
document.getElementById('item4').onclick=()=>{
    output.innerHTML+="4"
    if(test==1||test==2||test==3||test==4){
        var2+="4"
        console.log(var2)
      }else{
          var1+="4"
          console.log(var1)
      }
}
document.getElementById('item5').onclick=()=>{
    output.innerHTML+="5"
    if(test==1||test==2||test==3||test==4){
        var2+="5"
        console.log(var2)
      }else{
          var1+="5"
          console.log(var1)
      }
}
document.getElementById('item6').onclick=()=>{
    output.innerHTML+="6"
    if(test==1||test==2||test==3||test==4){
        var2+="6"
        console.log(var2)
      }else{
          var1+="6"
          console.log(var1)
      }
}
document.getElementById('item7').onclick=()=>{
    output.innerHTML+="7"
    if(test==1||test==2||test==3||test==4){
        var2+="7"
        console.log(var2)
      }else{
          var1+="7"
          console.log(var1)
      }
}
document.getElementById('item8').onclick=()=>{
    output.innerHTML+="8"
    if(test==1||test==2||test==3||test==4){
        var2+="8"
        console.log(var2)
      }else{
          var1+="8"
          console.log(var1)
      }
}
document.getElementById('item9').onclick=()=>{
    output.innerHTML+="9"
    if(test==1||test==2||test==3||test==4){
        var2+="9"
        console.log(var2)
      }else{
          var1+="9"
          console.log(var1)
      }
}
document.getElementById('item-').onclick=()=>{
    output.innerHTML+="-"
   test=2
   
}
document.getElementById('item+').onclick=()=>{
    output.innerHTML+="+"
    test=1
}
document.getElementById('item÷').onclick=()=>{
    output.innerHTML+="÷"
    test=3
}
document.getElementById('item*').onclick=()=>{
    output.innerHTML+="*"
   test=4
}
document.getElementById('itemc').onclick=()=>{
 output.innerHTML=""
 test=0
 var1="";
 var2="";
}
document.getElementById('item=').onclick=()=>{
    if(test==1){
        number1= Number(var1);
        number2= Number(var2);
         sum=number1+number2;
         output.innerHTML=sum
         var1=sum;
         var2="";
         test=0
    }else if(test==2){
        number1= Number(var1);
        number2= Number(var2);
         sum=number1-number2;
         output.innerHTML=sum
         number1=sum
         var1=sum;
         var2="";
         test=0
    }else if(test==3){
        number1= Number(var1);
        number2= Number(var2);
         sum=number1/number2;
         output.innerHTML=sum
         number1=sum
         var1=sum;
         var2="";
         test=0
    }else if(test==4){
        number1= Number(var1);
        number2= Number(var2);
         sum=number1*number2;
         output.innerHTML=sum
         number1=sum
         var1=sum;
         var2="";
         test=0
    }
  
  
}