const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const conformpassword = document.getElementById("Cpassword");
const email = document.getElementById("email");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateinputs();


})
function validateinputs() {
    const usernamevalidate = username.value.trim()
    const emailvalidate = email.value.trim()
    const passvalidate = password.value.trim()
    const cpassvalidate = conformpassword.value.trim()


    if (usernamevalidate == '') {
        setError(username, "username is required");
    }
    else {
        setSuccess(username)
    }
    if (emailvalidate == '') {
        setError(email, "email is required");
    }
    else if (!validateEmail(emailvalidate)) {
        setError(email, "please enter a valid email");
    }
    else {
        setSuccess(email);
    }
    if (passvalidate == '') {
        setError(password, "password is required");
    }
    else if (passvalidate.length < 8) {
        setError(password, "password must be 8 charecters");
    }
    else {
        setSuccess(password);
    }

    if (cpassvalidate == '') {
        setError(conformpassword, "confirmpassword is required");
    }
    else if (cpassvalidate !== passvalidate) {
        setError(conformpassword, "password doesnot match");
    }
    else {
        setSuccess(conformpassword);
    }

}

function setError(element, message) {
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error');

    errorelement.innerText = message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}

function setSuccess(element) {
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error');
    errorelement.innerText = '';
    inputgroup.classList.remove('success');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};