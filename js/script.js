{
    console.log("cześć");

    const photoRemove = () => { photo.remove(); }

    const buttonRemove = document.querySelector(".header__button");
    const photo = document.querySelector(".header__img");

    buttonRemove.addEventListener("click", photoRemove);

    const onClickChangeBackground = () => {
        body.classList.toggle("boddy__dark");
        thenName.innerText = body.classList.contains("boddy__dark") ? "jasny" : "ciemny";
    }

    const body = document.querySelector(".body")
    const button = document.querySelector(".button__background")
    const thenName = document.querySelector(".button__element")

    button.addEventListener("click", onClickChangeBackground);
}