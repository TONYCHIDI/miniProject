//Object to store user details
let userDetailsDatabase = {};

//User Validation Function
function getUserDetails () {

    //User Name Validation
    let userName = prompt("Enter your username");

    if (userName == null) {
        return
    };

    function validateUserName(userName) {
        if (userName.length > 0 && userName.length <= 25) {
            return true
        } else {
            return false
        };
    };
    
    while (validateUserName(userName) == false) {
        userName = prompt("Your username must be greater than 0 but less than 10");
    };
    
    userDetailsDatabase.UserName = userName;
    

    //Email Address Validation
    let emailAddress = prompt("Enter your email address");

    if (emailAddress == null) {
        return
    };

    function validateEmail(emailAddress) {
        const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        emailCheckResult = emailCheck.test(emailAddress);
        if (emailCheckResult == true) {
            return true
        } else {
            return false
        };
    };
    
    while (validateEmail(emailAddress) == false) {
        emailAddress = prompt("Enter a valid email address");
    };
    
    userDetailsDatabase.EmailAddress = emailAddress;


    //Phone Number Validation
    let phoneNumber = prompt("Enter your phone number");

    if (phoneNumber == null) {
        return
    };

    function validatePhoneNumber(phoneNumber) {
        const phoneCheck = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        phoneCheckResult = phoneCheck.test(phoneNumber);
        if (phoneCheckResult == true) {
            return true
        } else {
            return false
        };
    };
    
    while (validatePhoneNumber(phoneNumber) == false) {
        phoneNumber = prompt("Enter a valid phone number");
    };
    
    userDetailsDatabase.PhoneNumber = phoneNumber;


    //Password Validation
    let password = prompt("Enter your password");

    if (password == null) {
        return
    };

    function validatePassword(password) {
        const pswdCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/
        pswdCheckResult = pswdCheck.test(password);
        if (pswdCheckResult == true) {
            return true
        } else {
            return false
        };
    };
    
    while (validatePassword(password) == false) {
        password = prompt("Password must be between 6 to 15 characters which contain at least one lowercase & one uppercase letter, one numeric digit, and one special character");
    };

    userDetailsDatabase.Password = password;

    
    //Confirm Password Validation
    let confirmPassword = prompt("Confirm your password");

    if (confirmPassword == null) {
        return
    };

    function validateConfirmPassword(confirmPassword) {
        if (confirmPassword == password) {
            return true
        } else {
            return false
        };
    };
    
    while (validateConfirmPassword(confirmPassword) == false) {
        confirmPassword = prompt("The password entered does not tally with the original password. Enter the right password");
    };

    userDetailsDatabase.ConfirmPassword = confirmPassword;
};


function displayUserDetails() {
    let Div = document.createElement("div");
    Div.id = "btn_2_div";
    document.getElementById("btn_2").innerHTML = null;
    document.getElementById("btn_2").style.height = "fit-content";
    document.getElementById("btn_2").appendChild(Div);

    let H2 = document.createElement("h2");
    H2.innerHTML = "Below are your details";
    document.getElementById("btn_2_div").appendChild(H2);

    let P1 = document.createElement("p");
    P1.innerHTML = `${userDetailsDatabase.UserName}`;
    document.getElementById("btn_2_div").appendChild(P1);

    let P2 = document.createElement("p");
    P2.innerHTML = `${userDetailsDatabase.EmailAddress}`;
    document.getElementById("btn_2_div").appendChild(P2);

    let P3 = document.createElement("p");
    P3.innerHTML = `${userDetailsDatabase.PhoneNumber}`;
    document.getElementById("btn_2_div").appendChild(P3);
};
