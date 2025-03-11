let a=parseInt(prompt("enter num:"))
let b=parseInt(prompt("enter 2nd sub num"))
let c=parseInt(prompt("enter 3rd "))
let per=(a+b+c/300)*100
if(per>90){
    console.log("a")
}
else if(per>=75&&per<90){
    console.log("b")
}
else{
    console.log("c")
}