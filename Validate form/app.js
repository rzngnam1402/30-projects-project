var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyInvalid(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptyError = true;
            showError(input, `... is required`)
        }
        else {
            showSuccess(input)
        }
    })
    return isEmptyError
}

function checkEmailError(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim();

    let isEmailError = !regexEmail.test(input.value);
    if (!isEmailError) {
        showSuccess(input);
    }
    else {
        showError(input, 'Email Invalid');
    }

    return isEmailError
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim()

    if (input.value.length < min) {
        showError(input, `Minimun length: ${min} characters`);
        return true
    }

    if (input.value.length > max) {
        showError(input, `Maximun length: ${max} characters`);
        return true
    }

    showSuccess(input);
    return false;

}

function checkMatchingPasswordError(passwordInput, cfpasswordInput) {
    if (passwordInput.value !== cfpasswordInput.value) {
        showError(cfpasswordInput, `Password does not match !`);
        return true;
    }
    return false;
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let isEmptyError = checkEmptyInvalid([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(username, 6, 30);
    let isPasswordLengthError = checkLengthError(password, 6, 30);
    let isMatchPasswordError = checkMatchingPasswordError(password, confirmPassword);
})