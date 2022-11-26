
let outputScreen = document.getElementById("outputScreen");
// let num = "";
 let allowComa = true;

function display (num){
    outputScreen.value = outputScreen.value + num;
}

function displayOpe (num){
    outputScreen.value = outputScreen.value + num;
    allowComa = true;
}

function displaydot (num){
    if (allowComa === true) {
        outputScreen.value = outputScreen.value + num;
        allowComa = false;
    }
    
}

function Clear(){
        outputScreen.value = "";
        allowComa = true
    }

function Del (){
        outputScreen.value = outputScreen.value.slice(0,-1);
}

// function addToSum(operator){
// num = num + operator;
// document.getElementById('outputScreen').value = num;
// }


function evaluateSum() {
    // outdocument.getElementById('outputScreen').innerText
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err) {
        outputScreen.value = ("Error");
    }
}

