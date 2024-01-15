
var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var pass_error = document.getElementById('pass_error');
var login_container = document.getElementById('login_container');
var login_find = document.getElementById('login_find');
var home = document.getElementById('home')

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', pass_Verify);

// Login page //
function validated() {
    if (username.value.length < 4) {
        username.style.border = "3px solid red";
        username_error.style.display = "block";
        alert('Please enter your username and password')
        username.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "3px solid red";
        pass_error.style.display = "block";
        alert('Please enter your password')
        password.focus();
        return false;
    }


}
function username_Verify() {
    if (username.value.length >= 4) {
        username.style.border = "3px solid green";
        username_error.style.display = "none";
    }
}
function pass_Verify() {
    if (password.value.length >= 5) {
        password.style.border = "3px solid green";
        pass_error.style.display = "none";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault(e)
    if (username.value.length >= 4) {
        if (password.value.length >= 6) {
            login_container.style.display = "none"
            login_find.style.display = "block"
            alert('Login success')
        }
    }
});
function Not() {
    alert("This train not available")
}

// Find my train
var from = document.getElementById('from')
var To = document.getElementById('To')
var Date = document.getElementById('Date')
var Allclass = document.getElementById('Allclass')
var search = document.getElementById('search');
var table = document.getElementById('table');
var login_find = document.getElementById('login_find')

from.addEventListener('textInput', from_Verify);
To.addEventListener('textInput', To_Verify);
Date.addEventListener('textInput', Date_Verify);
Allclass.addEventListener('textInput', Allclass_Verify);



function findtrain() {
    if (from.value.length < 5) {
        from.style.border = "3px solid red";
        from_error.style.display = "block";
        alert('Please provide From satiation')
        from.focus();
        return false;
    }
    if (To.value.length < 5) {
        To.style.border = "3px solid red";
        To_error.style.display = "block";
        alert('Please provide To satiation')
        To.focus();
        return false;
    }
    if (Date.value.length < 9) {
        Date.style.border = "3px solid red";
        Date_error.style.display = "block";
        alert('Please provide Date satiation')
        Date.focus();
        return false;
    }
    if (Allclass.value.length < 8) {
        Allclass.style.border = "3px solid red";
        Allclass_error.style.display = "block";
        alert('Please Selected your Class')
        Allclass.focus();
        return false;
    }
}
function from_Verify() {
    if (from.value.length >= 5) {
        from.style.border = "3px solid green";
        from_error.style.display = "none";
    }
}
function To_Verify() {
    if (To.value.length >= 5) {
        To.style.border = "3px solid green";
        To_error.style.display = "none";
    }
}
function Date_Verify() {
    if (Date.value.length >= 8) {
        Date.style.border = "3px solid green";
        Date_error.style.display = "none";
    }
}
function Allclass_Verify() {
    if (Allclass.value.length >= 8) {
        Allclass.style.border = "3px solid green";
        Allclass_error.style.display = "none";
    }
}
login_find.addEventListener("submit", (j) => {
    j.preventDefault(j)
    if (from.value.length >= 5) {
        if (To.value.length >= 5) {
            if (Date.value.length >= 8) {
                if (Allclass.value.length >= 8) {
                    search.style.display = "block"
                    table.style.display = 'table'
                    home.style.display = 'none'
                    login_find.style.display = "none"
                }

            }

        }
    }
});


// table//

var modifrom = document.getElementById('modifrom')
var modito = document.getElementById('modito')
var passanger = document.getElementById('passanger')
var passdetail = document.getElementById('passdetail')
var fa_person_walking_luggage = document.getElementById('fa_person_walking_luggage')
placef = "chennai"
placeto = "kerala"

function modi() {

    table.style.display = "none"
    passanger.style.display = "block"
    search.style.display = "none"
    passdetail.style.display = ''
    fa_person_walking_luggage.style = 'background-Color:LightSeaGreen;color:white';
}

// passanger details //

