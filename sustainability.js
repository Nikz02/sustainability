$('.swiper-wrapper').css('display', 'block');

var Webflow = Webflow || [];
Webflow.push(function() {
if(!Webflow.env('editor')) {
$('.swiper-wrapper').css('display', 'flex');

let typeSplit = new SplitType("[text-split]", {
types: "lines, words, chars",
tagName: "span"
});

function tocAnim() {
let tl = gsap.timeline({});
tl.from($('[lines-up-h]').find(".line"), {y: "100%", duration: 1, ease: "expo.out", stagger: { amount: 0.3 } });
tl.from($('[lines-up]').find(".line"), {y: "100%", duration: 1, ease: "expo.out", delay: .3, stagger: { amount: 0.55 } }, 0);
tl.from($('[lines-up2]').find(".line"), {y: "100%", duration: 1, ease: "expo.out", delay: .3, stagger: { amount: 0.55 } }, 0);
tl.from($('[lines-up3]').find(".line"), {y: "100%", duration: 1, ease: "expo.out", delay: .6, stagger: { amount: 0.55 } }, 0);
tl.from($('[lines-up4]').find(".line"), {y: "100%", duration: 1, ease: "expo.out", delay: .6, stagger: { amount: 0.55 } }, 0);
tl.from($('.toc-img'), { y: "100%", duration: .75, ease: "expo.out", delay: .3 }, 0);
tl.from($('.educ'), {y: "10%", x: "30%", duration: .8, ease: "expo.out", delay: .8 }, 0);
tl.from($('.lowering'), {y: "10%", x: "-30%", duration: .8, ease: "expo.out", delay: .8 }, 0);
tl.from($('.b2b'), {y: "300%", opacity: 0, duration: .8, ease: "expo.out", delay: 1.1}, 0);
}

function susAnim() {
let tl = gsap.timeline({});
tl.fromTo($('.sustain-slide .clip-heading'), {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: .8, ease: 'power1.out'});
tl.from($('.sustain-slide .fadeup'), { y: '70%', opacity: 0, duration: .8, ease: 'power1.out', stagger: { amount: 0.8 }}, 0);
tl.from($('.sus-video-wrap'), { x: '50%', opacity: 0, duration: .6, ease: 'power1.out', delay: .5}, 0);
}

$(".overview-slide .line").wrap('<div class="line-wrapper">');
function ovAnim() {
let tl = gsap.timeline({});
tl.from($('[ov-up-h]').find(".line"), {y: "100%", duration: 1, ease: "expo.out"});
tl.from($('[ov-lines]').find(".line"), {y: "100%", duration: 1, ease: "expo.out", stagger: { amount: 0.6 } }, 0);
tl.from($('[ov-lines1]').find(".line"), {y: "100%", duration: 1, ease: "expo.out", delay: .2, stagger: { amount: 0.6 } }, 0);
tl.from($('.steve-img'), {opacity: 0, duration: .4, ease: "power1.out", delay: .5}, 0);
tl.from($('.overview-graphic'), {y: "100%", opacity: 0, duration: .5, ease: "power1.out", delay: .5}, 0);
tl.from($('.vert-text-wrap'), {x: "50%", opacity: 0, duration: .5, ease: "power1.out", delay: 1}, 0);
}

$(".prop-title .line").wrap('<div class="line-wrapper">');
function propAnim() {
let tl = gsap.timeline({});
tl.fromTo($('.prop-slide .clip-heading'), {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: .8, ease: 'power1.out'});
tl.from($('.prop-slide .heading-line'), {opacity: 0, duration: .5, ease: "power1.out"}, 0);
tl.from($('.prop-circ'), {y: "30%", opacity: 0, duration: .7, ease: "power1.out", stagger: { amount: 0.45 }}, 0);
tl.from($('.prop-line'), {y: "100%", opacity: 0, duration: .7, delay: .4, ease: "power1.out", stagger: { amount: 0.45 }}, 0);
tl.from($('.prop-num .heading-41'), {y: "100%", duration: .7, delay: .4, ease: "power1.out", stagger: { amount: 0.45 }}, 0);
tl.from($('.prop-title').find(".line"), {y: "100%", duration: .7, delay: .6, ease: "power1.out", stagger: { amount: 0.45 }}, 0);
}

$(".em-slide .line").wrap('<div class="line-wrapper">');
function emAnim() {
let tl = gsap.timeline({});
tl.from($('.em-h2 h2'), {y: "100%", duration: .4, ease: "power1.out"}, 0);
tl.from($('[em-lines]').find(".line"), {y: "100%", duration: .5, ease: "power1.out", stagger: { amount: 0.4 }}, 0);
tl.from($('[em-lines1]').find(".line"), {y: "100%", duration: .5, ease: "power1.out", stagger: { amount: 0.4 }}, 0);
tl.from($('[em-lines2]').find(".line"), {y: "100%", duration: .3, ease: "power1.out", stagger: { amount: 0.3 }}, 0);
tl.from($('[em-lines3]').find(".line"), {y: "100%", duration: .3, ease: "power1.out", stagger: { amount: 0.3 }}, 0);
tl.from($('[em-lines4]').find(".line"), {y: "100%", duration: .8, delay: .5, ease: "power1.out", stagger: { amount: 0.75 }}, 0);
tl.from($('[em-lines5]').find(".line"), {y: "100%", duration: .6, delay: .8, ease: "power1.out", stagger: { amount: 0.45 }}, 0);
tl.fromTo($('.em-slide .clip-graph, .em-data-pie'), {clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: .8, delay: .3, ease: 'expo.out'}, 0);
tl.from($('[em-num]').find(".line"), {y: "100%", duration: .5, delay: .7, ease: "power1.out", stagger: { amount: 0.4 }}, 0);
tl.from($('.pie-num'), {y: "20%", opacity: 0, duration: .7, delay: .7, ease: "power1.out", stagger: { amount: 0.4 }}, 0);
}

function pathAnim() {
let tl = gsap.timeline({});
tl.from($('.path-slide .faderight'), { x: '-20%', opacity: 0, duration: 1, ease: 'power1.out', stagger: { amount: 0.55 }}, 0);
}

function edAnim() {
let tl = gsap.timeline({});
tl.from($('.edmove1'), { x: '-100%', duration: .4, ease: 'power1.out'}, 0);
tl.from($('.edmove2'), { x: '-130%', duration: .6, delay: .3, ease: 'power1.out', stagger: { amount: 0.32 }}, 0);
tl.from($('.edmove3'), { x: '-10%', opacity: 0, duration: .4, delay: .9, ease: 'power1.out'}, 0);
}

function npAnim() {
let tl = gsap.timeline({});
tl.from($('.np-slide .fadein'), { opacity: 0, delay: .1, duration: .5, ease: 'power1.out', stagger: { amount: 0.7 }});
tl.from($('.np-slide .fadein2'), { opacity: 0, delay: .2, duration: .5, ease: 'power1.out', stagger: { amount: 0.7 }}, 0);
}

function tvAnim() {
let tl = gsap.timeline({});
tl.from($('.tv-slide .fadein'), { opacity: 0, delay: .1, duration: .5, ease: 'power1.out', stagger: { amount: 0.5 }});
tl.from($('.tv-slide .fadein2'), { opacity: 0, delay: .1, duration: .5, ease: 'power1.out', stagger: { amount: 0.5 }}, 0);
}

function magAnim() {
let tl = gsap.timeline({});
tl.from($('.mag-slide .riseanim'), { y: '30%', opacity: 0, duration: .7, delay: .1, ease: 'power1.out', stagger: { amount: 0.4 }});
tl.from($('.mag-slide .riseanim2'), { y: '50%', opacity: 0, delay: .3, duration: .7, ease: 'power1.out', stagger: { amount: 0.4 }}, 0);
tl.from($('.mag-slide .riseanim3'), { y: '50%', opacity: 0, delay: .3, duration: .7, ease: 'power1.out', stagger: { amount: 0.4 }}, 0);
}

function intlAnim() {
let tl = gsap.timeline({});
tl.from($('.intl-slide .riseanim'), { y: '30%', opacity: 0, duration: .7, ease: 'power1.out', stagger: { amount: 0.45 }});
tl.from($('.intl-slide .riseanim2'), { y: '50%', opacity: 0, duration: .7, ease: 'power1.out', stagger: { amount: 0.45 }}, 0);
tl.from($('.intl-slide .riseanim3'), { y: '50%', opacity: 0, delay: .6, duration: .7, ease: 'power1.out', stagger: { amount: 0.45 }}, 0);
}

function hfAnim() {
let tl = gsap.timeline({});
tl.from($('.hf-slide .riseanim'), { y: '30%', opacity: 0, duration: .7, ease: 'power1.out', stagger: { amount: 0.45 }});
tl.from($('.hf-slide .riseanim2'), { y: '50%', opacity: 0, duration: .7, delay: .3, ease: 'power1.out', stagger: { amount: 0.45 }}, 0);
tl.from($('.hf-slide .riseanim3'), { y: '50%', opacity: 0, delay: .6, duration: .7, ease: 'power1.out', stagger: { amount: 0.45 }}, 0);
}

function collAnim() {
let tl = gsap.timeline({});
tl.from($('.coll-slide .riseanim'), { y: '30%', opacity: 0, duration: .7, ease: 'power1.out', stagger: { amount: 0.45 }});
tl.from($('.coll-slide .riseanim2'), { y: '50%', opacity: 0, duration: .7, delay: .5, ease: 'power1.out', stagger: { amount: 0.45 }}, 0);
}

gsap.set("[text-split]", { opacity: 1 });

$(".slider-parent").each(function (index) {
const swiper = new Swiper('.swiper', {
speed: 600,
autoHeight: true,
effect: 'fade',
fadeEffect: {
crossFade: true,
},
simulateTouch: false,
hashNavigation: {
replaceState: true,
},
on: {
init: function () {
if (this.activeIndex !== 0) {
$('.navbar').show();
}
},
slideNextTransitionStart: function () {
updateNavbarActiveState();
var targetSlide = this.slides[this.realIndex];
var toc = targetSlide.querySelectorAll('.toc-slide');
var sus = targetSlide.querySelectorAll('.sustain-slide');
var ov = targetSlide.querySelectorAll('.overview-slide');
var prop = targetSlide.querySelectorAll('.prop-slide');
var em = targetSlide.querySelectorAll('.em-slide');
var path = targetSlide.querySelectorAll('.path-slide');
var ed = targetSlide.querySelectorAll('.educ-slide');
var np = targetSlide.querySelectorAll('.np-slide');
var tv = targetSlide.querySelectorAll('.tv-slide');
var mag = targetSlide.querySelectorAll('.mag-slide');
var intl = targetSlide.querySelectorAll('.intl-slide');
var hf = targetSlide.querySelectorAll('.hf-slide');
var col = targetSlide.querySelectorAll('.coll-slide');
if (toc.length > 0) {
tocAnim();
}
if (sus.length > 0) {
susAnim();
}
if (ov.length > 0) {
ovAnim();
}
if (prop.length > 0) {
propAnim();
}
if (em.length > 0) {
emAnim();
}
if (path.length > 0) {
pathAnim();
}
if (ed.length > 0) {
edAnim();
}
if (np.length > 0) {
npAnim();
}
if (tv.length > 0) {
tvAnim();
}
if (mag.length > 0) {
magAnim();
}
if (intl.length > 0) {
intlAnim();
}
if (hf.length > 0) {
hfAnim();
}
if (col.length > 0) {
collAnim();
}
}
}
});

function updateNavbarActiveState() {
var activeSectionId = $('.swiper-slide-active').data('section-id');
$('.nav-link').removeClass('active-link');
$('.nav-link[href="#' + activeSectionId + '"]').addClass('active-link');
}

updateNavbarActiveState();

function logoArrow() {
if ($('.swiper-slide:first-of-type').hasClass('swiper-slide-active')) {
$('.swiper-prev').addClass('hide-btn');
} else {
$('.swiper-prev').removeClass('hide-btn');
}

if ($('#table-of-contents').hasClass('swiper-slide-active')) {
$('.nav-right-logo').css('pointer-events', 'none');
} else {
$('.nav-right-logo').css('pointer-events', 'auto');
}

if ($('.swiper-slide:last-of-type').hasClass('swiper-slide-active')) {
$('.swiper-next').addClass('hide-btn');
} else {
$('.swiper-next').removeClass('hide-btn');
}
}

logoArrow();

swiper.on('slideChangeTransitionEnd', function () {
updateNavbarActiveState();
$('body').css('pointer-events', 'auto');
logoArrow()
});

function navUpdate() {
var activeIndex = swiper.activeIndex;
if (activeIndex === 0 || activeIndex === 7 || activeIndex === 14 || activeIndex === 19) {
$('.navbar').hide();
} else {
$('.navbar').show();
}
}
navUpdate()
swiper.on('slideChange', function () {
navUpdate()
swiper.update();
});

//NAV CLICKS
$('#educating').on('click', function () {
swiper.slideTo(7, 300);
updateNavbarActiveState();
});
$('#overview1').on('click', function () {
swiper.slideTo(2, 300);
updateNavbarActiveState();
});
$('#lowering').on('click', function () {
swiper.slideTo(14, 300);
updateNavbarActiveState();
});
$('#b2b').on('click', function () {
swiper.slideTo(19, 300);
updateNavbarActiveState();
});

function nextLeave() {
var swiper = document.querySelector('.swiper').swiper;
var currentSlide = swiper.slides[swiper.activeIndex];
var wipeWhite = currentSlide.querySelectorAll('.white-mask');
var toc = currentSlide.querySelectorAll('.toc-slide');
var sustain = currentSlide.querySelectorAll('.sustain-slide');
var ov = currentSlide.querySelectorAll('.overview-slide');
var prop = currentSlide.querySelectorAll('.prop-slide');
var em = currentSlide.querySelectorAll('.em-slide');
var path = currentSlide.querySelectorAll('.path-slide');
var educ = currentSlide.querySelectorAll('.educ-slide');
var np = currentSlide.querySelectorAll('.np-slide');
var tv = currentSlide.querySelectorAll('.tv-slide');
var mag = currentSlide.querySelectorAll('.mag-slide');
var intl = currentSlide.querySelectorAll('.intl-slide');
var hf = currentSlide.querySelectorAll('.hf-slide');
var col = currentSlide.querySelectorAll('.coll-slide');
if (wipeWhite.length > 0) {
$('.slide1out').click();
setTimeout(function() {
swiper.slideNext();
}, 500);
}
if (toc.length > 0) {
$('.slide2out').click();
setTimeout(function() {
swiper.slideNext();
}, 700);
}
if (sustain.length > 0) {
$('.slide3out').click();
setTimeout(function() {
swiper.slideNext();
}, 600);
}
if (ov.length > 0) {
$('.slide4out').click();
setTimeout(function() {
swiper.slideNext();
}, 900);
}
if (prop.length > 0) {
$('.slide5out').click();
setTimeout(function() {
swiper.slideNext();
}, 800);
}
if (em.length > 0) {
$('.slide6out').click();
setTimeout(function() {
swiper.slideNext();
}, 600);
}
if (path.length > 0) {
$('.slide7out').click();
setTimeout(function() {
swiper.slideNext();
}, 500);
}
if (educ.length > 0) {
$('.slide8out').click();
setTimeout(function() {
swiper.slideNext();
}, 800);
}
if (np.length > 0) {
$('.slide9out').click();
setTimeout(function() {
swiper.slideNext();
}, 600);
}
if (tv.length > 0) {
$('.slide10out').click();
setTimeout(function() {
swiper.slideNext();
}, 450);
}
if (mag.length > 0) {
$('.slide11out').click();
setTimeout(function() {
swiper.slideNext();
}, 700);
}
if (intl.length > 0) {
$('.slide12out').click();
setTimeout(function() {
swiper.slideNext();
}, 700);
}
if (hf.length > 0) {
$('.slide13out').click();
setTimeout(function() {
swiper.slideNext();
}, 700);
}
if (col.length > 0) {
$('.slide14out').click();
setTimeout(function() {
swiper.slideNext();
}, 650);
}
}
/*
$('.toc-item, .nav-right-logo').click(function(e){
var slideIndex = parseInt($(this).attr('toc'));
nextLeave();
setTimeout(function() {
swiper.slideTo(slideIndex);
}, 450);
});*/

$('.swiper-next').on('click', function() {
$('body').css('pointer-events', 'none');
nextLeave();
});

$('.swiper-prev').on('click', function() {

$('body').css('pointer-events', 'none');
setTimeout(function() {
swiper.slidePrev(); 
}, 300)
});
});

var isKeyboardEnabled = true;

$(document).keydown(function(event) {
if (isKeyboardEnabled) {
if (event.which === 39) {
disableKeyboard();
$('.swiper-next').click();
} else if (event.which === 37) {
disableKeyboard();
$('.swiper-prev').click();
}
}
});

function disableKeyboard() {
isKeyboardEnabled = false;
setTimeout(function() {
enableKeyboard();
}, 1000);
}

function enableKeyboard() {
isKeyboardEnabled = true;
}
} else {
$('.navbar').css('display', 'block');
}
});
