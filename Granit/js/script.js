let navBar = $('.nav-bar'),
    menu = navBar.find('#menu'),
    navBarWidth = navBar.width(),
    menuItem = navBar.find('a[href*="#"]'),
    activeMenuItem = 0;

let menuShow = false;


menuItem.each(function (i) {
    $(this).on('click', function (e) {
        e.preventDefault();

        nextMenuItem(i);

        if (menuShow) menuToggle();

        let scrollToId = $(this).attr('href');

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollToId).offset().top - navBar.height()
        }, 500);
    });
});

function nextMenuItem(nextIndex) {
    if (activeMenuItem === nextIndex) {
        return;
    }

    $(menuItem[nextIndex]).addClass('active');

    if (activeMenuItem !== undefined)
        menuItem.eq(activeMenuItem).removeClass('active');

    activeMenuItem = nextIndex;
}

let navBarTop = navBar.offset().top;
let generalId = ["#slider", "#catalog", "#advantages", "#popular", "#services", "#contact"],
    generalPositionElement = generalId.map(function (id) {
        return $(id).offset().top;
    }),
    maxScroll = (document.documentElement.offsetHeight - document.documentElement.clientHeight - navBarTop),
    paddingForScroll = (document.documentElement.clientWidth - navBarWidth) / 2;

let scroll = () => {
    let scroll = window.pageYOffset;
    //activated nav-bar fixed mod
    if (navBarTop < scroll) {
        navBar.addClass('fixed');
        navBar.css({padding: '0 ' + paddingForScroll * (window.pageYOffset / maxScroll) + 'px'});
    } else {
        navBar.removeClass('fixed');
        navBar.css({padding: '0'});
    }
    for (let i = generalPositionElement.length - 1; i > -1; i--) {
        if ((scroll + document.documentElement.clientHeight / 2) > generalPositionElement[i]) {
            nextMenuItem(i, 'lol');
            return;
        }
    }
};
$(window).on('scroll', scroll);

function resizeAndInit() {
    navBarWidth = $('#header').width();
    menu.css({width: navBarWidth});
    navBar.css({width: navBarWidth});
    generalPositionElement = generalId.map(function (id) {
        return $(id).offset().top;
    });
    navBarTop = navBar.offset().top;
    maxScroll = document.documentElement.offsetHeight - document.documentElement.clientHeight - navBarTop;
    paddingForScroll = (document.documentElement.clientWidth - navBarWidth) / 2;

    //and also need to call the scroll function to redraw the windows
    scroll();
}

resizeAndInit();

$(window).resize(resizeAndInit);
let menuBtn = navBar.find('#mobButton');
menuBtn.on('click', menuToggle);

function menuToggle() {
    menuBtn.toggleClass('activeMenu');
    menu.toggleClass('activeMenu');
    menuShow = !menuShow;
}


$('#numberPhone').mask("(999) 999-9999", {
    placeholder: '(xxx) xxx-xxxx',
    autoclear: false
});
let form = document.forms.callback;
form.onsubmit = function (e) {
    e.preventDefault();
    let phoneInput = this.querySelector('#numberPhone');
    let commentInput = this.querySelector('#numberComment');
    let callback = {
        phone: phoneInput.value,
        comment: commentInput.value
    };
    if (isNaN(parseInt(callback.phone.charAt(callback.phone.length - 1)))) {
        $(phoneInput).addClass('invalid');
    } else {
        console.log(JSON.stringify(callback), 'JSON for the server, but so far only in the console');
        phoneInput.value = '';
        commentInput.value = '';
        alert('Sory( \nThis form does not work now!\nIt is only for development...');
    }
    return false;
};

form.oninput = function (e) {
    $(this).find('*').removeClass('invalid');
    $(this).off(e);
};
//modal window logic

let modal = $('#modal'),
    modalOpen = false;

$('#closeModal').on('click', function () {
    if (modalOpen) openModal();
});

function safeOpeningModal() {
    let text = $(this).find('.title').text().trim();
    if (!text) {
        text = 'Купить ' + $(this).closest('.card').find('.title').text().trim();
    }
    openModal(text);
}

function openModal(str) {
    if(typeof str !== "string") str = "";

    if (modalOpen) {
        modal.removeClass('active');
        modalOpen = false;
    } else {
        form.querySelector('#numberComment').value = str;
        modal.addClass('active');
        modalOpen = true;
    }
}

$('.openModal').on('click', openModal);

$('.item').find('button').on('click', safeOpeningModal);
$('.services').find('.item').on('click', safeOpeningModal);
