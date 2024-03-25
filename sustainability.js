$('.swiper-wrapper').css('display', 'block');

var Webflow = Webflow || [];
Webflow.push(function() {
if(!Webflow.env('editor')) {
$('.swiper-wrapper').css('display', 'flex');
$('[text-split]').css('opacity', '0');

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

function carbAnim() {
let tl = gsap.timeline({});
tl.from($('.base1'), { y: '100%', duration: .3, ease: 'power1.out'});
tl.from($('.base2'), { y: '100%', duration: .4, delay: .5, ease: 'power1.out'}, 0);
tl.from($('.base3'), { y: '50%', opacity: 0, duration: .3, delay: .7, ease: 'power1.out', stagger: { amount: 0.3 }}, 0);
tl.from($('.base4'), { y: '100%', duration: .5, delay: .9, ease: 'power1.out'}, 0);
}

$(".tower-slide .line").wrap('<div class="line-wrapper">');
function towerAnim() {
let tl = gsap.timeline({});
tl.from($('[t-line]').find(".line"), {y: "100%", duration: .4, delay: .1, ease: "none", stagger: { amount: 0.7 }}, 0);
tl.from($('[t-line2]').find(".line"), {y: "100%", duration: .4, delay: .1, ease: "none", stagger: { amount: 2 }}, 0);
tl.from($('[t-line3]').find(".line"), {y: "100%", duration: .4, delay: .1, ease: "none", stagger: { amount: 1.3 }}, 0);
tl.from($('[t-line4]').find(".line"), {y: "100%", duration: .4, delay: 1, ease: "none", stagger: { amount: .25 }}, 0);
tl.from($('.t-opac'), {opacity: 0, duration: .4, delay: .1, ease: "power1.out", stagger: { amount: .8 }}, 0);
}

function westAnim() {
let tl = gsap.timeline({});
tl.from($('.fade-w'), { opacity: 0, delay: .2, duration: .5, ease: 'power1.out', stagger: { amount: 0.7 }});
}

function ranchAnim() {
let tl = gsap.timeline({});
tl.from($('.rrise'), { y: '30%', opacity: 0, duration: .6, ease: 'power1.out', stagger: { amount: 0.7 }});
tl.from($('.rrise2'), { y: '30%', opacity: 0, duration: .6, ease: 'power1.out', stagger: { amount: 0.8 }}, 0);
}

function espAnim() {
let tl = gsap.timeline({});
tl.from($('.efade'), { opacity: 0, delay: .2, duration: .5, ease: 'power1.out', stagger: { amount: 0.7 }});
tl.from($('.efade2'), { opacity: 0, delay: .2, duration: .5, ease: 'power1.out', stagger: { amount: 0.7 }}, 0);
}

function b2bAnim() {
let tl = gsap.timeline({});
tl.from($('.up'), { y: '-100%', duration: .3, ease: 'power1.out', stagger: { amount: 0.3 }});
tl.from($('.up2'), { y: '-100%', duration: .3, delay: .5, ease: 'power1.out', stagger: { amount: 0.25 }}, 0);
tl.from($('.up3'), { y: '-100%', opacity: 0, duration: .35, delay: 1.1, ease: 'power1.out'}, 0);
}

function sfAnim() {
let tl = gsap.timeline({});
tl.from($('.pan'), { x: '-30%', opacity: 0, duration: .8, ease: 'power1.out', stagger: { amount: 0.5 }}, 0);
tl.from($('.pan2'), { x: '-30%', opacity: 0, duration: .8, ease: 'power1.out'}, 0);
tl.from($('.pan3'), { x: '-40%', opacity: 0, duration: .8, delay: .2, ease: 'power1.out', stagger: { amount: 0.5 }}, 0);
tl.from($('.pan4'), { x: '-40%', opacity: 0, duration: .8, delay: .35, ease: 'power1.out', stagger: { amount: 0.5 }}, 0);
tl.from($('.pan5'), { x: '-20%', opacity: 0, duration: .8, delay: .5, ease: 'power1.out', stagger: { amount: 0.35 }}, 0);
}

function tranAnim() {
let tl = gsap.timeline({});
tl.from($('.tpan'), { x: '-20%', opacity: 0, duration: .8, ease: 'power1.out', stagger: { amount: 0.5 }}, 0);
tl.from($('.tpan2'), { x: '-20%', opacity: 0, duration: .8, ease: 'power1.out', stagger: { amount: 0.5 }}, 0);
}

function kubraAnim() {
let tl = gsap.timeline({});
tl.from($('.kpan'), { x: '-20%', opacity: 0, duration: .8, ease: 'power1.out', stagger: { amount: 0.5 }}, 0);
tl.from($('.kpan2'), { x: '-20%', opacity: 0, duration: .8, ease: 'power1.out', stagger: { amount: 0.5 }}, 0);
}

function healthAnim() {
let tl = gsap.timeline({});
tl.from($('.hpan'), { x: '-20%', opacity: 0, duration: .8, ease: 'power1.out', stagger: { amount: 0.5 }}, 0);
tl.from($('.hpan2'), { x: '-20%', opacity: 0, duration: .8, ease: 'power1.out', stagger: { amount: 0.5 }}, 0);
}

function ventAnim() {
let tl = gsap.timeline({});
tl.from($('.vrise'), { y: '30%', opacity: 0, duration: .6, ease: 'power1.out', stagger: { amount: 0.7 }});
tl.from($('.vrise2'), { y: '30%', opacity: 0, duration: .6, ease: 'power1.out', stagger: { amount: 0.8 }}, 0);
}

function barnAnim() {
let tl = gsap.timeline({});
tl.from($('.brise'), { y: '30%', opacity: 0, duration: .6, ease: 'power1.out', stagger: { amount: 0.7 }});
tl.from($('.brise2'), { y: '30%', opacity: 0, duration: .6, ease: 'power1.out', stagger: { amount: 0.8 }}, 0);
}

function levelAnim() {
let tl = gsap.timeline({});
tl.from($('.lpan'), { x: '-20%', opacity: 0, duration: .9, ease: 'power1.out', stagger: { amount: 0.6 }}, 0);
tl.from($('.lpan2'), { x: '-20%', opacity: 0, duration: .9, ease: 'power1.out', stagger: { amount: 0.6 }}, 0);
}

/*function backAnim() {
let tl = gsap.timeline({});
tl.from($('.bwipe1'), { width: '0%', duration: .4, delay: .1, ease: 'power2.out'});
tl.from($('.bwipe2'), { width: '100%', duration: .4, delay: .1, ease: 'power2.out'}, 0);
tl.from($('.bwipe3'), { width: '0%', duration: .4, delay: .3, ease: 'power2.out', stagger: { amount: 0.1 }}, 0);
tl.from($('.bwipe4'), { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: .8, ease: 'power2.out'}, 0);
}*/

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
updateNavigation(this.activeIndex);
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
var carb = targetSlide.querySelectorAll('.carb-slide');
var tower = targetSlide.querySelectorAll('.tower-slide');
var west = targetSlide.querySelectorAll('.west-slide');
var ranch = targetSlide.querySelectorAll('.ranch-slide');
var esp = targetSlide.querySelectorAll('.esp-slide');
var b2b = targetSlide.querySelectorAll('.b2b-cover');
var sf = targetSlide.querySelectorAll('.sf-slide');
var tran = targetSlide.querySelectorAll('.tran-slide');
var kubra = targetSlide.querySelectorAll('.kubra-slide');
var health = targetSlide.querySelectorAll('.health-slide');
var venture = targetSlide.querySelectorAll('.ventures-slide');
var barn = targetSlide.querySelectorAll('.barn-slide');
var level = targetSlide.querySelectorAll('.levelup-slide');
var back = targetSlide.querySelectorAll('.back-cover');
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
if (carb.length > 0) {
carbAnim();
}
if (tower.length > 0) {
towerAnim();
}
if (west.length > 0) {
westAnim();
}
if (ranch.length > 0) {
ranchAnim();
}
if (esp.length > 0) {
espAnim();
}
if (b2b.length > 0) {
b2bAnim();
}
if (sf.length > 0) {
sfAnim();
}
if (tran.length > 0) {
tranAnim();
}
if (kubra.length > 0) {
kubraAnim();
}
if (health.length > 0) {
healthAnim();
}
if (venture.length > 0) {
ventAnim();
}
if (barn.length > 0) {
barnAnim();
}
if (level.length > 0) {
levelAnim();
}
if (back.length > 0) {
$('.backcoverin').click();
//backAnim();
}
}
}
});

