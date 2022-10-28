const dino=document.getElementById("dino");
const cactus=document.getElementById("cactus");
let count = 0;

function jump()
{
    if (dispatchEvent.classList != "jump")
    {
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300)
    }
}

function counter()
{
    count = count + 1;
    console.log(count);
}

document.addEventListener("keydown", function(event) 
{
    jump();
    counter();
})

let checkAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143)
    {
        dino.style.animationPlayState = 'paused';
        cactus.style.animationPlayState = 'paused';
        alert("Your score - " + count )
        window.location.reload();
    }
}, 10);


