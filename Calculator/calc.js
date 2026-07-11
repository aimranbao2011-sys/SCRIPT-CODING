// Calculator programm
const nums = document.querySelectorAll(".num");
const resultLabel = document.getElementById("resultLabel");

function appendToDisplay(value) {
    resultLabel.textContent = resultLabel.textContent + (value);
    console.log('Hello?')
    console.log(resultLabel.textContent)
}

nums.forEach(function(num) {
   if (
  num.textContent != 'C' && num.textContent != '='
) {
        num.addEventListener("click", function() {
            console.log('Yes it is!')
            appendToDisplay(num.textContent);
        });
    }
        
});

const equal = document.querySelector('.equal')
equal.addEventListener('click', function() {
    try {
        resultLabel.textContent = eval(resultLabel.textContent)
    } catch(error) {
        resultLabel.textContent = 'ERROR'
    }
})

const clear = document.querySelector('.clear')
clear.addEventListener('click', function() {
    resultLabel.textContent = ''
})