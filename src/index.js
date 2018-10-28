// const body = document.querySelector("body"),
//     tab = document.querySelectorAll(".info-header-tab");
// info = document.querySelector(".info"),
//     tabContent = document.querySelectorAll(".info-tabcontent");

// function hideTabContent(a) {
//     for (let i = a; i < tabContent.length; i++) {
//         tabContent[i].classList.remove("show");
//         tabContent[i].classList.add("hide");
//     }
// }
// hideTabContent(1);

// function showTabContent(b) {
//     if (tabContent[b].classList.contains("hide")) {
//         tabContent[b].classList.remove("hide");
//         tabContent[b].classList.add("show");
//     }
// }

//   Modal
// const overlay = document.querySelector(".overlay");

// function showModal(modBtn) {
//     overlay.style.display = "block";
//     info.classList.add("more-splash");
//     document.body.style.overflow = "hidden";
// }

// function hideModal(modCloseBtn) {
//     overlay.style.display = "none";
//     info.classList.remove("more-splash");
//     document.body.style.overflow = "";
// }

//  Timer
// let deadLine = "2018-12-22";

// function getTimeRemaninig(endtime) {
//     let t = Date.parse(endtime) - Date.parse(new Date()),
//         seconds = Math.floor((t / 1000) % 60),
//         minutes = Math.floor((t / 1000 / 60) % 60),
//         hours = Math.floor(t / (1000 * 60 * 60));
//     // hours = Math.floor((t / 1000 / 60 / 60) % 24),
//     // days = Math.floor((t / (1000 * 60 * 60 * 24)));

//     return {
//         total: t,
//         hours: hours,
//         minutes: minutes,
//         seconds: seconds
//     };
// }

// function setCloack(id, endtime) {
//     let timer = document.getElementById(id),
//         hours = timer.querySelector(".hours"),
//         minutes = timer.querySelector(".minutes"),
//         seconds = timer.querySelector(".seconds"),
//         timeInterval = setInterval(updateClock, 1000);

//     function updateClock() {
//         let t = getTimeRemaninig(endtime),
//             h = t.hours.toString(),
//             m = t.minutes.toString(),
//             s = t.seconds.toString();

//         if (
//             t.total <= 0 &&
//             t.hours <= 0 &&
//             t.minutes <= 0 &&
//             t.seconds <= 0
//         ) {
//             hours.textContent = "00";
//             minutes.textContent = "00";
//             seconds.textContent = "00";
//             clearInterval(timeInterval);
//         } else {
//             hours.textContent = h.length < 2 ? `0${h}` : h;
//             minutes.textContent = m.length < 2 ? `0${m}` : m;
//             seconds.textContent = s.length < 2 ? `0${s}` : s;
//         }
//     }
// }
// setCloack("timer", deadLine);

// body.addEventListener("click", e => {
//     let target = e.target;

//     if (target && target.classList.contains("info-header-tab")) {
//         tab.forEach(function (e, i) {
//             if (target == e) {
//                 hideTabContent(0);
//                 showTabContent(i);
//             }
//         });
//     }

//     // Modal

//     if (target && target.classList.contains("more")) {
//         showModal(target);
//     }
//     if (target && target.classList.contains("popup-close")) {
//         hideModal(target);
//     }
//     if (target && target.classList.contains("description-btn")) {
//         showModal(target);
//     }

//     // Smooth scroll
//     if (target && target.matches('a[href*="#"]')) {
//         e.preventDefault();

//         const blockID = target.getAttribute("href");

//         document.querySelector("" + blockID).scrollIntoView({
//             block: "start",
//             behavior: "smooth"
//         });
//     }

//     // Slider
//     if (target && target.classList.contains('prev')) {
//         pluseSlides(-1);
//     }
//     if (target && target.classList.contains('next')) {
//         pluseSlides(1);
//     }
//     for (let i = 0; i < dots.length + 1; i++) {
//         if (target.classList.contains('dot') && target == dots[i - 1]) {
//             currentSlide(i);
//         }
//     }

// });

//  Form

// let message = {
//     loading: `<img src='https://img-fotki.yandex.ru/get/4914/54833049.21/0_803b8_ba6370a6_XS.jpg'>`,
//     success: `<img src='https://img-fotki.yandex.ru/get/5113/54833049.22/0_803bd_d6d87b9f_XS.jpg'>`,
//     failure: `<img src='https://img-fotki.yandex.ru/get/5810/54833049.22/0_803b9_56e09f93_XS.jpg'>`
// };

