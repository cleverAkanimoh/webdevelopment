let button = document.querySelector(".ibibio");
button.addEventListener("click", ()=>{
    document.querySelector('.topMenu-click').style.display='block';
})

let button2 = document.querySelector(".click-x");
button2.addEventListener("click", () => {
    document.querySelector('.topMenu-click').style.display = 'none';
})