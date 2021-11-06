$(function () {
    // гамбургер меню
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let contacts = $('.contacts')

    if ($(window).width() < 993) {
        mobile = true;
        $('.menu').append(contacts);
    }

    $(window).on('resize', function () {
        if ($(window).width() < 993 && !mobile) {
            mobile = true;
            $('.menu').append(contacts);
        }

        if ($(window).width() >= 992 && mobile) {
            mobile = false;
        }
    });

});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.top_able').fadeIn();
    } else {
        $('.top_able').fadeOut();
    }
});

$('.top_able').on('click', function () {
    scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.querySelector('.sorting_price').addEventListener("click", () => {
    const elements = document.querySelectorAll('.item');
    const sorted = [...elements].sort((a, b) => {
        const priceElA = a.querySelector(".item_price");
        const priceElB = b.querySelector(".item_price");
        const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
        return getPrice(priceElA) - getPrice(priceElB);
    });
    const resultEl = document.querySelector(".cards .container");
    resultEl.innerHTML = null;
    sorted.forEach(el => resultEl.appendChild(el));
});

document.querySelector('.sorting_byage').addEventListener("click", () => {
    const elements = document.querySelectorAll('.item');
    const sorted = [...elements].sort((a, b) => {
        const priceElA = a.querySelector(".item_price");
        const priceElB = b.querySelector(".item_price");
        const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
        return getPrice(priceElA) - getPrice(priceElB);
    });
    const resultEl = document.querySelector(".cards .container");
    resultEl.innerHTML = null;
    sorted.forEach(el => resultEl.appendChild(el));
});
