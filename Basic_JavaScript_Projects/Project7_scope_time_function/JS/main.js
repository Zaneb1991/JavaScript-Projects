// Global Variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

// Local Variable
function Add_numbers_3() {
    var Y = 20;
    document.write (40 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 160);
    }
Add_numbers_3();
Add_numbers_4();

// console.log
function Add_numbers3() {
    var Y = 20;
    console.log(15 + Y);
}
function Add_numbers4() {
    console.log(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

// Method Statement
function get_Date() {
    if (new Date().getHours() <23) {
        document.getElementById("Winner").innerHTML = "Congratulations You Are The Champion!";
    }
}

// IF Statement
function IF_NOT() {
 if (10 < 22);
    document.getElementById("HigherLower").innerHTML = document.write("Left number is lower than right number");
 }

 // ELSE Function
 function Age() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You Are Old Enough To Drink";
    }
    else {
        Drink = "You Are Not Old Enough To Drink";
    }
    document.getElementById("AreYouOldEnough?").innerHTML = Drink;
}

// ELSE IF Function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}