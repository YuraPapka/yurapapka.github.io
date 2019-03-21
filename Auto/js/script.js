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
    if(nextPage === 2) {
        document.getElementById("header").classList.add("black");
    }
    if(prevPage === 2) {
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

    // console.log(prevService + " -> " + nextService);

    services[prevService].classList.remove("active");
    services[nextService].classList.add("active");

    fullServices[nextService].classList.add("bcg__active");
    fullServices[prevService].classList.remove("bcg__active");

    prevService = nextService;

    for(let i = 0; i < fullServices.length; i++) {
        if(i < prevService) {
            fullServices[i].classList.add("bcg__active__right");
            fullServices[i].classList.remove("bcg__active__left");
        } else {
            fullServices[i].classList.add("bcg__active__left");
            fullServices[i].classList.remove("bcg__active__right");
        }
    }
    // if(prevService === fullServices.length - 1 && nextService === 0) {
    //     fullServices[0].classList.add("bcg__active__left");
    //     fullServices[fullServices.length - 1].classList.add("bcg__active__right");
    // }


    // let direction = "bcg__active__left";//,
    // direction2 = "bcg__active__right";
    //
    // if (prevService > nextService) {
    //     direction = "bcg__active__right";
    //     direction2 = "bcg__active__left";
    // }
    //
    // fullServices[prevService].classList.remove("bcg__active");
    // fullServices[prevService].classList.add(direction);
    // fullServices[nextService].classList.add(direction2);
    //
    // setTimeout(function() {
    //     fullServices[nextService].classList.add("bcg__active");
    // }, 50);
    // let prevService2 = prevService;
    // prevService = nextService;
    //
    // setTimeout(function() {
    //     fullServices[prevService2].classList.remove(direction);
    //     fullServices[nextService].classList.remove(direction2);
    // }, 1000);
}
// code manufacturer page

let makers = document.getElementsByClassName("manufacturer__car__item");
// let makers = document.querySelectorAll(".manufacturer__car__item");

for(let j = 0; j < makers.length; j++) {
    console.log(j);
    makers[j].addEventListener('click', function() {
        nextManufacturerCar(j);
    })
}

let prevCar = 0;

function nextManufacturerCar(nextCar) {
    if(prevCar === nextCar) return;

    console.log(prevCar + " -> " + nextCar);

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

    // pages[prevPage].classList.add("prev__active");
    // pages[prevPage].classList.remove("active");
    // pages[nextPage].classList.add("active");
    // let prevPage2 = prevPage;
    // setTimeout(function() {
    //     pages[prevPage2].classList.remove("prev__active");
    //
    // }, 500);
    // prevPage = nextPage;
}