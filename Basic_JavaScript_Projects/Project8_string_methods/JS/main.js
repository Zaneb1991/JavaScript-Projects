// concat() Method
function First_Sentence() {
    var part_1 = "This is ";
    var part_2 = "my first time ";
    var part_3 = "making a sentence ";
    var part_4 = "that is made up of ";
    var part_5 = "multiple strings.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Slice() Method
function Slice_Method() {
    var Sentence = "There was a puppy called Tallulah that loved to wear a pretty Tu-Tu";
    var Section = Sentence.slice(55,61);
    document.getElementById("SliceMethod").innerHTML = Section;
}

// toUpperCase() Challenge
function Upper_Case() {
    let text = document.getElementById("UpperCase").innerHTML;
    document.getElementById("UpperCase").innerHTML = text.toUpperCase();
}

// toString() Method
function string_Method() {
    var X = 242;
    document.getElementById("toString").innerHTML = X.toString();
}

//toPrecision() Method
function toPrecision() {
    var X = 12938.3012987376112;
    document.getElementById("toString").innerHTML = X.toPrecision(10);
}


