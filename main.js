const monitor = document.querySelector(".monitor");
const display = document.querySelectorAll(".show-display");
display.forEach(item =>{
    item.addEventListener("click",showDisplay);
});
document.getElementById("equ").addEventListener("click",calculate);
document.getElementById("AC").addEventListener("click",allClear);
document.getElementById("C").addEventListener("click", clear);
function showDisplay(event){
    const x = event.target.innerText;
    if(monitor.innerText == 0){
        monitor.innerText = x;
    }else{ 
    monitor.innerText += event.target.innerText;
    };
};
function calculate(){
    let result = eval(monitor.innerText);
    monitor.innerText = result;
};
function allClear(){
    monitor.innerText = 0;
};
function clear(){
    let text = monitor.innerText;
    if(text.length === 1){
        monitor.innerText = 0;
    }else{
        monitor.innerText = text.substring(0, text.length - 1);
    };
};


