const fileInput = document.querySelector(".file-input"),
chooseImgBtn = document.querySelector(".choose-img");

const loadImage = () => {
    let file = fileInput.files[0];
    console.log(file);
}

fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());