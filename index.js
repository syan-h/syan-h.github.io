
let num = '';
let num1 = '';

let plus = 0;
let minus = 0;
let divide = 0;
let multiply = 0;

function showOne() {
	document.getElementById('main-screen').innerHTML += 1;
    if (typeof num == "number"){
        num1 += '1'
    }else{
        num += '1'
    }
    

}

function showTwo() {
	document.getElementById('main-screen').innerHTML += 2;
    if (typeof num == "number"){
        num1 += '2'
    }else{
        num += '2'
    }
    
}

function showThree() {
	document.getElementById('main-screen').innerHTML += 3;
    if (typeof num == "number"){
        num1 += '3'
    }else{
        num += '3'
    }
    
}

function showFour() {
	document.getElementById('main-screen').innerHTML += 4;
    if (typeof num == "number"){
        num1 += '4'
    }else{
        num += '4'
    }
    
}

function showFive() {
	document.getElementById('main-screen').innerHTML += 5;
    if (typeof num == "number"){
        num1 += '5'
    }else{
        num += '5'
    }
    
}

function showSix() {
	document.getElementById('main-screen').innerHTML +=6;
    if (typeof num == "number"){
        num1 += '6'
    }else{
        num += '6'
    }
    
}

function showSeven() {
	document.getElementById('main-screen').innerHTML += 7;
    if (typeof num == "number"){
        num1 += '7'
    }else{
        num += '7'
    }
    
}

function showEight() {
	document.getElementById('main-screen').innerHTML += 8;
    if (typeof num == "number"){
        num1 += '8'
    }else{
        num += '8'
    }
    
}

function showNine() {
	document.getElementById('main-screen').innerHTML += 9;
    if (typeof num == "number"){
        num1 += '9'
    }else{
        num += '9'
    }
    
}

function showZero() {
	document.getElementById('main-screen').innerHTML += 0;
    if (typeof num == "number"){
        num1 += '0'
    }else{
        num += '0'
    }
    
}

function clearAll() {
	document.getElementById('main-screen').innerHTML = '';    
}

function full_clear(){
    document.getElementById('main-screen').innerHTML = ''; 
    num = ''
    num1 = ''
    multiply = 0
    plus = 0
    divide = 0
    minus = 0
    x = 0

}

function plus_kar(){
    num = parseInt(num);
    clearAll()
    plus += 1
    
}



function equal_to(){
    num1 = parseInt(num1)
    
    if (plus > 0){
        x = num+num1
        clearAll()
        document.getElementById('main-screen').innerHTML = x
        console.log(x)
        num = parseInt(x)
    }
    else if (divide > 0){
        x = num/num1
        clearAll()
        document.getElementById('main-screen').innerHTML = x
        console.log(x)
        num = parseInt(x)
    }
    
    else if (minus > 0){
        x = num-num1
        clearAll()
        document.getElementById('main-screen').innerHTML = x
        console.log(x)
        num = x
    }
    else if (multiply > 0){
        x = num*num1
        clearAll()
        document.getElementById('main-screen').innerHTML = x
        console.log(x)
        num = x
    }
    
    num1 =''
    multiply = 0
    plus = 0
    minus = 0
    divide = 0
    x = 0

}


function minus_kar(){
    num = parseInt(num);
    clearAll()
    minus += 1
    
}


function multiply_kar(){
    num = parseInt(num);
    clearAll()
    multiply += 1
    
}

function divide_kar(){
    num = parseInt(num);
    clearAll()
    divide += 1
    
}

