//input events:
let box = document.querySelector("div");
let inputs= document.querySelector("input");

inputs.addEventListener("input",() => {
    box.style.background = inputs.value;
    box.style.borderRadius = inputs.value;
});

//Keyup and keydown Events:
document.addEventListener("keyup",(event) =>{
    console.log(event.key);
    
})