// let generalId = ["home", "about", "service", "portfolio", "contact"];
let generalId = ["home", "about", "portfolio", "contact"];
window.onscroll = function () {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;

    navBarBcg(scroll);

    if(!document.querySelector("#menu:hover") && menuItemScrolling){
        for(let id of generalId) {
            if(document.getElementById(id).getBoundingClientRect().top >= - document.documentElement.clientHeight / 2) {
                let menuItem = document.querySelector(`a[href*=\"#${id}"]`).parentElement;
                if(menuItem === menuItemActive) break;
                menuRunner(menuItem);
                menuItemActive = menuItem;
                break;
            }
        }
    }
};
let menuItemScrolling = true;
let navBarBcg = (scroll) => {
    if(scroll > 0) {
        $("#navBar").classList.add("nav__bar__fixed");
    } else {
        $("#navBar").classList.remove("nav__bar__fixed");
    }
};

let menuItemActive = document.querySelector(".menu__item");

let menuRunner = (element) => {
    let pos = element.getBoundingClientRect().left - document.getElementById("menu").getBoundingClientRect().left,
        runner = document.getElementById("runner");

    runner.style.left = pos + "px";
};

let menuRunnerLeave = () => {
    if(menuItemScrolling) menuRunner(menuItemActive);
};

$('*a[href*="#"]').forEach((item) => {
    item.parentElement.addEventListener("click", (event) => {
        event.preventDefault();
        // if(document.querySelector("#menu:hover")) {
        menuItemActive = item.parentElement;
        menuItemScrolling = false;
            // menuItemActive = item.parentElement;
        setInterval(() => {menuItemScrolling = true}, 1000);
        // }
        $(item.getAttribute("href")).scrollIntoView({
            behavior: "smooth",//"auto" | "instant"
            block:    "start"
        });
    });
});

function $(str) {
    switch(str.charAt(0)) {
        case "#":
            return document.getElementById(str.slice(1));
        case ".":
            return document.getElementsByClassName(str.slice(1));
        case "*":
            return document.querySelectorAll(str.slice(1));
        default:
            return document.getElementsByTagName(str);
    }
}

window.onload = () => {
    navBarBcg(window.pageYOffset || document.documentElement.scrollTop);
    menuRunner(menuItemActive);
};


//aboutInfo
let activeElemAboutInfo;
function aboutInfo(elemId, context) {
    if(activeElemAboutInfo){
        activeElemAboutInfo.style.transform = "rotateY(-90deg)";
        activeElemAboutInfo.style.opacity = "0";
        let elem = activeElemAboutInfo;
        setTimeout(() => {
            elem.style.transform = "rotateY(90deg)";
            console.log(context);
        }, 200);
    }
    if(elemId){
        let nextElem = document.querySelector(elemId);
        nextElem.style.transform = "rotateY(0deg)";
        nextElem.style.opacity = "1";
        activeElemAboutInfo = nextElem
    } else {
        activeElemAboutInfo = undefined;
    }
}

//form
let form = document.forms.messageMe;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // this.elements.forEach = Array.prototype.forEach;
    console.log(this);
    let str = "";
    for(let i = 0; i < form.elements.length; i++) {
        console.log(form.elements[i].value);
        str += form.elements[i].value;
    }
    // this.elements.forEach((elem) => {
    //     return elem.value;
    // })
    console.log(str);
});