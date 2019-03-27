//menu code
let anchors = document.querySelectorAll('a[href*="#"]'),
    prevMenuActive = 0;

for(let i = 0; i < anchors.length; i++) {
        anchors[i].parentElement.addEventListener('click', function (e) {
            e.preventDefault();
            anchors[prevMenuActive].parentElement.classList.remove("active");
            this.classList.add("active");
            prevMenuActive = i;
            turnPages(i);
        });
}

let prevPage = 0;
function turnPages(nextPage) {
    if(prevPage === nextPage) return false;
    // console.log(prevPage + " -> " + nextPage);
    let pages = document.getElementsByTagName("section");
    if(nextPage === 2 || nextPage === 4) {
        document.getElementById("header").classList.add("black");
    }
    if(prevPage === 2 && nextPage !== 4) {
        document.getElementById("header").classList.remove("black");
    }
    if(nextPage === 4 && nextPage !== 2) {
        document.getElementById("header").classList.remove("black");

    }
    pages[prevPage].classList.add("prev__active");
    pages[prevPage].classList.remove("active");
    pages[nextPage].classList.add("active");
    let prevPage2 = prevPage;
    setTimeout(function() {
        pages[prevPage2].classList.remove("prev__active");

    }, 500);
    prevPage = nextPage;
}
// code price page
let services = document.getElementsByClassName("price__service");
for(let i = 0; i < services.length; i++) {
    services[i].addEventListener("click", function () {
        showService(i);
    });
}

document.getElementById("showServiceLeft").addEventListener("click", function() {
    // if(prevService > -1)
        showService(prevService - 1);
});
document.getElementById("showServiceRight").addEventListener("click", function() {
    // if(prevService < services.length - 1)
        showService(prevService + 1);
});

let prevService = 0;
function showService(nextService) {

    if (prevService === nextService) return true;

    let fullServices = document.getElementsByClassName("price__full__service");

    if(nextService > fullServices.length - 1) {
        nextService = 0;
    }
    if(nextService < 0) {
        nextService = fullServices.length - 1;
    }

    services[prevService].classList.remove("active");
    services[nextService].classList.add("active");

    fullServices[nextService].classList.add("bcg__active");
    fullServices[prevService].classList.remove("bcg__active");

    prevService = nextService;

    for(let i = 0; i < fullServices.length; i++) {
        if(i < prevService) {
            right(i);
        } else {
            left(i);
        }
    }
    if(nextService === 0) {

    }
    function left(i) {
        fullServices[i].classList.add("bcg__active__left");
        fullServices[i].classList.remove("bcg__active__right");
    }
    function right(i) {
        fullServices[i].classList.add("bcg__active__right");
        fullServices[i].classList.remove("bcg__active__left");
    }
}
// code manufacturer page
let makers = document.getElementsByClassName("manufacturer__car__item");

for(let j = 0; j < makers.length; j++) {
    // console.log(j);
    makers[j].addEventListener('click', function() {
        nextManufacturerCar(j);
    })
}

let prevCar = 0;

function nextManufacturerCar(nextCar) {
    if(prevCar === nextCar) return;

    //add active style menu bottom menu
    makers[prevCar].classList.remove("active");
    makers[nextCar].classList.add("active");

    let cars = document.getElementsByClassName("manufacture__full__car__img");

    cars[prevCar].classList.add("prev__active");
    cars[prevCar].classList.remove("active");
    cars[nextCar].classList.add("active");

    let prevCar2 = prevCar;
    prevCar = nextCar;

    setTimeout(function() {
        cars[prevCar2].classList.remove("prev__active");
    }, 500);
}
// script to work menu button
document.getElementById("menu__button").addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('menu__button__active');
    // document.querySelector("menu__items").classList.toggle("menu__active");
    document.getElementsByClassName("menu__items")[0].classList.toggle("menu__active");
});