var names = document.getElementById('names')
var age = document.getElementById('age')
var gender = document.getElementById('gender')
var no = document.getElementById('no')
var email = document.getElementById('email')
var mobile = document.getElementById('mobile')
var passdetail = document.getElementById('passdetail')
var travel = document.getElementById('travel')
var file = document.getElementById('file')

names.addEventListener('textInput', names_Verify);
age.addEventListener('textInput', age_Verify);
Date.addEventListener('textInput', Date_Verify);
gender.addEventListener('textInput', gender_Verify);
no.addEventListener('textInput', no_Verify);
email.addEventListener('textInput', email_Verify);
mobile.addEventListener('textInput', mobile_Verify);



function panger() {
    if (names.value.length < 5) {
        names.style.border = "3px solid red";
        alert('Please enter your Name')
        names.focus();
        return false;
    }
    if (age.value.length < 2) {
        age.style.border = "3px solid red";
        alert('Please enter your valid Age')
        age.focus();
        return false;
    }
    if (gender.value.length < 1) {
        gender.style.border = "3px solid red";
        alert('Please enter your Gender')
        gender.focus();
        return false;
    }
    if (no.value.length < 5) {
        no.style.border = "3px solid red";
        alert('Please enter your Adhaar id')
        no.focus();
        return false;
    }
    if (email.value.length < 5) {
        email.style.border = "3px solid red";
        alert('Please enter your valid Email')
        email.focus();
        return false;
    }
    if (mobile.value.length < 10) {
        mobile.style.border = "3px solid red";
        alert('Please enter your valid Mobile no')
        mobile.focus();
        return false;
    }

}
function names_Verify() {
    if (names.value.length >= 5) {
        names.style.border = "3px solid green";
    }
}
function age_Verify() {
    if (age.value.length >= 2) {
        age.style.border = "3px solid green";
    }
}
function Date_Verify() {
    if (Date.value.length >= 4) {
        Date.style.border = "3px solid green";
    }
}
function gender_Verify() {
    if (gender.value.length >= 1) {
        gender.style.border = "3px solid green";
    }
}
function no_Verify() {
    if (no.value.length >= 5) {
        no.style.border = "3px solid green";
    }
}
function email_Verify() {
    if (email.value.length >= 5) {
        email.style.border = "3px solid green";
    }
}
function mobile_Verify() {
    if (mobile.value.length >= 9) {
        mobile.style.border = "3px solid green";
    }
}

passdetail.addEventListener("submit", (r) => {
    r.preventDefault(r)
    if (names.value.length >= 5) {
        if (age.value.length >= 2) {
            if (gender.value.length >= 1) {
                if (no.value.length >= 5) {
                    if (email.value.length >= 5) {
                        if (mobile.value.length >= 9) {
                            passdetail.style.display = "none"
                            travel.style.display = 'block'
                            file.style = 'background-Color:LightSeaGreen;color:white';
                            fa_person_walking_luggage.style = 'background-color:rgba(0,71,100,0.2)';

                        }
                    }
                }
            }
        }
    }
})


var payment = document.getElementById('payment')
var pay = document.getElementById('pay')

function ment() {
    travel.style.display = "none"
    payment.style.display = ''
    pay.style = 'background-Color:LightSeaGreen;color:white';
    file.style = 'background-color:rgba(0,71,100,0.2)';
}


// payment//

var card = document.getElementById('card')
var exdate = document.getElementById('exdate')
var cvv = document.getElementById('cvv')
var cname = document.getElementById('cname')

card.addEventListener('textInput', cardname_Verify);
exdate.addEventListener('textInput', Date_Verify);
cvv.addEventListener('textInput', cvv_Verify);
cname.addEventListener('textInput', cname_Verify);

function paycard() {
    if (card.value.length < 10) {
        card.style.border = "3px solid red"
        alert('Please enter your valid card No!')
        card.focus();
        return false;
    }
    if (exdate.value.length < 7) {
        exdate.style.border = "3px solid red"
        alert('Please enter your valid Date')
        exdate.focus();
        return false;
    }
    if (cvv.value.length < 3) {
        cvv.style.border = "3px solid red"
        alert('Please enter your valid CVV No')
        cvv.focus();
        return false;
    }
    if (cname.value.length < 10) {
        cname.style.border = "3px solid red"
        alert('Please enter your valid card Name!')
        cname.focus();
        return false;
    }
}
gender.addEventListener('textInput', gender_Verify);

