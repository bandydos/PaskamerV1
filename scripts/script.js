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

//Getting body type.
function getBodyType() {
    var selectedBodyType = document.getElementById('select-body-type').value;
    //Check if body type is selected.
    if (selectedBodyType == "g" || selectedBodyType == "n" || selectedBodyType == "p") {
        return selectedBodyType;
    }
    else {
        return false;
    }
}

//Getting gender.
function getStyle() {
    var selectedStyle = document.getElementById('select-style').value;
    //Check if gender is selected.
    if (selectedStyle == "l" || selectedStyle == "n" || selectedStyle == "s") {
        return selectedStyle;
    }
    else {
        return false;
    }
}

//Getting male person.
function getMale() {
    var gender = getGender();
    var age = getAge();
    var weight = getWeight();
    var height = getHeight();
    var bodyType = getBodyType();
    var style = getStyle();
    //Create person object.
    var person = {
        gender,
        age,
        weight,
        height,
        bodyType,
        style
    };
    //Check if data is correctly passed.
    if (gender != false && age != false &&
        weight != false && height != false &&
        bodyType != false && style != false) {
        return person; //Return person object.
    }
    else {
        return false;
    }
}

//Weight categories.
var weightCategories = [0, 1, 2, 3, 4, 5, 6];

function generateMaleWeightCategories() {
    var person = getMale();
    var weight = person.weight;
    var weigthCategory;
    if (person != false) {
        if (weight < 50) {
            weigthCategory = weightCategories[0];
        }
        else if (weight >= 50 && weight < 60) {
            weigthCategory = weightCategories[1];
        }
        else if (weight >= 60 && weight < 70) {
            weigthCategory = weightCategories[2];
        }
        else if (weight >= 70 && weight < 80) {
            weigthCategory = weightCategories[3];
        }
        else if (weight >= 80 && weight < 90) {
            weigthCategory = weightCategories[4];
        }
        else if (weight >= 90 && weight < 100) {
            weigthCategory = weightCategories[5];
        }
        else if (weight >= 100) {
            weigthCategory = weightCategories[6];
        }
    }
    else {
        weigthCategory = false;
    }

    return weigthCategory;
}

function generateFemaleWeightCategories() {
    //Comming soon.
}

var heightCategories = [0, 1, 2, 3, 4, 5, 6];

function generateMaleHeightCategories() {
    var person = getMale();
    var height = person.height;
    var heigthCategory;
    if (person != false) {
        if (height < 142) {
            heigthCategory = heightCategories[0];
        }
        else if (height >= 142 && height < 154) {
            heigthCategory = heightCategories[1];
        }
        else if (height >= 154 && height < 166) {
            heigthCategory = heightCategories[2];
        }
        else if (height >= 166 && height < 178) {
            heigthCategory = heightCategories[3];
        }
        else if (height >= 178 && height < 190) {
            heigthCategory = heightCategories[4];
        }
        else if (height >= 190 && height < 202) {
            heigthCategory = heightCategories[5];
        }
        else if (height >= 202) {
            heigthCategory = heightCategories[6];
        }
    }
    else {
        heigthCategory = false;
    }

    return heigthCategory;
}

//XXS/XXS-XS/XS/XS-S/S/S-M/M/M-L/L/L-XL/XL/XL-XXL/XXL//Error
var sizeCategories = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


