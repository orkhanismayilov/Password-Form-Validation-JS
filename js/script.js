var submit = document.querySelector("#submit");
var reset = document.querySelector("#reset")
var span = document.createElement("SPAN");
var input = document.querySelector(".pass_form #password");
var input_re = document.querySelector(".pass_form #password_re");

input.addEventListener("blur", function () {
    if (input != null && input.value.length > 7) {
        input.parentNode.classList.add("valid");
        input.parentNode.classList.remove("has-error");
        if (input.parentNode.children[2] != null) {
            input.parentNode.removeChild(input.parentNode.children[2]);
        }
    } else if (input == null || input.value.length < 8) {
        input.parentNode.classList.remove("valid");
        span.innerText = input.getAttribute("msg");
        input.parentNode.classList.add("has-error");
        input.parentNode.appendChild(span);
        if (input.parentNode.children[3] != null) {
            input.parentNode.removeChild(input.parentNode.children[3]);
        }
    } else {
        input.parentNode.classList.remove("has-error");
        input.parentNode.classList.add("valid")
    }
});

input.addEventListener("keyup", function (event) {
    if (input != null && input.value.length > 7) {
        input.parentNode.classList.add("valid");
        input.parentNode.classList.remove("has-error");
        if (input.parentNode.children[2] != null) {
            input.parentNode.removeChild(input.parentNode.children[2]);
        }
    }

    if (input_re.value == "") {
        input_re.parentNode.classList.add("has-error");
        input_re.parentNode.classList.remove("valid");
        span.innerText = input_re.getAttribute("msg1");
        input_re.parentNode.appendChild(span);
        if (input_re.parentNode.children[3] != null) {
            input_re.parentNode.removeChild(input_re.parentNode.children[3]);
        }
    }
});

input_re.addEventListener("keyup", function () {
    if (input_re.value == null) {
        input_re.parentNode.classList.add("has-error");
        span.innerText = input_re.getAttribute("msg1");
        input_re.parentNode.appendChild(span);
        if (input_re.parentNode.children[3] != null) {
            input_re.parentNode.removeChild(input.parentNode.children[3]);
        }
    } else if (input_re.value != input.value) {
        input_re.parentNode.classList.add("has-error");
        input_re.parentNode.classList.remove("valid");
        span.innerText = input_re.getAttribute("msg");
        input_re.parentNode.appendChild(span);
        if (input_re.parentNode.children[3] != null) {
            input_re.parentNode.removeChild(input_re.parentNode.children[3]);
        }
    } else {
        input_re.parentNode.classList.remove("has-error");
        input_re.parentNode.classList.add("valid");
        if (input_re.parentNode.children[2] != null) {
            input_re.parentNode.removeChild(input_re.parentNode.children[2]);
        }
    }
});

input_re.addEventListener("focus", function () {
    if (input_re.value != input.value) {
        input_re.parentNode.classList.add("has-error");
        span.innerText = input_re.getAttribute("msg1");
        input_re.parentNode.appendChild(span);
        if (input_re.parentNode.children[3] != null) {
            input_re.parentNode.removeChild(input_re.parentNode.children[3]);
        }
    } else {
        input_re.parentNode.classList.remove("has-error");
        input_re.parentNode.classList.add("valid");
        if (input_re.parentNode.children[2] != null) {
            input_re.parentNode.removeChild(input_re.parentNode.children[2]);
        }
    }
});

document.querySelector(".pass_form").addEventListener("submit", function (event) {
    var errors = document.querySelectorAll(".pass_form .has-error");
    if (errors.length == 0 && input.value != "" && input_re.value != "") {
        return true;
    } else {
        event.preventDefault();
    }
});

document.querySelector(".pass_form").addEventListener("reset", function(){
    input.parentNode.className = "input";
    if (input.parentNode.children[2] != null) {
        input.parentNode.removeChild(input.parentNode.children[2]);
    }

    input_re.parentNode.className = "input";
    if (input_re.parentNode.children[2] != null) {
        input_re.parentNode.removeChild(input_re.parentNode.children[2]);
    }
});