function updateNavigation(index) {
var activeIndex = index;
var prevSlide = swiper.slides[activeIndex - 1];
var nextSlide = swiper.slides[activeIndex + 1];
$('.prev-title').text(getSlideTitle(prevSlide));
$('.next-title').text(getSlideTitle(nextSlide));
setPageNumber(activeIndex);
}

function getSlideTitle(slide) {
if (!slide) return '';
return $(slide).attr('page-title') || '';
}

function setPageNumber(index) {
var formattedIndex = formatIndex(index + 1);
$('.page_number').text(formattedIndex);
}

function formatIndex(index) {
return index < 10 ? '0' + index : '' + index;
}

function updateNavbarActiveState() {
var activeSectionId = $('.swiper-slide-active').data('section-id');
$('.nav-link').removeClass('active-link');
$('.nav-link[href="#' + activeSectionId + '"]').addClass('active-link');
}

updateNavbarActiveState();

function updateLogos(activeIndex) {
// Show/hide logos based on active slide index
if (activeIndex >= 0 && activeIndex <= 6) {
$('.main-logo').show();
$('.educating-logo, .lowering-logo, .b2b-logo').hide();
} else if (activeIndex >= 7 && activeIndex <= 13) {
$('.educating-logo').show();
$('.main-logo, .lowering-logo, .b2b-logo').hide();
} else if (activeIndex >= 14 && activeIndex <= 18) {
$('.lowering-logo').show();
$('.main-logo, .educating-logo, .b2b-logo').hide();
} else if (activeIndex >= 19 && activeIndex <= 26) {
$('.b2b-logo').show();
$('.main-logo, .educating-logo, .lowering-logo').hide();
}
}

