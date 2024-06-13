function Food_Function() {
    var Food_Output;
    var Food = document.getElementById("Food_Choice").value;
    var Food_String = " is the best flavour.";
    switch(Food) {
        case "Leek and Potato Soup":
            Food_Output = "Leek and Potato Soup" + Food_String;
        break;
        case "Chilli":
            Food_Output = "Chilli" + Food_String;
        break;
        case "Cooked Dinner":
            Food_Output = "Cooked Dinner" + Food_String;
        break;
        case "Chicken Curry":
            Food_Output = "Chicken Curry" + Food_String;
        break;
        case "Burger":
            Food_Output = "Burger" + Food_String;
        break;
        case "Pasta Bake":
            Food_Output = "Pasta Bake" + Food_String;
        break;
        case "Chips":
            Food_Output = "Chips" + Food_String;
        break;
        default:
        Food_Output = "Please enter a food exactly as written above.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

// getElementsByClassName
function ClassName_Function() {
    var A = document.getElementsByClassName("Press");
    A[0].innerHTML = "Changed Text.";
}

// Canvas with Javascript
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);