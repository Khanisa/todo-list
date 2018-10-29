var emailField = document.querySelector(".email-field"), //selecting .email-field
    passwordField = document.querySelector(".password-field"),
    signInForm = document.querySelector(".signin-form"), 
    signInButton = document.querySelector(".signin-btn"),
    emailError = document.querySelector("#email-alert"),
    passwordError = document.querySelector("#password-alert");
    

function validateForm(e) {
    var emailValue = emailField.value,
        passwordValue =  passwordField.value;

    if (emailValue = "") {
        emailError.textContent = "Please enter your email address";
    }

    else if (emailValue.indexOf("@") < 1) {
        emailError.textContent = "The email address is not valid";
    }

    // else if(passwordValue === " ") {
    //     passwordError.textContent = "Please enter your password";
    //     signInForm.passwordField.focus;
    // }
    
    // else if (passwordValue.length < 6) {
    //     passwordError.textContent == "Must be greater than six character";
    //     signInForm.passwordField.focus;
    // }

    else {
        signInForm.submit();
    }
    
    e.preventDefault();
}

signInButton.addEventListener("click", validateForm);

//show sign up modal
var signUpButton = document.querySelector(".signup-btn"),
    signUpModal = document.querySelector(".signup-modal");

signUpButton.addEventListener("click", function(showSignUpForm){
    signUpModal.classList.add("active");
})

var closeIcon = document.querySelector(".icon-close");

closeIcon.addEventListener("click", function(hideSignUpForm){
    signUpModal.classList.remove("active");
})





