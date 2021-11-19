const formOpener = document.getElementById("form__opener");
const form = document.getElementById("form");
const loader = document.getElementById("loader");
const submit = document.getElementById("submit__btn");
const email = document.getElementById("email");
const userName = document.getElementById("name");
const thankYou = document.getElementById("thank__you");

formOpener.addEventListener('click', (e) => {
    e.preventDefault();
    formOpener.classList.add("hide");
    form.classList.remove("hide");
});

form.addEventListener('input', () => {
    checkIfEmpty();
});

checkIfEmpty = () => {
    let emailValue = email.value.trim();
    let userNameValue = userName.value.trim();
    if(emailValue.length <= 1 || userNameValue.length <= 1){
       submit.disabled = true;
    }  else {
        submit.disabled = false;
    }
}

form.addEventListener("submit", (e) => {
    let emailValue = email.value.trim();
    e.preventDefault();
    if(checkMail(emailValue) !== true){
        email.value = "";
        email.classList.add('error');
        email.placeholder = "Invalid email";
    } else {
        form.classList.add("hide");
        loader.classList.remove('hide');
        setTimeout(loading = () =>{
            loader.classList.add('hide');
        },1500)
        thankYou.classList.remove("hide");
        setTimeout(addHide = () => {
        thankYou.classList.add("hide");
        formOpener.classList.remove("hide");
        }, 3000)
    } 
})

function checkMail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
}


/* ===== CAROUSEL =====*/
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel__photo");

/*=== FADE IN ===*/
let img = new Image();
img.src = "./css/img/_Kerry-Hayes_landing_images_1.jpg";
img.onload = function () {
    track.classList.add("fade-in");
}

setInterval(changeSlides = () => {
    let current = document.querySelector(".current");
  let next = current.nextElementSibling;

  if (slides[slides.length - 1].classList.contains("current")) {
    slides[0].classList.add("current");
    slides[slides.length - 1].classList.remove("current");
  } else {
    current.classList.remove("current");
    next.classList.add("current");
  }
}, 6000);

/* ==== GO TO THE BOTTOM BUTTON ====*/
let bottomBtn = document.querySelector(".to__bottom--btn");


function bottomBtnFade(ev){
    if(window.pageYOffset>50) {
        bottomBtn.classList.add("to__bottom--btn--fade");
    } else {
        bottomBtn.classList.remove("to__bottom--btn--fade");
    }
}
window.onscroll=bottomBtnFade

