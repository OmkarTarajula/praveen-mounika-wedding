
// ==========================
// COUNTDOWN
// ==========================

const weddingDate =
new Date("June 27, 2026 00:00:00").getTime();

setInterval(() => {

    const now =
    new Date().getTime();

    const distance =
    weddingDate - now;

    const days =
    Math.floor(distance /
    (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );

    document.getElementById("days").innerHTML =
    days;

    document.getElementById("hours").innerHTML =
    hours;

    document.getElementById("minutes").innerHTML =
    minutes;

    document.getElementById("seconds").innerHTML =
    seconds;

},1000);

// ==========================
// SCRATCH CARD
// ==========================

const canvas =
document.getElementById("scratchCard");

if(canvas){

const ctx =
canvas.getContext("2d");

canvas.width = 320;
canvas.height = 150;

ctx.fillStyle = "#ff7fa6";
ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
);

ctx.fillStyle = "white";
ctx.font = "40px Arial";
ctx.fillText(
    "❤️",
    125,
    90
);

let scratching = false;

canvas.addEventListener(
"touchstart",
() => scratching = true
);

canvas.addEventListener(
"touchend",
() => scratching = false
);

canvas.addEventListener(
"touchmove",
scratch
);

function scratch(e){

    if(!scratching)
    return;

    const rect =
    canvas.getBoundingClientRect();

    const x =
    e.touches[0].clientX
    - rect.left;

    const y =
    e.touches[0].clientY
    - rect.top;

    ctx.globalCompositeOperation =
    "destination-out";

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        18,
        0,
        Math.PI * 2
    );

    ctx.fill();
}

}

// ==========================
// SCROLL REVEAL
// ==========================

ScrollReveal().reveal(
'.intro-content',
{
    delay:200,
    distance:'50px',
    origin:'bottom'
});

ScrollReveal().reveal(
'.couple-content',
{
    delay:200
});

ScrollReveal().reveal(
'.invitation-card',
{
    delay:200
});

ScrollReveal().reveal(
'.venue-card',
{
    delay:200
});