let clothingButton = document.querySelector("#clth-button");
let clothingDiv = document.querySelector("#clothing-dropdown");
let sneakersButton = document.querySelector("#snkrs-button");
let sneakersDiv = document.querySelector("#sneakers-dropdown");
let zapnutoClth = false;
let zapnutoSnkrs = false;

clothingButton.addEventListener("click", function(){
    clothingDiv.classList.toggle("show-clothing");
    clothingDiv.classList.toggle("underline-clothing");
    if (!zapnutoClth) {
        document.documentElement.style.setProperty("--clth", "100%");
        zapnutoClth = true;
    } else{
        document.documentElement.style.setProperty("--clth", "0%");
        zapnutoClth = false;

    }
})
sneakersButton.addEventListener("click", function(){
    sneakersDiv.classList.toggle("show-sneakers");
    sneakersDiv.classList.toggle("underline-sneakers");
    if (!zapnutoSnkrs) {
        document.documentElement.style.setProperty("--snkrs", "100%");
        zapnutoSnkrs = true;
    } else{
        document.documentElement.style.setProperty("--snkrs", "0%");
        zapnutoSnkrs = false;
    }
})