updateLogos(swiper.activeIndex);

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
if (activeIndex === 0 || activeIndex === 7 || activeIndex === 14 || activeIndex === 19 || activeIndex === 27) {
$('.navbar').hide();
} else {
$('.navbar').show();
}
}

navUpdate();

swiper.on('slideChange', function () {
updateNavigation(this.activeIndex);
updateLogos(this.activeIndex);
navUpdate();
swiper.update();
});

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
var carb = currentSlide.querySelectorAll('.carb-slide');
var tower = currentSlide.querySelectorAll('.tower-slide');
var west = currentSlide.querySelectorAll('.west-slide');
var ranch = currentSlide.querySelectorAll('.ranch-slide');
var esp = currentSlide.querySelectorAll('.esp-slide');
var b2b = currentSlide.querySelectorAll('.b2b-cover');
var sf = currentSlide.querySelectorAll('.sf-slide');
var tran = currentSlide.querySelectorAll('.tran-slide');
var kubra = currentSlide.querySelectorAll('.kubra-slide');
var health = currentSlide.querySelectorAll('.health-slide');
var venture = currentSlide.querySelectorAll('.ventures-slide');
var barn = currentSlide.querySelectorAll('.barn-slide');
var level = currentSlide.querySelectorAll('.levelup-slide');
if (wipeWhite.length > 0) {
$('.slide1out').click();
setTimeout(function() {
swiper.slideNext();
}, 600);
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
if (carb.length > 0) {
$('.slide15out').click();
setTimeout(function() {
swiper.slideNext();
}, 700);
}
if (tower.length > 0) {
$('.slide16out').click();
setTimeout(function() {
swiper.slideNext();
}, 700);
}
if (west.length > 0) {
$('.slide17out').click();
setTimeout(function() {
swiper.slideNext();
}, 550);
}
if (ranch.length > 0) {
$('.slide18out').click();
setTimeout(function() {
swiper.slideNext();
}, 550);
}
if (esp.length > 0) {
$('.slide19out').click();
setTimeout(function() {
swiper.slideNext();
}, 550);
}
if (b2b.length > 0) {
$('.slide20out').click();
setTimeout(function() {
swiper.slideNext();
}, 600);
}
if (sf.length > 0) {
$('.slide21out').click();
setTimeout(function() {
swiper.slideNext();
}, 600);
}
if (tran.length > 0) {
$('.slide22out').click();
setTimeout(function() {
swiper.slideNext();
}, 600);
}
if (kubra.length > 0) {
$('.slide23out').click();
setTimeout(function() {
swiper.slideNext();
}, 800);
}
if (health.length > 0) {
$('.slide24out').click();
setTimeout(function() {
swiper.slideNext();
}, 800);
}
if (venture.length > 0) {
$('.slide25out').click();
setTimeout(function() {
swiper.slideNext();
}, 600);
}
if (barn.length > 0) {
$('.slide26out').click();
setTimeout(function() {
swiper.slideNext();
}, 550);
}
if (level.length > 0) {
$('.slide27out').click();
setTimeout(function() {
swiper.slideNext();
}, 600);
}
}

function backLeave() {
var swiper = document.querySelector('.swiper').swiper;
var currentSlide = swiper.slides[swiper.activeIndex];
var back = currentSlide.querySelectorAll('.back-cover');
if (back.length > 0) {
setTimeout(function() {
$('.backcoverout').click();
}, 400);
}
}

$('.toc-item, .nav-right-logo').click(function(e) {
var slideIndex = parseInt($(this).attr('toc'));
swiper.slideTo(slideIndex);
});

$('.swiper-next').on('click', function() {
$('body').css('pointer-events', 'none');
nextLeave();
});

$('.swiper-prev').on('click', function() {
backLeave();
$('body').css('pointer-events', 'none');
setTimeout(function() {
swiper.slidePrev(); 
}, 200)
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
