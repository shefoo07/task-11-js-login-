var email = document.querySelector('#signinEmail')
var password = document.querySelector('#signinPassword')
var login = document.querySelector("button")
var warning = document.querySelector('#incorrect')

var signupName = document.querySelector('#signupName')
var signupEmail = document.querySelector('#signupEmail')
var signupPassword = document.querySelector('#signupPassword')
var signup = document.querySelector('#signupButton')


var success = document.querySelector('#success')
var not = document.querySelector('#not')
var exist = document.querySelector('#exist')

var currentUser = JSON.parse(localStorage.getItem('currentUser'));

var userData = JSON.parse(localStorage.getItem('userData')) || [];


var userHome = document.querySelector("#username")






function displayWelcome() {
    userHome.textContent = `welcome ${currentUser.name}`;
}


window.addEventListener('load', function() {
    displayWelcome();
});





login.addEventListener('click', function () {
    if (email.value == "" || password.value == "") {
        warning.classList.remove('d-none')

    } else {
        var userFound = false;

        for (var i = 0; i < userData.length; i++) {
            if (userData[i].email === email.value.trim().toLowerCase() && userData[i].password === password.value) {
                userFound = true;
                localStorage.setItem('currentUser', JSON.stringify(userData[i]));
                window.location.href = "index3.html";
                break;
            }
        }

        if (!userFound) {
            not.classList.remove('d-none');
            warning.classList.add('d-none');
        } else {
            warning.classList.add('d-none');
        }
    }
})


signup.addEventListener('click', function () {

    var existUser = false;

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        warning.classList.remove('d-none')
        success.classList.add('d-none')
        exist.classList.add('d-none')
    } else {

        for (var i = 0; i < userData.length; i++) {
            if (userData[i].email === signupEmail.value.trim().toLowerCase()) {
                exist.classList.remove('d-none')
                success.classList.add('d-none')
                warning.classList.add('d-none')
                existUser = true;
                break;
            }
        }
        if (!existUser) {
            var newUser = {
                name: signupName.value.trim(),
                email: signupEmail.value.trim().toLowerCase(),
                password: signupPassword.value
            };

            userData.push(newUser);
            localStorage.setItem('userData', JSON.stringify(userData));

            success.classList.remove('d-none')
            warning.classList.add('d-none')
            exist.classList.add('d-none')

        }

    }



    clearInputs()
})




function clearInputs() {
    signupName.value = "";
    signupEmail.value = "";
    signupPassword.value = "";
}





function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = "index.html";
}




