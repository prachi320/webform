// const form1 = document.getElementById("form1");

// console.log(form1);

// form1.addEventListener('onSubmit', function (e) {
//     console.log('ij');
//     e.preventDefault();
//     formValidation();
// })


function formValidation() {
    console.log('k');
    var uname = document.getElementById('name');
    var uemail = document.getElementById('email');
    var uadd = document.getElementById('address');
    var umno = document.getElementById('number');
    var udate = document.getElementById('date');

    console.log(uname.value);
    if (allLetter(uname)) {
        if (alphanumeric(uadd)) {
            if (allnumeric(umno)) {
                if (ValidateEmail(uemail)) {
                }
            }
        }
    }

    return false;
}


function allLetter(uname) {
    var letters = /^[a-z0-9]+$/i;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}


function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}


function allnumeric(umno) {
    var numbers = /^[0-9]+$/;
    if (umno.value.match(numbers)) {
        return true;
    }
    else {
        alert('Mobile Number must have numeric only');
        umno.focus();
        return false;
    }
}


function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

var countryLists = new Array(4) 
countryLists["empty"] = ["Select a Country"]; 
countryLists["North America"] = ["Canada", "United States", "Mexico"]; 
countryLists["South America"] = ["Brazil", "Argentina", "Chile", "Ecuador"]; 
countryLists["Asia"] = ["Russia", "China", "Japan","oindia"]; 
countryLists["Europe"]= ["Britain", "France", "Spain", "Germany"]; 

function countryChange(selectObj){
    var idx = selectObj.selectedIndex; 
    // get the value of the selected option 
    var which = selectObj.options[idx].value; 
    console.log(which);
}






