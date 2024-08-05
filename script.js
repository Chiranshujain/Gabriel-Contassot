var tl = gsap.timeline();
tl.to(".text-loader", {
    opacity: 1,
    duration: 0.05,
    stagger: {
        each: 0.1,  //0.05 to show + 0.05 to hide = 0.1
        repeat: 1,
        yoyo: true,
    }
})
tl.to(".loader",{
    display: "none"
})


tl.to(".p-a-1", {
    onStart: function() {
        $(".p-a-1").scramble(50, 50, "alphabet", true); 
    }
}, 'a')

tl.to(".p-a-2", {
    onStart: function() {
        $(".p-a-2").scramble(50, 50, "alphabet", true); 
    }
}, 'a')

tl.to(".p-a-3", {
    onStart: function() {
        $(".p-a-3").scramble(50, 50, "alphabet", true); 
    }
}, 'a')

tl.to(".p-a-4", {
    onStart: function() {
        $(".p-a-4").scramble(50, 50, "alphabet", true); 
    }
}, 'a')

tl.to(".p-a-5", {
    onStart: function() {
        $(".p-a-5").scramble(50, 50, "alphabet", true); 
    }
}, 'a')

tl.to(".p-a-6", {
    onStart: function() {
        $(".p-a-6").scramble(50, 50, "alphabet", true); 
    }
}, 'a')

tl.to(".info", {
    onStart: function() {
        $(".info").scramble(50, 50, "alphabet", true); 
    }
}, 'a')

tl.to(".contact", {
    onStart: function() {
        $(".contact").scramble(50, 50, "alphabet", true); 
    }
}, 'a')

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#one",
        pin: true,
        scrub: true,
        start: "50% 50%",
        end: "150% 50%",
    }
});

tl2.to(".fixed-p-content", {
    scale: "0.7",
})
.to("#one-text", {
    top: "50%",
}).to(".scroll-2", {
    opacity: 0,
    top: 0
})


gsap.timeline({
    scrollTrigger: {
        trigger: "#img-1",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
    }
})
.to("#img-1", {
    backgroundSize: "55%"
})

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-2",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
    }
})
.to("#img-2", {
    backgroundSize: "55%"
})

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-3",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
    }
})
.to("#img-3", {
    backgroundSize: "55%"
})

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-4",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
    }
})
.to("#img-4", {
    backgroundSize: "55%"
})

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-5",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
    }
})
.to("#img-5", {
    backgroundSize: "55%"
})

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-6",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
    }
})
.to("#img-6", {
    backgroundSize: "55%"
})

gsap.timeline({
    scrollTrigger: {
        trigger: "#last",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
    }
})
.to(".fixed-p-content", {
    scale: "1.2",
})

document.querySelector("#img-1").addEventListener("mouseenter", function(){
    document.querySelector("html").style.backgroundColor = "#dfd2be"
})
document.querySelector("#img-1").addEventListener("mouseleave", function(){
    document.querySelector("html").style.backgroundColor = "#000"
})

document.querySelector("#img-2").addEventListener("mouseenter", function(){
    document.querySelector("html").style.backgroundColor = "rgb(42, 70, 85)"
})
document.querySelector("#img-2").addEventListener("mouseleave", function(){
    document.querySelector("html").style.backgroundColor = "#000"
})

document.querySelector("#img-3").addEventListener("mouseenter", function(){
    document.querySelector("html").style.backgroundColor = "rgb(231, 20, 66)"
})
document.querySelector("#img-3").addEventListener("mouseleave", function(){
    document.querySelector("html").style.backgroundColor = "#000"
})

document.querySelector("#img-4").addEventListener("mouseenter", function(){
    document.querySelector("html").style.backgroundColor = "#062529"
})
document.querySelector("#img-4").addEventListener("mouseleave", function(){
    document.querySelector("html").style.backgroundColor = "#000"
})

document.querySelector("#img-5").addEventListener("mouseenter", function(){
    document.querySelector("html").style.backgroundColor = "rgb(153, 75, 54)"
})
document.querySelector("#img-5").addEventListener("mouseleave", function(){
    document.querySelector("html").style.backgroundColor = "#000"
})

document.querySelector("#img-6").addEventListener("mouseenter", function(){
    document.querySelector("html").style.backgroundColor = "rgb(32, 32, 69)"
})
document.querySelector("#img-6").addEventListener("mouseleave", function(){
    document.querySelector("html").style.backgroundColor = "#000"
})

document.querySelector("#img-7").addEventListener("mouseenter", function(){
    document.querySelector("html").style.backgroundColor = "rgb(30, 33, 38)"
})
document.querySelector("#img-7").addEventListener("mouseleave", function(){
    document.querySelector("html").style.backgroundColor = "#000"
})