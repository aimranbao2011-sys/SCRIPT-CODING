
// Login page programme

// Use these lines to "grab" the elements

const userInput = document.getElementById("username");

const btn = document.getElementById("btn"); // Make sure your HTML has id="btn"

const warn = document.getElementById("warn"); // Make sure your HTML has id="warn"



// Check if they actually exist before doing anything


function warnWrong(text) {

    

    warn.textContent = text;

    setTimeout(() => {

        warn.textContent = "";

    }, 4000);

}

function signUp(username) {
    localStorage.setItem('username', username)
    window.location.href = "../Main/main.html"
   
}

btn.onclick = function() {

    const nameValue = userInput.value;

    if (nameValue.length > 20) {

        warnWrong('Too long! Keep it under 20 characters.');

    } else if (nameValue.length < 3) {

        warnWrong('Too short! Use at least 3 characters.');

    } else if (nameValue.includes(" ")) {
        warnWrong('No spaces allowed!')
    }
    else {

        warn.style.color = "green";

        warn.textContent = "Username looks good!";
        signUp(nameValue)

    }

};
