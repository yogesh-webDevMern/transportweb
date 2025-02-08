var bar = document.querySelector("#bar");
var Menu = document.querySelector(".nav ul");
var overlay = document.querySelector(".overlay")
var heading1=document.querySelector(".heading-1");
var heading2=document.querySelector(".heading-2");
var heading3=document.querySelector(".heading-3");
var count1=0;
var count2=0;
var count3=0;
bar.addEventListener(
    "click",
    (e)=>
    {
Menu.classList.toggle("open-menu");
overlay.classList.toggle("show-overlay");
e.target.classList.toggle("fa-bars");
e.target.classList.toggle("fa-times");
document.body.classList.toggle("overflow");
    }
);

function getData() {
    const interval1 = setInterval(() => {
        if (count1 < 195) {
            count1++;
            heading1.innerHTML = count1 + "+";
        } else {
            clearInterval(interval1); // Stop the interval once the target is reached
        }
    }, 20); // Slowing down the interval to make it more manageable
}
function getData2() {
    const interval2 = setInterval(() => {
        if (count2 < 250) {
            count2++;
            heading2.innerHTML = count2 + "+";
        } else {
            clearInterval(interval2); // Stop the interval once the target is reached
        }
    }, 20); // Slowing down the interval to make it more manageable
}
function getData3() {
    const interval3 = setInterval(() => {
        if (count3 < 350) {
            count3++;
            heading3.innerHTML = count3 + "+";
        } else {
            clearInterval(interval3); // Stop the interval once the target is reached
        }
    }, 20); // Slowing down the interval to make it more manageable
}
let triggered = false;
window.addEventListener('scroll', () => {
    var scrollPosition = window.scrollY + window.innerHeight;
    var headingPosition = heading1.offsetTop;
console.log(!triggered);

    if (scrollPosition >= headingPosition && !triggered) {
        triggered = true; // Prevent further triggers
        // console.log(triggered);
        getData();
        getData2();
        getData3();
    }
});
const anim =gsap.timeline();
anim.from(".headi",{
    y:30,
    opacity:0,
    duration:2,


});
// Show the form when the page loads
window.onload = function () {
    document.getElementById("contact-form").classList.remove("opacity-0");
};

// Function to close the form
function closeForm() {
    document.getElementById("contact-form").classList.add("opacity-0");
}

gsap.from(".start-form",
    {
        scale:0,
        duration:2,
        opacity:0,
        x:1200
    }
)


function init()
{
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}
init();
window.addEventListener("load",function()
{
this.setTimeout(
    function open()
    {
        document.querySelector(".box-form").style.display="block";
    },1000
)
}
)
document.querySelector(".iconmost").addEventListener("click",function()
{
    document.querySelector(".box-form").style.display="none";
})