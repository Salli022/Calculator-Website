const button0 = document.querySelector("#zero");
const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
const plus = document.querySelector("#plus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const minus = document.querySelector("#minus");
const mod = document.querySelector("#mod");
const clear = document.querySelector("#Clear");
const equals = document.querySelector(".equals");
let display = document.getElementById("display");


let eval = false;
let operatorChosen = false;
let operator = null;
let firstnum = null;
let secondnum = null;

button0.onclick = () => Number("0");
button1.onclick = () => Number("1");
button2.onclick = () => Number("2");
button3.onclick = () => Number("3");
button4.onclick = () => Number("4");
button5.onclick = () => Number("5");
button6.onclick = () => Number("6");
button7.onclick = () => Number("7");
button8.onclick = () => Number("8");
button9.onclick = () => Number("9");
equals.onclick = () => evaluate();
clear.onclick = () => clearFunction();


plus.onclick = () => {
        addOperator("+");
        operatorChosen = true;
        operator = "+";
    }
minus.onclick = () => {
        addOperator("-");
        operatorChosen = true;
        operator = "-";
    }
divide.onclick = () => {
        addOperator("/");
        operatorChosen = true;
        operator = "/";
    }
multiply.onclick = () => {
        addOperator("*");
        operatorChosen = true;
        operator = "*";
    }
mod.onclick = () => {
        addOperator("%");
        operatorChosen = true;
        operator = "%";
    }



function addVal(val){
    display.innerHTML = display.innerHTML + val;
    console.log("added val");
}

function addOperator(val){
    if (operatorChosen == false){
        display.innerHTML = display.innerHTML + val;
        console.log(val);
    }
}

function Number(val){
    if (eval == false && operatorChosen == false){
        if (display.innerHTML == "0"){
            display.innerHTML = val;
            firstnum = val;
        }
        else{
            display.innerHTML = display.innerHTML + val;
            firstnum = firstnum + val;
        }
        
    }
    else if (operatorChosen == true){
        if (secondnum == null){
            secondnum = val;
            display.innerHTML = display.innerHTML + val;
            eval = true;
        }
        else{
            secondnum = secondnum + val;
            display.innerHTML = display.innerHTML + val;
            eval = true;
        }
    }
}

function evaluate(){
    if (firstnum != null && secondnum != null){
        eval = true;
        if (operator == "+"){
            display.innerHTML = parseInt(firstnum) + parseInt(secondnum);
        }
        else if (operator == "-"){
            display.innerHTML = parseInt(firstnum) - parseInt(secondnum);
        }
        else if (operator == "/"){
            display.innerHTML = parseInt(firstnum)/parseInt(secondnum); 
        }
        else if (operator == "*"){
            display.innerHTML = parseInt(firstnum)*parseInt(secondnum); 
        }
        else if (operator == "%"){
            display.innerHTML = parseInt(firstnum)%parseInt(secondnum); 
        }
        checkSize();
        eval = false;
        operatorChosen = false;
    }
}


function checkSize(){
    if (display.innerHTML.length >= 9){
        display.innerHTML =  display.innerHTML.substring(1, 8);
    }
}
function clearFunction(){
    eval = false;
    operatorChosen = false;
    operator = null;
    firstnum = null;
    secondnum = null;
    display.innerHTML = "0";
}