// let form = document.querySelector(".main-form"),
//     contactForm = document.querySelector("#form"),
//     input = document.getElementsByTagName("input"),
//     statusMessage = document.createElement("div");

// statusMessage.classList.add("status");

// function sendForm(elem) {
//     elem.addEventListener("submit", function (e) {
//         e.preventDefault();
//         elem.appendChild(statusMessage);

//         let formData = new FormData(elem);

//         function postData(data) {
//             return new Promise(function (resolve, reject) {
//                 let request = new XMLHttpRequest();

//                 request.open("POST", "server.php");

//                 request.setRequestHeader(
//                     "Content-Type",
//                     "application/json; charset=utf-8"
//                 );

//                 request.onreadystatechange = function () {
//                     if (request.readyState < 4) {
//                         resolve();
//                     } else if (request.readyState === 4) {
//                         if (request.status == 200 && request.status < 3) {
//                             resolve();
//                             // statusMessage.textContent = message.success;
//                         } else {
//                             reject();
//                         }
//                     }
//                 };
//                 request.send(data);
//             });
//         } // End postData

//         function clearInputs() {
//             [...input].forEach(elem => (elem.value = ""));
//         }
//         postData(formData)
//             .then(() => (statusMessage.innerHTML = message.loading))
//             .then(() => (statusMessage.innerHTML = message.success))
//             .catch(() => (statusMessage.innerHTML = message.failure))
//             .then(clearInputs);
//     });
// }

// sendForm(form);
// sendForm(contactForm);

// Validation number phone

// const inputsPhone = document.querySelectorAll('input[name="phone"]'),
//     inputsCounter = document.querySelectorAll('.counter-block-input');

// // function onlyNumber(input) {
// //     input.onkeydown = function () {
// //         return (this.value = this.value.replace(/[^0-9]/g, ""));
// //     };
// // }
// function onlyNumber(input) {
//     input.onkeydown = function () {
//         return (this.value = this.value.replace(/[^0-9]/g, ""));
//     };
// }
// [...inputsPhone].forEach(elem => onlyNumber(elem));
// [...inputsCounter].forEach(elem => onlyNumber(elem));

// Slider

// let slideIndex = 1,
//     slides = document.querySelectorAll('.slider-item'),
//     prev = document.querySelector('.prev'),
//     next = document.querySelector('.next'),
//     dotsWrap = document.querySelector('.slider-dots'),
//     dots = document.querySelectorAll('.dot');

// showSlides(slideIndex);

// function showSlides(n) {

//     // slideIndex = n > slides.length ? 1 : n;
//     // slideIndex = n < 1 ? slides.length : n;

//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }


//     slides.forEach((item) => item.style.display = 'none');
//     dots.forEach((item) => item.classList.remove('dot-active'));

//     slides[slideIndex - 1].style.display = 'block';
//     dots[slideIndex - 1].classList.add('dot-active');
// }

// function pluseSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// Calc 

// let persons = document.querySelectorAll('.counter-block-input')[0],
//     restDays = document.querySelectorAll('.counter-block-input')[1],
//     place = document.getElementById('select'),
//     totalValue = document.getElementById('total'),
//     counter = document.querySelector('.counter'),
//     personsSum = 0,
//     daysSum = 0,
//     total = 0;

// totalValue.textContent = 10;

// function calcTotal() {
//     let person = +persons.value,
//         days = +restDays.value,
//         sity = +place.value;
//     if ((person == '' || days == '') || (person == 0 || days == 0)) {
//         totalValue.textContent = 0;
//     } else {
//         totalValue.textContent = (days + person) * 4000 * sity;
//     }
// }

// counter.addEventListener('input', function (event) {
//     let target = event.target;

//     if (target && target.classList.contains('counter-block-input')) {
//         calcTotal();
//     }
//     if (target && target.options) {
//         calcTotal();
//     }
// });

import tabs from './parts/tabs';
import modal from './parts/modal';
import timer from './parts/timer';
import forms from './parts/forms';
import slider from './parts/slider';
import calc from './parts/calc';
import events from './parts/events';
import validNum from './parts/validNum';

window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    tabs();
    modal();
    timer();
    forms();
    slider();
    calc();
    events();
    validNum();
});