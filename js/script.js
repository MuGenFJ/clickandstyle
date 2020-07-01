const colors = ["#F7F7FF", "black", "#366176", "#272727", " #931E2E"];
const btn = document.getElementById("btn");
const bgLanding = document.querySelector(".landing-page");
const title = document.querySelector(".welcome-title")

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();

    bgLanding.style.backgroundColor = colors[randomNumber];

    title.classList.toggle("white");

    if(title.innerHTML === "Welcome to my landing page") {
        title.innerHTML = "Enjoy your visit !";
    } else {
        title.innerHTML = "Welcome to my landing page";
    }
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};