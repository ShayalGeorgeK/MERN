function validateForm(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    //clear old error
    error.textContent="";

    //username validation
    if (username === "") {
        error.textContent="Username is required";
        return false;
    }
    if(username.length < 4){
        error.textContent="Username must be at least 4 Characters";
        return false;
    }

    //password validation
    if (password === "") {
        error.textContent="Password is required";
        return false;
    }
    if (password.length < 6) {
        error.textContent="Password must be at least 6 Characters";
        return false;
    }

    alert("Form submitted successfully");
    return true;
    
}