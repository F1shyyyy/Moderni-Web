let clothingButton = document.querySelector("#clth-button");
let clothingDiv = document.querySelector("#clothing-dropdown");
let sneakersButton = document.querySelector("#snkrs-button");
let sneakersDiv = document.querySelector("#sneakers-dropdown");
let jordanDivs = [document.querySelectorAll(".jordan-shoes")];

clothingButton.addEventListener("click", function(){
    clothingDiv.classList.toggle("show-clothing");
    clothingDiv.classList.toggle("underline-clothing");
})
sneakersButton.addEventListener("click", function(){
    sneakersDiv.classList.toggle("show-sneakers");
    sneakersDiv.classList.toggle("underline-sneakers");
})