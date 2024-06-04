// loop Assignment
function Call_Loop() {
    let text = "";
    let i = 0;
    while (i < 16) {
        text += "<br>This is NUMBER: " + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

// For Loop Assignment
var Instruments = ["Drum", "Triangle", "Bass", "Guitar", "Harp", "Violin"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// document.getElementById().innnerHTML Assignment
function array_Function() {
    var Athlete_Picture = [];
    Athlete_Picture[0] = "Running";
    Athlete_Picture[1] = "Jumping";
    Athlete_Picture[2] = "Shotput";
    Athlete_Picture[3] = "Hammerthrow";
    document.getElementById("Array").innerHTML = "In these pictures, the Athlete's doing diffrent sporting events, such as " + Athlete_Picture[3] + ".";
}

// Const Keyword Assignment
function constant_function() {
    const Car_Styles = {type:"Ford", brand:"Focus", color:"Silver"};
    Car_Styles.color = "Blue";
    Car_Styles.price = "15,000";
    document.getElementById("Constant").innerHTML = "One of the most popular cars are: " + Car_Styles.type + " and the most bought brand is: " + Car_Styles.brand + "." + " The most recognised color being " + Car_Styles.color + " with a price tag of " + Car_Styles.price;
}

// Let Keyword Assignment
function Let_function() {
var X = 22;
    document.write(X);
    {
        let X = 76;
        document.write("<br>" + X);
    }
    document.getElementById("Let").innerHTML = document.write("<br>" + X);
}

// Object Assignment
function Plane () {
    let Plane = {
        model: "Boeing 747",
        capacity: 416,
        range_km: 14815,
        current_speed: 0,
        current_altitude: 0,
        description : function() {
            return "The plane model is " + this.model + " the capacity is " + this.capacity + " the KM Range is " + this.range_km;
     }
    };
    document.getElementById("Plane_Object").innerHTML = Plane.description();
}