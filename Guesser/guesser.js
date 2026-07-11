// Step code
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const input = document.querySelector('#in')

add.addEventListener('click', function () {
    const value = parseInt(input.value);
   
    if (!isNaN(value)) {
        input.value = value + 1;
    } else if (!value) {
       input.value = 1
    } else {
        console.log('Invalid number');
    }
});


   


sub.addEventListener('click', function () {
    let value = parseInt(input.value);

    if (isNaN(value)) {
        value = 0;
    }

    value = value - 1;

    if (value < 0) {
        value = 0;
    }

    input.value = value;
});

// The main code
function cpuSend(response, number) {
    const div = document.createElement('div');
    const value = Number(response)
    console.log("We are here comuter");
    const valueNum = Number(response);

    if (isNaN(valueNum)) {
        div.textContent = "Invalid number!";
    } else if (valueNum > number) {
        div.textContent = "Too high!";
    } else if (valueNum < number) {
        div.textContent = "Too low!";
    } else {
        div.textContent = "Correct!!!";
    }
        
    
    div.classList.add('computer', 'label');

    const parent = document.querySelector('.container');
    parent.appendChild(div);
}

function Firstsend() {
    const div = document.createElement('div');

    console.log("We are here 2");

    div.textContent = "Hello, I’ve picked a secret number between 1 and 100—try to guess it!"; 

    div.classList.add('computer', 'label');

    const parent = document.querySelector('.container');
    parent.appendChild(div);
}

function send(message) {
    const div = document.createElement('div');

    console.log("We are here 2");

    div.textContent = message; 

    div.classList.add('user', 'label');

    const parent = document.querySelector('.container');
    parent.appendChild(div);
}
const btn = document.getElementById('sendbtn')
Firstsend()
btn.addEventListener('click', function() {
    send(input.value);
    cpuSend(input.value, 10)
    input.value = ""

})
let numberR = Math.floor(Math.random() * 100) + 1;
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        send(input.value);
        cpuSend(input.value, numberR);
        input.value = "";
    }
});
