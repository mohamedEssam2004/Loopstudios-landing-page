let hamburger = document.getElementById("hamburger");
let close = document.getElementById("close");
let overlay = document.querySelector(".overlay");
let txtContent = document.querySelector("header h1");
let menu = document.getElementById("menu");

console.log(menu);

hamburger.addEventListener("click", () => {
    overlay.classList.add("active");
    hamburger.style.display = "none";
    close.style.display = "block";
    txtContent.style.display = "none";
    menu.style.display = "block";
    
})

close.addEventListener("click", () => {
    overlay.classList.remove("active");
    hamburger.style.display = "block";
    close.style.display = "none";
    txtContent.style.display = "block";
    menu.style.display = "none";
})