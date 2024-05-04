//Main JavaScript - Dictionary Assignment
function My_Dictionary() {
    var Pokemon = {
        Name: "Pikachu",
        Type: "Electric",
        Species: "Mouse",
        Height: "0.4m",
        Weight: "6.0kg",
        Abilities: "Lightning Rod",
    };
        delete Pokemon.Type; // This deletes the 'TYPE' value from the dictionary
        document.getElementById("Dictionary").innerHTML = Pokemon.Type;
}