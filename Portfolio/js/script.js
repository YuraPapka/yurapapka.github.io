window.onload = () => {
    navBarBcg(window.pageYOffset || document.documentElement.scrollTop);
    menuRunner(menuItemActive);
};
window.onresize = () => {
    menuRunner(menuItemActive);
};

let generalId = document.getElementsByTagName("section");
generalId.map = Array.prototype.map;
generalId = generalId.map(function(section) {
    return section.getAttribute("id");
});
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
document.querySelectorAll('#menu a[href*="#"]').forEach((item) => {
    item.parentElement.addEventListener("click", (e) => {
        e.preventDefault();
        menuItemActive = item.parentElement;
        menuItemScrolling = false;
        setInterval(() => {menuItemScrolling = true}, 1000);
        document.querySelector(item.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block:    "start"
        });
    });
});
document.getElementById("scrollToAbout").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block:    "start"
    });
});
document.getElementById("scrollToHome").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block:    "start"
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

//aboutInfo
let activeElemAboutInfo;
function aboutInfo(elemId) {
    if(activeElemAboutInfo){
        activeElemAboutInfo.style.transform = "rotateY(-90deg)";
        activeElemAboutInfo.style.opacity = "0";
        let elem = activeElemAboutInfo;
        setTimeout(() => {
            if(document.querySelector(".about__skill:hover") === elem)
                elem.style.transform = "rotateY(0deg)";
            else
                elem.style.transform = "rotateY(90deg)";
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
document.messageMe.addEventListener("submit", function(e) {
    e.preventDefault();
    let obj = {};
    for(let i = 0; i < this.elements.length; i++) {
        let el = this.elements[i];
        if(el.type === "submit") continue;
        obj[el.name] = el.value;
    }

    let str = JSON.stringify(obj);

    let src = "https://api.telegram.org/bot886699692:AAHRMpHYUNoCmDTfLQsWXJZJXSJUa2igHtY/sendMessage?chat_id=357488514&text=" + str;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.onerror = function() {
        alert('Извините, возникли неполадки на сервере!\n Напишите мне на почту или любую соцсеть');
    };
    xhr.send();
    for(let i = 0; i < this.elements.length; i++) {
        let el = this.elements[i];
        if(el.type === "submit") continue;
        el.value = "";
    }
});

document.getElementById("portfolioLoadMore").addEventListener("click", function (e){
    e.preventDefault();
    this.previousElementSibling.style.display = "block";
    this.style.display = "none";
});