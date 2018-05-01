/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validation() {
    return validateFname();
}

function validateFname() {
    var name = document.getElementById("fname").value;
    if (name.length != 0 && /[a-zA-Z]/.test(name)) {
        return validateLname();
    } else {
        prompt("Invalid First Name");
    }
}

function validateLname() {
    var name = document.getElementById("lname").value;
    if (name.length != 0 && /[a-zA-Z]/.test(name)) {
        return validateDOB()();
    } else {
        prompt("Invalid Last Name");
    }
}

function validateDOB() {
    var dob = document.getElementById("dob").value;
    if (dob.length != 0 && /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(dob)) {
        return validateEmail();
    } else {
        prompt("Invalid Date of Birth");
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    if (email.length != 0 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return validatePassword();
    } else {
        prompt("Invalid Email");
    }
}
function validatePassword() {
    var psw = document.getElementById("psw").value;
    if (psw.length >= 5) {
        return validatePasswordMatch(psw);
    } else {
        prompt("Invalid Password");
    }
}
function validatePasswordMatch(psw) {
    var pswr = document.getElementById("pswr").value;
    if (pswr==psw) {
    } else {
        prompt("Password Don't Match");
    }
}

window.onload = function () {
    showSlides(1);
};

var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

function getModal(){
    document.getElementById('regist').style.display = 'block';
}

function closeModal(){
    document.getElementById('regist').style.display = "none";
}


 