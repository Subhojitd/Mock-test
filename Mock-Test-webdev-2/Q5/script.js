const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const dob = document.getElementById('dob');
const color = document.getElementById('color');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    validateInputs();
})

const setError =(element,message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const ageValue = age.value.trim();
    const genderValue = gender.value.trim();
    const dobValue = dob.value.trim();
    const colorValue = color.value.trim();

    if (nameValue === ''){
        setError(name, 'Name is required');
    }else{
        setSuccess(name)
    }

    if (emailValue === ''){
        setError(email, 'Email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Email is invalid');
    }else{
        setSuccess(email)
    } 

    if (phoneValue === ''){
        setError(phone, 'Phone is required');
    }else if(!isValidPhone(phoneValue)){
        setError(phone, 'Phone is invalid');
    }else{
        setSuccess(phone)
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 characters');
    }else{
        setSuccess(password)
    }

    if(ageValue === ''){
        setError(age, 'Age is required');
    }else{
        setSuccess(age)
    }

    if(genderValue === ''){
        setError(gender, 'Gender is required');
    }else{
        setSuccess(gender)
    }
    
    if(dobValue === ''){
        setError(dob, 'Date of birth is required');
    }else{
        setSuccess(dob)
    }

    if(colorValue === ''){
        setError(color, 'Color is required');
    }else{
        setSuccess(color)
    }
}