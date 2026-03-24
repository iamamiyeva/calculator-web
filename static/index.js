const display = document.getElementById("display");
let reset = false;

function appendToDisplay(input){
    if(reset){
        display.value = "";
        reset = false;
    }
    if(display.value === "Error"){
        display.value = "";
    }
    display.value += input;
}

function calculate(){
    
    try{
        let result = eval(display.value);
        if (!isFinite(result)){
            display.value = "Error";
        }else{
            display.value = result;
            reset = true;
        }
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
}