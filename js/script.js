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


