const timer = document.getElementById("Time")

const add = document.getElementById("add")

const reset = document.getElementById("reset")

const sub = document.getElementById("subs")

add.onclick = function() {
    
    timer.textContent = parseInt(timer.textContent) + 1
    
    console.log(`Current count: ${timer.textContent}`)
    timer.style.transform = "scale(1.5)" 
    
    setTimeout(() => {
        
        timer.style.transform = "scale(1)"
    }, 200) 
}

reset.onclick = function() {
    
    
    timer.textContent = 0
    timer.style.transform = "scale(1.5)" 
    
    setTimeout(() => {
       
        timer.style.transform = "scale(1)"
    }, 200) 
}

sub.onclick = function() {
    
    
    timer.textContent = parseInt(timer.textContent) - 1
    console.log(`Current count: ${timer.textContent}`)
    timer.style.transform = "scale(1.5)" 
    
    setTimeout(() => {
        
        timer.style.transform = "scale(1)"
    }, 100) 
    
}


// "window.location.href='page2.html'"


