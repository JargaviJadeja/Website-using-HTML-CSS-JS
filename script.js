/*check out form validation*/

function checkoutform() {
    // Clear previous errors
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("address-error").innerHTML = "";
    document.getElementById("city-error").innerHTML = "";
    document.getElementById("pincode-error").innerHTML = "";

    var isValid = true;

    // Validate Full Name
    var name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("name-error").innerHTML = "Please enter your name.";
        isValid = false;
    }
    if (!isNaN(name)) {
        document.getElementById("name-error").innerHTML = "Name must be in characters, not a number.";
        isValid = false;
    }

    // Validate Address
    var address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("address-error").innerHTML = "Please enter your address.";
        isValid = false;
    }

    // Validate City
    var city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("city-error").innerHTML = "Please enter your city.";
        isValid = false;
    }
    if (!isNaN(city)) {
        document.getElementById("city-error").innerHTML = "City must be in characters, not a number.";
        isValid = false;
    }

    // Validate Pin Code
    var postalCode = document.getElementById("postal-code").value;
    if (postalCode === "") {
        document.getElementById("pincode-error").innerHTML = "Please enter your Pincode.";
        isValid = false;
    } else if (isNaN(postalCode)) {
        document.getElementById("pincode-error").innerHTML = "PINCODE must be a number.";
        isValid = false;
    } else if (postalCode.length != 6) {
        document.getElementById("pincode-error").innerHTML = "PINCODE must be 6 digits long.";
        isValid = false;
    }

    return isValid; // Return validation status
}




/*Login form validation*/
function loginvalidate() {
    // Clear previous error messages
    document.getElementById("emaillogin").innerHTML = "";
    document.getElementById("passwordlogin").innerHTML = "";

    var isValid = true;

    // Get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Email validation
    if (email === "") {
        document.getElementById("emaillogin").innerHTML = "Email is empty.";
        isValid = false;
    } else {
        var epat = /^[a-zA-Z0-9_\.\-]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
        if (!epat.test(email)) {
            document.getElementById("emaillogin").innerHTML = "Invalid email format.";
            isValid = false;
        }
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordlogin").innerHTML = "Password is empty.";
        isValid = false;
    } else if (password.length < 2 || password.length > 9) {
        document.getElementById("passwordlogin").innerHTML = "Password must be between 2 to 9 characters.";
        isValid = false;
    }

    

    // Prevent form submission if invalid
    return isValid;
}


/*sign in page validation*/
function signinvalid()
{
    // Clear previous error messages
    document.getElementById("emailsignin").innerHTML = "";
    document.getElementById("passwordsignin").innerHTML = "";

    var isValid = true;

    // Get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Email validation
    if (email === "") {
        document.getElementById("emailsignin").innerHTML = "Email is empty.";
        isValid = false;
    } else {
        var epat = /^[a-zA-Z0-9_\.\-]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
        if (!epat.test(email)) {
            document.getElementById("emailsignin").innerHTML = "Invalid email format.";
            isValid = false;
        }
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordsignin").innerHTML = "Password is empty.";
        isValid = false;
    } else if (password.length < 2 || password.length > 9) {
        document.getElementById("passwordsignin").innerHTML = "Password must be between 2 to 9 characters.";
        isValid = false;
    }

    

    // Prevent form submission if invalid
    return isValid;

}