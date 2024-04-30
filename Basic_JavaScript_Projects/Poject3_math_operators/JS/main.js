// Addition
function performAddition() { //Addition Function
    var num1 = 8;
    var num2 = 22;
    var result = num1 + num2;

    var mathParagraph = document.getElementById('Math');

    mathParagraph.textContent = "Addition Result is: " + result; //Printing the result in HTML
}

// Subtraction
function performSubtraction() { //Subtraction Function
    var num3 = 32;
    var num4 = 12;
    var result = num3 - num4;

    var mathParagraph = document.getElementById('Subtract');

    mathParagraph.textContent = "Subtraction Result is: " + result; //Printing the result in HTML
}

// Multiplication
function performMultiplication() {  //Multiplication Function
    var num5 = 2;
    var num6 = 8;
    var result = num5 * num6;

    var mathParagraph = document.getElementById('Multiplication');

    mathParagraph.textContent = "Multiplication Result is: " + result; // Printing the result in HTML
}

// Division
function performDivision() { // Division Function
    var num7 = 54;
    var num8 = 3;
    var result = num7 / num8;
    
    var mathParagraph = document.getElementById('Division');

    mathParagraph.textContent = "Division Result is: " + result; // Printing the result in HTML
}

// Multiple Operations
function performMultiple() { // Multiple Function
    var num9 = (7 + 4) * 10 / 4 - 1;
   
    document.getElementById("Multiple").innerHTML = "Multiple Operations Result is: " + num9; // Printing the result in HTML
}

// Modulus Operator
function performModulus() { //Modulus Function
    var num10 = 25 % 7;

    document.getElementById("Modulus").innerHTML = "Modulus Operator Result is: " + num10; // Printing the result in HTML
}

// Negation Operator
function performNegation() { // Negation Function
    var x = 25;

    document.getElementById("Negation").innerHTML = "Modulus Operator Result is: "+ -x; // Printing the result in HTML
}

// Increment Operator
function performIncrement() { // Increment Function
    var X = 5;
    X++;

    document.getElementById("Increment").innerHTML = "Increment Operator Result is: " + X++; // Printing the result in HTML
}

// Decrement Operator
function performDecrement() { // Decrement function
    var X = 7.45;
    X--;

    document.getElementById("Decrement").innerHTML = "Decrement Operator Result is: " + X--; // Printing the result in HTML
}

// Random Math 0-1
function performMath() { // Random Function
    window.alert(Math.random()); // Printing the result in a pop up window in HTML
}

// Random Math 0-100
function performMath100() { // Random Function
    window.alert(Math.random() * 100); // Printing the result in a pop up window in HTML
}

//Math Objects PI
function performPI() { // Math Object PI Function
    document.getElementById("MathPI").innerHTML = "<p><b>Math.PI: </b>" + Math.PI + "</p>" // Printing the result in HTML
}