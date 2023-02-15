console.log("cześć");
let przycisk = document.querySelector(".header__button");
let zdjecie = document.querySelector(".header__img");

przycisk.addEventListener("click", () => { zdjecie.remove(); });


let body = document.querySelector(".body")
let button = document.querySelector(".button__background")
let thenName = document.querySelector(".button__element")

button.addEventListener("click", () => {
    body.classList.toggle("boddy__dark");

    thenName.innerText = body.classList.contains("boddy__dark") ? "jasny" : "ciemny";
});
