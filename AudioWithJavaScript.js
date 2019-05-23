const animals = document.querySelectorAll(".animal");
const myArray = ["lion", "cougar", "bark"];
document.addEventListener("DOMContentLoaded", init);

function init(){
    myArray.forEach(function(item){
        let div = document.createElement("div");
        div.setAttribute("class", "animal "+ item);
        div.innerText = item.toUpperCase();
        div.addEventListener("click", function (){
            playIt(item);
        })
        document.body.appendChild(div)
    })
};
function playIt(name){
    let activeEle = document.querySelector("." + name)
    let soundAnimal = new Audio("sound/"+name+".mp3");
    soundAnimal.play();
    activeEle.classList.add("active");
    setTimeout(function(){
        activeEle.classList.remove("active");
    },200)
};