//Generate sizes for m.
function generateMaleSizes() {
    var weightCategory = generateMaleWeightCategories();
    var heightCategory = generateMaleHeightCategories();
    var sizeCategory;
    var person = getMale();
    var bodyType = person.bodyType;
    var style = person.style;

    //XXS
    if (weightCategory == 0 && heightCategory == 0) {
        sizeCategory = sizeCategories[0];
    }
    //XXS-XS
    else if (weightCategory == 0 && heightCategory == 1) {
        sizeCategory = sizeCategories[1];
    }
    else if (weightCategory == 1 && heightCategory == 0) {
        sizeCategory = sizeCategories[1];
    }
    //XS
    else if (weightCategory == 1 && heightCategory == 1) {
        sizeCategory = sizeCategories[2];
    }
    //XS-S
    else if (weightCategory == 1 && heightCategory == 2) {
        sizeCategory = sizeCategories[3];
    }
    else if (weightCategory == 2 && heightCategory == 1) {
        sizeCategory = sizeCategories[3];
    }
    //S
    else if (weightCategory == 2 && heightCategory == 2) {
        sizeCategory = sizeCategories[4];
    }
    //S-M
    else if (weightCategory == 2 && heightCategory == 3) {
        sizeCategory = sizeCategories[5];
    }
    else if (weightCategory == 3 && heightCategory == 2) {
        sizeCategory = sizeCategories[5];
    }
    //M
    else if (weightCategory == 3 && heightCategory == 3) {
        sizeCategory = sizeCategories[6];
    }
    //M-L
    else if (weightCategory == 3 && heightCategory == 4) {
        sizeCategory = sizeCategories[7];
    }
    else if (weightCategory == 4 && heightCategory == 3) {
        sizeCategory = sizeCategories[7];
    }
    //L
    else if (weightCategory == 4 && heightCategory == 4) {
        sizeCategory = sizeCategories[8];
    }
    //L-XL
    else if (weightCategory == 4 && heightCategory == 5) {
        sizeCategory = sizeCategories[9];
    }
    else if (weightCategory == 5 && heightCategory == 4) {
        sizeCategory = sizeCategories[9];
    }
    //XL
    else if (weightCategory == 5 && heightCategory == 5) {
        sizeCategory = sizeCategories[10];
    }
    //XL-XXL
    else if (weightCategory == 5 && heightCategory == 6) {
        sizeCategory = sizeCategories[11];
    }
    else if (weightCategory == 6 && heightCategory == 5) {
        sizeCategory = sizeCategories[11];
    }
    //XXL
    else if (heightCategory == 6 || weightCategory == 6) {
        sizeCategory = sizeCategories[12];
    }

    //Unlogical combo.
    // else {
    //     sizeCategory = "Something went wrong, are you sure this is right?";
    // }

    //Bodytype influence.
    if (bodyType == "g") {
        sizeCategory = sizeCategory - 1;
    }
    else if (bodyType = "n") {
        sizeCategory = sizeCategory;
    }
    else if (bodyType = "p") {
        sizeCategory = sizeCategory + 1;
    }

    //Style influence.
    if (style == "l") {
        sizeCategory = sizeCategory + 1;
    }
    else if (style == "n") {
        sizeCategory = sizeCategory;
    }
    else if (style == "s") {
        sizeCategory = sizeCategory - 1;
    }
    return sizeCategory;
}

//Generate sizes for f.
function generateFemaleSizes() {
    //Comming soon.
}


var btnGenerate = document.getElementById('btn-generate');
//Clicking on generate button.
btnGenerate.onclick = function () {
    var pSize = document.getElementById('p-size');
    var person = getMale();
    var size;
    var maleSize = generateMaleSizes();
    if (person != false) {
        if (person.gender = "m") {
            switch (maleSize) {
                case 0:
                    size = "XXS"
                    break;
                case 1:
                    size = "XXS-XS"
                    break;
                case 2:
                    size = "XS"
                    break;
                case 3:
                    size = "XS-S"
                    break;
                case 4:
                    size = "S"
                    break;
                case 5:
                    size = "S-M"
                    break;
                case 6:
                    size = "M"
                    break;
                case 7:
                    size = "M-L"
                    break;
                case 8:
                    size = "L"
                    break;
                case 9:
                    size = "L-XL"
                    break;
                case 10:
                    size = "XL"
                    break;
                case 11:
                    size = "XL-XXL"
                    break;
                case 12:
                    size = "XXL"
                    break;
                case 13:
                    size = "TANK"
                    break;
                default:
                    size = "Something went wrong, are you sure this is right?";

            }
        }
        else if (person.gender = "f") {
            size = generateFemaleSizes();
        }
    }
    else {
        size = "Please fill in all fields correctly.";
    }
    pSize.textContent = size;
}