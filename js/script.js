let clothingButton = document.querySelector("#clothing-button");
let clothingDiv = document.querySelector("#clothing-dropdown");
let sneakersButton = document.querySelector("#sneakers-button");
let sneakersDiv = document.querySelector("#sneakers-dropdown");
let clthON = false;
let snkrsON = false;

clothingButton.addEventListener("click", function(){
    if (!clthON) {
        clothingDiv.classList.add("show-clothing");
        clthON = true;
    } else{
        clothingDiv.removeAttribute("class");
        clthON = false;
    }
})
sneakersButton.addEventListener("click", function(){
    sneakersDiv.classList.toggle("show-sneakers");
})