

const display = document.querySelector("#input");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Syntax error";
    }
}

function clearDisplay(){
    display.value = "";
}