function cardname_Verify() {
    if (card.value.length >= 9) {
        card.style.border = "3px solid green";
    }
}


function Date_Verify() {
    if (exdate.value.length >= 3) {
        exdate.style.border = "3px solid green";
    }
}

function cvv_Verify() {
    if (cvv.value.length >= 3) {
        cvv.style.border = "3px solid green";
    }
}

function cname_Verify() {
    if (cname.value.length >= 5) {
        cname.style.border = "3px solid green";
    }
}

payment.addEventListener("submit", (t) => {
    t.preventDefault(t)
    if (card.value.length >= 9) {
        if (exdate.value.length >= 3) {
            if (cvv.value.length >= 3) {
                if (cname.value.length >= 5) {
                    travel.style.display = 'none'
                    passdetail.style.display = "none"
                    payment.style.display = 'none'
                    passanger.style.display = "none"
                    table.style.display = 'none'
                    payment1.style.display = 'flex'
                }
            }
        }
    }
})


// file move

function walking() {
    travel.style.display = 'none'
    passdetail.style.display = "block"
    payment.style.display = 'none'
    fa_person_walking_luggage.style = 'background-Color:LightSeaGreen;color:white';
    pay.style = 'background-color:rgba(0,71,100,0.2)';
    file.style = 'background-color:rgba(0,71,100,0.2)';
}

function filee() {
    alert("After properly Fill in the  Personal Details kindly go to the next page")
    if (names.value.length >= 5) {
        if (age.value.length >= 2) {
            if (gender.value.length >= 1) {
                if (no.value.length >= 5) {
                    if (email.value.length >= 5) {
                        if (mobile.value.length >= 9) {
                            passdetail.style.display = "none"
                            payment.style.display = 'none'
                            travel.style.display = 'block'
                            fa_person_walking_luggage.style = 'background-color:rgba(0,71,100,0.2)';
                            pay.style = 'background-color:rgba(0,71,100,0.2)';
                            file.style = 'background-Color:LightSeaGreen;color:white';

                        }
                    }
                }
            }
        }
    }
}
function payy() {
    if (names.value.length >= 5) {
        if (age.value.length >= 2) {
            if (gender.value.length >= 1) {
                if (no.value.length >= 5) {
                    if (email.value.length >= 5) {
                        if (mobile.value.length >= 9) {
                            travel.style.display = 'none'
                            passdetail.style.display = "none"
                            payment.style.display = 'block'
                            fa_person_walking_luggage.style = 'background-color:rgba(0,71,100,0.2)';
                            pay.style = 'background-Color:LightSeaGreen;color:white';
                            file.style = 'background-color:rgba(0,71,100,0.2)';
                        }
                    }
                }
            }
        }
    }
}
var Add = document.getElementById("Add")
var addpass = document.getElementById('addpass')
var addpass2 = document.getElementById('addpass2')
function Addp() {
    Add.style.display = ''
    addpass.style.display = 'none'
    addpass2.style.display = ''
}
var Add = document.getElementById("Add")
function Adds1() {
    Add.style.display = 'none'
    addpass.style.display = ''
    addpass2.style.display = 'none'
}
var payment1 = document.getElementById('modelCon')

function success() {
    if (card.value.length >= 9) {
        if (exdate.value.length >= 3) {
            if (cvv.value.length >= 3) {
                if (cname.value.length >= 5) {
                    travel.style.display = 'none'
                    passdetail.style.display = "none"
                    payment.style.display = 'none'
                    passanger.style.display = "none"
                    table.style.display = 'none'
                    payment1.style.display = 'flex'
                    home.style.display = 'block'

                }
            }
        }
    }
}
let log = () => {
    payment1.style.display = "none"
    home.style.display = 'block'
    login_container.style.display = 'block'
    location.reload();
}

