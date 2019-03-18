//add bcg nav bar when scrolling
window.addEventListener('scroll', function (){
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let navBar = $('#nav__bar');
    if(scrolled > 10) {
        navBar.classList.add('add__bcg');
    } else {
        navBar.classList.remove('add__bcg');
    }
});
//add left menu by pressing the menu button, monitors max-width: 960px
document.querySelector(".menu__btn__bcg").addEventListener('click', function(e) {
    e.preventDefault();
    activeLeftMenu(activeMenu);
});
let activeMenu = false;
function activeLeftMenu(active) {
    if(active) {
        document.querySelector(".menu__btn").classList.remove("menu__btn__active");
        document.querySelector(".menu__items").classList.remove("menu__items__active");
        activeMenu = false;

    } else {
        document.querySelector(".menu__btn").classList.add("menu__btn__active");
        document.querySelector(".menu__items").classList.add("menu__items__active");
        activeMenu = true;
    }

}
//add menu item class active
let prevMenuItem;
function activeMenuItem(menuItem) {
    let menuItems = $(".menu__item");
    if(prevMenuItem >= 0)
        menuItems[prevMenuItem].classList.remove("active");
    prevMenuItem = menuItem;
    if(menuItem >= 0)
        menuItems[menuItem].classList.add("active");
}
let anchors = document.querySelectorAll('a[href*="#"]');
for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        let id = anchor.getAttribute("href");
        $(id).scrollIntoView({
            behavior: "smooth",
            block:    "start"
        });
        if(~this.parentElement.getAttribute('class').indexOf('menu__item')) {
            let menuItems = $(".menu__item"),
                i = 0;
            for(let menuItem of menuItems) {
                if(menuItem === this.parentElement){
                    break;
                }
                i++;
            }
            activeMenuItem(i);
        }
        if(activeMenu) {
            activeLeftMenu(activeMenu);
        }
    });
}
//feature block 1 tabs
let tabIndex = 0,
    tabs = $('.tab');
for(let tab of tabs) {
    tab.addEventListener("click", feature);
}

function feature() {
    let num = this.value;
    if(num == tabIndex) return;
    let img = $(".feature1__image"),
        content = $(".feature1__content"),
        tab =  $(".tab");
    //remove class active
    img[tabIndex].classList.remove("active");
    content[tabIndex].classList.remove("active");
   tab[tabIndex].classList.remove("tab__active");
    //add class active
    this.classList.add("tab__active");
    img[num].classList.add("active");
    content[num].classList.add("active");
    tabIndex = num;
}

function $(str) {
        switch (str.charAt(0)) {
            case ".":
                return document.getElementsByClassName(str.slice(1));
            case "#":
                return document.getElementById(str.slice(1));
            default:
                return document.getElementsByTagName(str);
        }
}
$('#form__contact').addEventListener('submit', function(e) {
    e.preventDefault();
    let str = '',
        obj = {},
        name = $('#form__name'),
        email = $('#form__email'),
        text = $('#form__textarea');
    if(validateEmail(email.value)) {
        if(name.value === '') {
            alert('Введите имя!');
            return false;
        }
        obj["name"] = name.value;
        obj["email"] = email.value;
        obj["text"] = text.value;
        str = JSON.stringify(obj);
        console.log(str);
        name.value = '';
        email.value = '';
        text.value = '';
    } else alert('Ваш e-mail не коректен!');
    function validateEmail(mail) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(mail).toLowerCase());

    }
});
// function validateEmail(Email) {
//     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(Email).toLowerCase());
// }
