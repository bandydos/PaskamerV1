//Getting gender.
function getGender(){
    var selectedGender = document.getElementById('select-gender').value;
    //Check if gender is selected.
    if(selectedGender == "m" || selectedGender == "f"){
        return selectedGender;
    }
    else{
        return false;
    }
}

//Getting age.
function getAge(){
    var age = document.getElementById('enter-age').value;
    //Check if age is a number.
    if (/\d/.test(age)){
        return age;
    }
    else{
        return false;
    }
}

//Getting weight.
function getWeight(){
    var weight = document.getElementById('enter-weight').value;
    //Check if weight is a number.
    if (/\d/.test(weight)){
        return weight;
    }
    else{
        return false;
    }
}

//Getting height.
function getHeight(){
    var height = document.getElementById('enter-height').value;
    //Check if height is a number.
    if (/\d/.test(height)){
        return height;
    }
    else{
        return false;
    }
}

//Getting person.
function getPerson(){
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
    if(gender != false && age != false && 
        weight != false && height != false){
        return person; //Return person object.
    }
    else{
        return false;
    }
}


var btnGenerate = document.getElementById('btn-generate');
//Clicking on generate button.
btnGenerate.onclick = function(){
    console.log(getPerson());
}