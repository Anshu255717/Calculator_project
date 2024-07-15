//temporary variables and array to hold data and operands
let a=[],solve=[],ope=[];
let num1="";
let n1,n2;
let op="",d="",operations="";
var results=0;
let number1=0,number2=0,s=0;
//function to perform calculation 
function solves()
{
    //perform calculation for two op.
if(ope.length<=2)
{
number1=solve.shift();//extracting number 1 and number 2 from solve array
number2=solve.shift();
operations=ope.shift();//extracting op. from ope array
if(operations=="+")
{
     results=number1+number2;
     document.getElementById("display").innerHTML=results;
}
else if(operations=="-")
{
    results=number1-number2;
     document.getElementById("display").innerHTML=results;
}
else if(operations=="*")
{
    results=number1*number2;
     document.getElementById("display").innerHTML=results;
}
else if(operations=="/")
{
    results=number1/number2;
     document.getElementById("display").innerHTML=results;
}
}
//perform calculation for two or more op.
else if (ope.length >= 3) 
{
let i = 0;
//perform calculation for all  operations 
while (i<ope.length)    
{
if (i == 0) 
{
     n1 = solve.shift();
     n2 = solve.shift();
}
 else
{
     n1 = s;
     n2 = solve.shift();
}
switch (ope[i]) 
{
    case "+":
        s = n1 + n2;
        console.log(s);
        break;
    case "-":
        s = n1 - n2;
        break;
    case "*":
        s=n1*n2;
       break;
    case "/":
        s=n1/n2;
}
i++;
}
document.getElementById("display").innerHTML = s;
s=0;
}

}
// Function to process the calculation
function calculate() 
{
while (a.length > 0) 
{
let pops = a.shift();
if (!isNaN(pops)) {
    solve.push(pops);
}
if (pops == "+" || pops == "-" || pops == "*" || pops == "/"||pops=="=") {
    ope.push(pops);
}
}
}
//get all bttns by classname
let bt=document.getElementsByClassName("no");
// Function to clear the calculator
function clear(event)
{
    event.target.style.background="aqua";
    event.target.style.color="black";
    setTimeout(()=>{
        event.target.style.background="rgb(145, 121, 58)";
        event.target.style.color="white";
    },1000);
    document.getElementById("display").textContent="";
     a=[],solve=[],ope=[];
     num1="";
     n1,n2;
     op="",d="", operations="";
    results=0,number1=0, number2=0,s=0;

}
// Add click event listener to the clear button
document.getElementById("result").addEventListener('click',clear);
// Function to handle button clicks
function check(event)
{
    event.target.style.background="aqua";
    event.target.style.color="black";
    setTimeout(()=>{
        event.target.style.color="white";
        if(event.target.textContent=="+"||event.target.textContent=="-"||event.target.textContent=="*"||event.target.textContent=="/")
        {
            event.target.style.background="rgb(145, 121, 58)";
        }
        else{
            event.target.style.background="rgba(67, 46, 46, 0.5)";
        }
    },1000);
    let content=event.target.textContent;
     // If the button pressed is not "=", handle input acc.
    if(content!="=")
    {
    if(content!="+"&&content!="-"&&content!="*"&&content!="/")
    {
        num1+=content;//build the no
        d+=content;//update display
        n1=parseFloat(num1);
        document.getElementById("display").innerHTML=d;
    }
    else if(content=="+"||content=="-"||content=="*"||content=="/")
    {
            op=content;//store operator
            a.push(n1);//push no and op. to array
            a.push(op);
            d+=content;
            document.getElementById("display").innerHTML=d;
            num1="";
    }
    }
    else
    {
        a.push(n1);// Push the last number
        if(content=="=")
        {
         a.push("=");// Add "=" to the array
        calculate();
        solves();
        }
    }
}
// Add click event listeners to all number buttons
for (let i=0;i<bt.length;i++)
{
    bt[i].addEventListener('click', check);
}