//Getting gender.
function getGender() {
    var selectedGender = document.getElementById('select-gender').value;
    //Check if gender is selected.
    if (selectedGender == "m" || selectedGender == "f") {
        return selectedGender;
    }
    else {
        return false;
    }
}

//Getting age.
function getAge() {
    var age = document.getElementById('enter-age').value;
    //Check if age is a number.
    if (/\d/.test(age)) {
        return age;
    }
    else {
        return false;
    }
}

//Getting weight.
function getWeight() {
    var weight = document.getElementById('enter-weight').value;
    //Check if weight is a number.
    if (/\d/.test(weight)) {
        return weight;
    }
    else {
        return false;
    }
}

//Getting height.
function getHeight() {
    var height = document.getElementById('enter-height').value;
    //Check if height is a number.
    if (/\d/.test(height)) {
        return height;
    }
    else {
        return false;
    }
}

//Getting person.
function getPerson() {
    var gender = getGender();
    var age = getAge();
    var weight = getWeight();
    var height = getHeight();
    //Create person object.
    var person = {
        gender,
        age,
        weight,
        height
    };
    //Check if data is correctly passed.
    if (gender != false && age != false &&
        weight != false && height != false) {
        return person; //Return person object.
    }
    else {
        return false;
    }
}

var sizes = ["xs", "s", "m", "l", "xl"];

//Generate sizes for m.
function generateMaleSizes() {
    var person = getPerson();
    var size;
    if (person.height >= 170 && person.weight > 70 && person.weight < 80) {
        size = sizes[2];
    }
    else if (person.height >= 180 && person.weight >= 80){
        size = sizes[3];
    }
    else{
        size = "Still working on other sizes."
    }
    //Add size possibilities here..

    return size;
}

//Generate sizes for f.
function generateFemaleSizes() {
    var person = getPerson();
    if (person.height >= 170 && person.weight >= 70) {
        return sizes[3];
    }
    else if (person.height >= 180 && person.weight >= 80){
        return sizes[4];
    }
    else{
        return "Still working on other sizes."
    }
}


var btnGenerate = document.getElementById('btn-generate');
//Clicking on generate button.
btnGenerate.onclick = function () {
    var pSize = document.getElementById('p-size');
    var person = getPerson();
    if (person.gender = "m") {
        pSize.textContent = generateMaleSizes();
    }
    else if (person.gender = "f") {
        pSize.textContent = generateFemaleSizes();
    }
    else{
        pSize.textContent = "Please enter all fields correctly.";
    }
}