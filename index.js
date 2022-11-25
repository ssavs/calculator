
let outputScreen = document.getElementById("outputScreen");
// let num = "";

function display (num){
    outputScreen.value += num;
}

    function Clear(){
        outputScreen.value = "";
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

