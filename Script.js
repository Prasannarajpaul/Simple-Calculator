function add(){
let a=parseInt(document.getElementById("value1").value);
let b=parseInt(document.getElementById("value2").value);
let c=a+b;
document.getElementById("answer").innerHTML="Addition is "+c;
}
function sub(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a-b;
    document.getElementById("answer").innerHTML="Subtraction is "+c;
}
function mul(){
        let a=parseInt(document.getElementById("value1").value);
        let b=parseInt(document.getElementById("value2").value);
        let c=a*b;
        document.getElementById("answer").innerHTML="Multiplication is "+c;
}
function div(){
            let a=parseInt(document.getElementById("value1").value);
            let b=parseInt(document.getElementById("value2").value);
            let c=a/b;
            document.getElementById("answer").innerHTML="Division is "+c;
}
function pow(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a**b;
    document.getElementById("answer").innerHTML="Power is "+c;
}
function diff(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    if(a<b){let t=a;a=b;b=t;}
    let c=a-b;
    document.getElementById("answer").innerHTML="Difference is "+c;
}
function floor(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=Math.floor(a/b);
    document.getElementById("answer").innerHTML="Quotient is "+c;
}
function mod(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a%b;
    document.getElementById("answer").innerHTML="Remainder is "+c;
}

function clr(){
    document.getElementById("value1").innerHTML=Number;
    document.getElementById("value2").innerHTML=Number;
}
