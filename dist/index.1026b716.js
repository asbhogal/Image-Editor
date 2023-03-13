const fileInput=document.querySelector(".file-input"),filterOptions=document.querySelectorAll(".filter button"),filterName=document.querySelector(".filter-info .name"),filterValue=document.querySelector(".filter-info .value"),filterSlider=document.querySelector(".slider input"),rotateOptions=document.querySelectorAll(".rotate button"),previewImg=document.querySelector(".preview-img img"),chooseImgBtn=document.querySelector(".choose-img"),resetFilterBtn=document.querySelector(".reset-filter"),saveImgBtn=document.querySelector(".save-img");let brightness=100,saturation=100,inversion=0,grayscale=0,rotate=0,flipHorizontal=1,flipVertical=1;const applyFilters=()=>{previewImg.style.filter=`brightness(${brightness}%) \n                                    saturate(${saturation}%) \n                                    invert(${inversion}%) \n                                    grayscale(${grayscale}%)`,previewImg.style.transform=`rotate(${rotate}deg)\n                                    scale(${flipHorizontal},\n                                    ${flipVertical})`},loadImage=()=>{let e=fileInput.files[0];e&&(previewImg.src=URL.createObjectURL(e),previewImg.addEventListener("load",(()=>{resetFilterBtn.click(),document.querySelector(".container").classList.remove("disable")})))};filterOptions.forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".filter .active").classList.remove("active"),e.classList.add("active"),filterName.innerText=e.innerText,"brightness"===e.id?(filterSlider.max="200",filterSlider.value=brightness,filterValue.innerText=`${brightness}%`):"saturation"===e.id?(filterSlider.max="200",filterSlider.value=saturation,filterValue.innerText=`${saturation}%`):"inversion"===e.id?(filterSlider.max="100",filterSlider.value=inversion,filterValue.innerText=`${inversion}%`):(filterSlider.max="100",filterSlider.value=grayscale,filterValue.innerText=`${grayscale}%`)}))}));const updateFilter=()=>{filterValue.innerText=`${filterSlider.value}%`;const e=document.querySelector(".filter .active");"brightness"===e.id?brightness=filterSlider.value:"saturation"===e.id?saturation=filterSlider.value:"inversion"===e.id?inversion=filterSlider.value:grayscale=filterSlider.value,applyFilters()};rotateOptions.forEach((e=>{e.addEventListener("click",(()=>{"flip-left"===e.id?rotate-=90:"flip-right"===e.id?rotate+=90:"flip-horizontal"===e.id?flipHorizontal=1===flipHorizontal?-1:1:flipVertical=1===flipVertical?-1:1,applyFilters()}))}));const resetFilter=()=>{brightness=100,saturation=100,inversion=0,grayscale=0,rotate=0,flipHorizontal=1,flipVertical=1,filterOptions[0].click(),applyFilters()},saveImage=()=>{const e=document.createElement("canvas"),t=e.getContext("2d");e.width=previewImg.naturalWidth,e.height=previewImg.naturalHeight,t.filter=`brightness(${brightness}%)\n                        saturate(${saturation}%)\n                        invert(${inversion}%)\n                        grayscale(${grayscale}%)`,t.translate(e.width/2,e.height/2),0!==rotate&&t.rotate(rotate*Math.PI/180),t.scale(flipHorizontal,flipVertical),t.drawImage(previewImg,-e.width/2,-e.height/2,e.width,e.height);const i=document.createElement("a");i.download="image.jpg",i.href=e.toDataURL(),i.click()};fileInput.addEventListener("change",loadImage),filterSlider.addEventListener("input",updateFilter),resetFilterBtn.addEventListener("click",resetFilter),saveImgBtn.addEventListener("click",saveImage),chooseImgBtn.addEventListener("click",(()=>fileInput.click()));
//# sourceMappingURL=index.1026b716.js.map