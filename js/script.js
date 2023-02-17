console.log("cześć");
const przycisk = document.querySelector(".header__button");
const zdjecie = document.querySelector(".header__img");

przycisk.addEventListener("click", () => { zdjecie.remove(); });


const body = document.querySelector(".body")
const button = document.querySelector(".button__background")
const thenName = document.querySelector(".button__element")

button.addEventListener("click", () => {
    body.classList.toggle("boddy__dark");

    thenName.innerText = body.classList.contains("boddy__dark") ? "jasny" : "ciemny";
});
