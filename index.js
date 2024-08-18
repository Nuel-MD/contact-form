const button = document.querySelector('button');
const General = document.getElementById('General');
const support = document.getElementById('support');
const ticked = document.getElementById('tick');
const popup = document.querySelector('.absolute');

button.addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (validateField(firstName, '#firstName', '.first .error') &&
        validateField(lastName, '#lastName', '.Last .error') &&
        validateEmail(email) &&
        validateRadio(General, support) &&
        validateField(message, 'textarea', '.Message .error') &&
        validateCheckbox(ticked, '.ticked .error')) {
            popup.style.display = 'block';
            document.querySelector('#tick').style.display = 'none';
            document.querySelector('.box svg').style.display = 'inline-block';
    }
}

function validateField(value, selector, errorSelector) {
    if (value.trim() === '') {
        document.querySelector(selector).style.border = '1px solid hsl(0, 66%, 54%)';
        document.querySelector(errorSelector).style.display = 'block';
        return false;
    }
    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.querySelector('#email').style.border = '1px solid hsl(0, 66%, 54%)';
        document.querySelector('.email label').style.display = 'block';
        return false;
    }
    return true;
}

function validateRadio(radio1, radio2) {
    if (!radio1.checked && !radio2.checked) {
        document.querySelector('.row label').style.display = 'block';
        return false;
    }
    return true;
}

function validateCheckbox(checkbox, errorSelector) {
    if (!checkbox.checked) {
        document.querySelector(errorSelector).style.display = 'block';
        return false;
    }
    return true;
}



