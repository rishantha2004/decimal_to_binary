const decimalNumber = document.getElementById('decimalNumber');
const btn = document.getElementById('btn');

btn.onclick = function() {
    
    // convert user's input string to int
    let stringToInt = parseInt(decimalNumber.value, 10);

    //Array for store binary digits
    let binaryDigits = [];
   
    //Calculation for convert decimal number to binary number
    while (stringToInt >= 1) {
        //get remainder of decimal number
        let remainder = stringToInt % 2;
        //push remainder to binaryDigits array
        binaryDigits.push(remainder);
        //rounder to natural number after dividing
        stringToInt = Math.floor(stringToInt / 2);
    }
   //reverse the array and join as string display
   let binaryNumber = binaryDigits.reverse().join('');
   document.getElementById("result").textContent = binaryNumber;
};
