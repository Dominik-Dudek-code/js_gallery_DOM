"use strict";
const bigImage = document.getElementById("largeImg");
const list = document.querySelector(".gallery__list");
list.addEventListener("click", (item)=>{
    item.preventDefault();
    const link = item.target.closest(".list-item__link");
    bigImage.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
