const welcome = document.getElementById("welc")
welcome.textContent = `Welcome, ${localStorage.getItem('username')}!`

// random text coding:

const texts = [
  "A space where coding projects are built and showcased.",
  "Where ideas turn into code and projects come to life.",
  "A hub for creative coding projects and experiments.",
  "Building and showcasing modern coding projects.",
  "Where innovation meets code."
];
const desc = document.getElementById("desc")
let index = 0;

setInterval(() => {
    desc.style.opacity = 0;
    
    index = (index + 1) % texts.length
    setTimeout(() => {
        desc.textContent = texts[index];
        desc.style.opacity = 1;
        
    }, 500)
        
      
        
    
}, 5000)
