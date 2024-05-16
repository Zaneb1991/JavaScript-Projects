// Type Of JavaScript that returns the output 'number'
document.write(typeof 25);

// Coercion JavaScript returning the number '1012'
document.write("10" + 12);

// Displaying NaN
function My_Function() {
    document.getElementById("NaN").innerHTML = 0/0;
}

// isNaN to display "True"
function isNaN_True() {
    document.getElementById("isNaNt").innerHTML = isNaN('WebDeveloping');
}

// isNaN to display "False"
function isNaN_False() {
    document.getElementById("isNaNf").innerHTML = isNaN('025');
}

// Displaying Infinity
function Infinate() {
    document.getElementById("Infinity").innerHTML = document.write(2E310);
}
// Displaying -Infinity
function MinusInfinate() {
    document.getElementById("-Infinity").innerHTML = document.write(-3E310);
}

// Boolean True
function BooleanTrue() {
    document.getElementById("True").innerHTML = document.write(25 > 10);
}

// Boolean False
function BooleanFalse() {
    document.getElementById("False").innerHTML = document.write(25 < 6);
}

// console.log() operation
console.log(10 + 2);

// False with Boolean and Console
console.log(10 > 17);

// Double Equals True Operation
function DoublesTrue() {
    document.getElementById("DoubleTrue").innerHTML = document.write (25==25);
}

// Double Equals False Operation
function DoublesFalse() {
    document.getElementById("DoubleFalse").innerHTML = document.write (10==32);
}

// Triple Equals matching data type and value Result 'True'
function DataValueTrue() {
    A = 10;
    B = 10;
    document.getElementById("TripleEqualsA").innerHTML = document.write(A===B);
}

// Triple Equals with different data type and value - Result 'False'
function DataValueFalse() {
    A = 5;
    B = '12';
    document.getElementById("TripleEqualsB").innerHTML = document.write(A===B);
}

//Triple Equals different data type but the same value for both - Result 'False'
function ValueDataFalse() {
    A = 10;
    B = '10';
    document.getElementById("TripleEqualsC").innerHTML = document.write(A===B);
}

// Triple Equals same data type but different value for both - Result 'False'
function FalseValueData() {
    A = 5;
    B = 17;
    document.getElementById("TripleEqualsD").innerHTML = document.write(A===B);
}

// Boolean AND True Result
function ANDTrue() {
    document.getElementById("BooleanAND1").innerHTML = document.write(6 > 1 && 20 > 9);
}

// Boolean AND False Result
function ANDFalse() {
    document.getElementById("BooleanAND2").innerHTML = document.write(7 > 2 && 10 > 17);
}

// Boolean OR True Result
function ORTrue() {
    document.getElementById("BooleanOR1").innerHTML = document.write(3 > 9 || 10 > 7);
}

// Boolean OR False Result
function ORFalse() {
    document.getElementById("BooleanOR2").innerHTML = document.write(17 > 20 || 5 > 10);
}

// Boolean NOT True Result
function NOTtrue() {
    document.getElementById("BooleanNOT1").innerHTML = !(3 > 9);
}

// Boolean NOT False Result
function NOTfalse() {
    document.getElementById("BooleanNOT2").innerHTML = !(10 > 5);
}