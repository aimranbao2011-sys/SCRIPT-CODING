// Dark mode switching 

const DarkSwitch = document.getElementById('dark');
let mode;
let store = localStorage.getItem("mode")
if (store == null) {
    mode = window.matchMedia("(prefers-color-scheme: dark)").matches 
  ? "dark" 
  : "light";
  console.log(`Mode is: ${mode} from not mode`)
} else {
    mode = store
    console.log(`Mode is: ${mode} from mode`)
}

if (mode == 'light') {
    DarkSwitch.classList.remove('fa-moon')
    DarkSwitch.classList.add('fa-sun');
    document.body.classList.remove('darkmode')
    mode = 'light'
    
} else if (mode =='dark') {
    DarkSwitch.classList.remove('fa-sun')
    DarkSwitch.classList.add('fa-moon')
    document.body.classList.add('darkmode')
    mode = 'dark'
}

function switchMode() {
    if (mode == 'light') {
        document.body.classList.add('darkmode')
        mode = 'dark'
        DarkSwitch.classList.remove('fa-sun')
        DarkSwitch.classList.add('fa-moon')
        localStorage.setItem("mode", mode)
        console.log(`the mode now is saved as: ${localStorage.getItem("mode")}`)
    } else if (mode == 'dark') {
        document.body.classList.remove('darkmode')
        mode = 'light'
        DarkSwitch.classList.remove('fa-moon')
        DarkSwitch.classList.add('fa-sun')
        localStorage.setItem("mode", mode)
         console.log(`the mode now is saved as: ${localStorage.getItem("mode")}`)
    }
}
DarkSwitch.addEventListener('click', switchMode)
