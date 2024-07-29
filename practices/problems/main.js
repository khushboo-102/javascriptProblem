document.addEventListener("click",()=>{
    document.body.style.backgroundColor = randomColor();
})

function randomColor() {
    const color = ["Pink","Yellow", "Green"];
    return color [Math.floor(Math.random()*color.length)];
    
}
