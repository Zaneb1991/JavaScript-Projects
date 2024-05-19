// Ternary Operator
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Old enough to VOTE!
function VotingAge() {
    const age = document.getElementById('age').value;
    const message = age >= 18 ? "You Can Vote!" : "You Are Not Old Enough To Vote.";
    document.getElementById('result').innerText = message;
}

// Keywords - Coding Assignment
function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// New Keyword Assignment
function Pokemon (Number, Type, Health, Speed) {
    this.Pokemon_Number = Number;
    this.Pokemon_Type = Type;
    this.Pokemon_Health = Health;
    this.Pokemon_Speed = Speed;
}
var Bulbasaur = new Pokemon(1, "Grass", 45, 45);
var Charizard = new Pokemon(6, "Fire", 78, 100);
var Squirtle = new Pokemon(7, "Water", 44, 43);
var Pikachu = new Pokemon(25, "Electric", 35, 90);
function NewKeyword() {
    document.getElementById("New_and_This").innerHTML = "Pikachu is an " + Pikachu.Pokemon_Type + " type Pokemon. " + " That reaches a speed of " + Pikachu.Pokemon_Speed + ". With a Health Power of " + Pikachu.Pokemon_Health + ". its Number in the PokeDex is " + Pikachu.Pokemon_Number;
}

// Nested Count Functions
function NestedCount() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Figure1 = 22;
        function Plus_eight() {Figure1 += 8;}
        Plus_eight();
        return Figure1;
    }
}