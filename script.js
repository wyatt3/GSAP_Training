//GSAP functions
function gsapTo() {
  gsap.to(".object-1", {duration: 1, x: 500});
}

function gsapFrom() {
  gsap.from(".object-2", {duration: 1, x: 500});
}

function gsapFromTo() {
  gsap.fromTo(".object-3", {x: 250}, {x: 500, duration: 1});
}

function gsapSet() {
  gsap.set(".object-4", {x: 500});
}


function gsapBounce() {
  gsap.fromTo(".object-5", {x: 0}, {x: 500, duration: 1, ease: "bounce"});
}

function gsapElastic() {
  gsap.fromTo(".object-6", {x: 0}, {x: 500, duration: 2.5, ease: "elastic"});
}

function gsapSteps() {
  gsap.fromTo(".object-7", {x: 0}, {x: 500, duration: 1.5, ease: SteppedEase.config(10)});
}

function gsapInOut() {
  gsap.fromTo(".object-8", {x: 0}, {x: 500, duration: 2.5, ease: "elastic.inOut"});
}

function notTlStart() {
  gsap.fromTo(".object-9", {x: 0}, {x: 500, duration: 1.5});
  gsap.fromTo(".object-10", {x: 0, rotation: 0}, {x: 500, rotation: 360, duration: 1.5});
  gsap.fromTo(".object-11", {x: 0, scale: 1}, {x: 500, scale: 0.4, duration: 1.5});
}

var tl = gsap.timeline({paused: true});
tl.fromTo(".object-12", {x: 0}, {x: 500, duration: 1.5});
tl.fromTo(".object-13", {x: 0, rotation: 0}, {x: 500, rotation: 360, duration: 1.5});
tl.fromTo(".object-14", {x: 0, scale: 1}, {x: 500, scale: 0.4, duration: 1.5});

function gsapOnComplete() {
  gsap.fromTo(".object-15", {x: 0}, {x: 500, duration: 1, onComplete: () => { $('.message-15').text('Animation Completed'); }});
}

function gsapOnStart() {
  gsap.fromTo(".object-16", {x: 0}, {x: 500, duration: 1, onStart: () => { $('.message-16').text('Animation Started'); }});
}

function gsapOnUpdate() {
  var updateCount = 0;
  gsap.fromTo(".object-17", {x: 0}, {x: 500, duration: 1, onUpdate: () => { updateCount += 1;$('.message-17').text('Animation has updated ' + updateCount + ' times') }});
}

var repeatCount = 0;
tl2 = gsap.timeline({paused: true, repeat: 4, onRepeat: () => { repeatCount += 1;$('.message-18').text('Animation has repeated ' + repeatCount + ' times'); }, onReverseComplete: () => { $('.message-19').text('Reverse Animation Completed'); }});
tl2.fromTo(".object-18", {x:0}, {x: 500, duration: 1});