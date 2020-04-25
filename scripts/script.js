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

//Weight categories.
var weightCategories = [0, 1, 2, 3, 4, 5, 6];

function generateMaleWeightCategories() {
    var person = getPerson();
    var weight = person.weight;
    var weigthCategory;
    if (weight < 50) {
        weigthCategory = weightCategories[0];
    }
    else if (weight > 50 && weight < 60) {
        weigthCategory = weightCategories[1];
    }
    else if (weight > 60 && weight < 70) {
        weigthCategory = weightCategories[2];
    }
    else if (weight > 70 && weight < 80) {
        weigthCategory = weightCategories[3];
    }
    else if (weight > 80 && weight < 90) {
        weigthCategory = weightCategories[4];
    }
    else if (weight > 90 && weight < 100) {
        weigthCategory = weightCategories[5];
    }
    else if (weight > 100) {
        weigthCategory = weightCategories[6];
    }
    return weigthCategory;
}

function generateFemaleWeightCategories() {
    //Comming soon.
}

var heightCategories = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateMaleHeightCategories() {
    var person = getPerson();
    var height = person.height;
    var heigthCategory;
    if (height < 100) {
        heigthCategory = heightCategories[0];
    }
    else if (height > 100 && height < 110) {
        heigthCategory = heightCategories[1];
    }
    else if (height > 110 && height < 120) {
        heigthCategory = heightCategories[2];
    }
    else if (height > 120 && height < 130) {
        heigthCategory = heightCategories[3];
    }
    else if (height > 130 && height < 140) {
        heigthCategory = heightCategories[4];
    }
    else if (height > 140 && height < 150) {
        heigthCategory = heightCategories[5];
    }
    else if (height > 150 && height < 160) {
        heigthCategory = heightCategories[6];
    } 
    else if (height > 160 && height < 170) {
        heigthCategory = heightCategories[7];
    } 
    else if (height > 170 && height < 180) {
        heigthCategory = heightCategories[8];
    } 
    else if (height > 180 && height < 190) {
        heigthCategory = heightCategories[9];
    }
    else if (height > 190 && height < 200) {
        heigthCategory = heightCategories[10];
    }
    else if (height > 200 && height < 210) {
        heigthCategory = heightCategories[11];
    }
    else if (height > 210) {
        heigthCategory = heightCategories[12];
    }
    return heigthCategory;
}

var sizes = ["xs", "s", "m", "l", "xl"];

//Generate sizes for m.
function generateMaleSizes() {
    var person = getPerson();
    var weightCategory = generateMaleWeightCategories();
    var heightCategory = generateMaleHeightCategories();
    var size;
    if (weightCategory == 1 && heightCategory == 1) {
        size = sizes[0];
    }
    else if (weightCategory == 1 && heightCategory == 2) {
        size = sizes[1];
    }
    else {
        size = "Still working on other sizes."
    }
    //Add size possibilities here..

    return size;
}

//Generate sizes for f.
function generateFemaleSizes() {
    //Comming soon.
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
    else {
        pSize.textContent = "Please enter all fields correctly.";
    }
}