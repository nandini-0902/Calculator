function getGreetingMessage() {
    const now = new Date();
    const hour = now.getHours();

    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    return greeting;
}

const greetingMessage = getGreetingMessage();
alert(greetingMessage);
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function displays the values
function display(button) {
    document.getElementById("result").value += button.value;
}

// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}