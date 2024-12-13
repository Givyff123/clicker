let button = document.querySelector("#button");
let points = 0;
let pointsPerClick = 1;
let pointsPerSec = 0;
let multiplier = 1;
let luck = 0;
let luck2 = 0;
let pointdisplay = document.querySelector("#pointdisplay");
let pointspersecdisplay = document.querySelector("#pointspersecdisplay");
let pointsperclickdisplay = document.querySelector("#pointsperclickdisplay");
let butter = document.getElementById("butter");
let light = document.getElementById("light");
let chocolate = document.getElementById("chocolate");
let body = document.getElementById("body");
let goldenCookie1 = document.getElementById("goldenCookie1");
let goldenCookie2 = document.getElementById("goldenCookie2");
let bigButtondiv = document.getElementById("cookiediv");
let goldenCookie1Button = document.getElementById("goldenCookie1Button");
let goldenCookie2Button = document.getElementById("goldenCookie2Button");
let crunch = new Audio("./plastic-crunch.mp3");
let cash = new Audio("./cash.mp3");
let music = new Audio("./music.mp3");
music.volume = 0.5;
crunch.volume = Math.min(1, crunch.volume + 0.2);
let ascend = new Audio("./ascend.mp3");
music.play()
button.addEventListener("click", () => {
    points += pointsPerClick * multiplier;
    button.innerText = "🍵";
    crunch.play()
    bigButtondiv.style.transform.scale
    setTimeout(() => { button.innerText = "🧁"; }, 75);
    pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
});

function random(max) {
   return Math.floor(Math.random()*max+1)
}
function reset() {
    points = 0
    pointsPerClick = 0
    pointsPerSec = 0
    multiplier = 0;
}
function ruinTheFun() {
    setInterval(()=>{points+=1e+100}, 10)
    body.style.backgroundImage = "linear-gradient(red,darkred 15%)"
}

document.querySelector("#upgrade1").addEventListener("click", () => {
    if (points > 99) {
        pointsPerClick += 1;
        points -= 100;
        pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
        pointspersecdisplay.innerText = "Cps:" + pointsPerSec
        pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
        cash.play()
    }
});


document.querySelector("#upgrade2").addEventListener("click", () => {
    if (points > 49) {
        pointsPerSec += 1;
        points -= 50;
        pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
        pointspersecdisplay.innerText = "Cps:" + pointsPerSec
        pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
        cash.play()
    }
});

document.querySelector("#upgrade3").addEventListener("click", () => {
    if (points > 549) {
        pointsPerSec += 12;
        points -= 550;
        pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
        pointspersecdisplay.innerText = "Cps:" + pointsPerSec
        pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
        cash.play()
    }
});

document.querySelector("#upgrade4").addEventListener("click", () => {
    if (points > 599) {
        pointsPerClick += 7;
        points -= 600;
        pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
        pointspersecdisplay.innerText = "Cps:" + pointsPerSec
        pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
        cash.play()
    }
});

document.querySelector("#upgrade5").addEventListener("click", () => {
    if (points > 4999) {
        pointsPerSec += 125;
        points -= 5000;
        pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
        pointspersecdisplay.innerText = "Cps:" + pointsPerSec
        pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
        butter.style.visibility = "visible";
        cash.play()
    }
});

document.querySelector("#upgrade6").addEventListener("click", () => {
    if (points > 19999) {
        pointsPerClick += 125;
        points -= 20000;
        pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
        pointspersecdisplay.innerText = "Cps:" + pointsPerSec
        pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
        cash.play()
    }
});

document.querySelector("#upgrade7").addEventListener("click", () => {
    if (points > 49999) {
        pointsPerSec += 600;
        points -= 50000;
        pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
        pointspersecdisplay.innerText = "Cps:" + pointsPerSec
        pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
        chocolate.style.visibility = "visible";
        cash.play()
    }
});

document.querySelector("#upgrade8").addEventListener("click", () => {
    if (points > 149999) {
        multiplier += 1;
        points = 0; 
        pointsPerClick = 1;
        pointsPerSec = 0;
        pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
        pointspersecdisplay.innerText = "Cps:" + pointsPerSec
        pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
        light.style.visibility = "visible"
        cash.play()
        ascend.play()
        body.style.backgroundImage = `linear-gradient(rgb(242, 255, ${(multiplier*20)+100}),white 15%)`
        if(multiplier>9) {
            body.style.backgroundImage = `linear-gradient(rgb(242, 0, ${(multiplier*10)-50}),black 15%)`
        }
        
        setTimeout(()=>{light.style.visibility = "hidden"}, 2000)
        
    }
});

document.querySelector("#minigame").addEventListener("click", () => {
    if (points > 999) {
        luck = random(2)
        if(luck==1) {
            points+=2000
        }
        points-=1000
        pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
        pointspersecdisplay.innerText = "Cps:" + pointsPerSec
        pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
        cash.play()
    }
});

document.querySelector("#minigame2").addEventListener("click", () => {
    if (points > 4999) {
        luck = random(2)
        if(luck==1) {
            points+=10000
        }
        points-=5000
        pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
        pointspersecdisplay.innerText = "Cps:" + pointsPerSec
        pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
        cash.play()
    }
});
document.querySelector("#minigame3").addEventListener("click", () => {
    if (points > 99999) {
        luck = random(2)
        if(luck==1) {
            points+=200000
        }
        points-=100000
        pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
        pointspersecdisplay.innerText = "Cps:" + pointsPerSec
        pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
        cash.play()
    }
});

// document.querySelector("#gamble").addEventListener("click", () => {
//     if (points > 999) {
//         luck = random(200)
//         if(luck==1) {
//             points+=1000000
//         }
//         points-=1000
//         pointdisplay.innerText = "Cupcakes: " + points;
//         cash.play()
//     }
// });

goldenCookie1Button.addEventListener("click", () => {
    let bonus = Math.floor(Math.random() * Math.floor(points/10)) + Math.floor(points/10); 
    points += bonus;
    pointdisplay.innerText = "Cupcakes: " + points;
    goldenCookie1.style.visibility = "hidden"; 
});

goldenCookie2Button.addEventListener("click", () => {
    let bonus = Math.floor(Math.random() * Math.floor(points/10)) + Math.floor(points/10); 
    points += bonus;
    pointdisplay.innerText = "Cupcakes: " + points;
    goldenCookie2.style.visibility = "hidden"; 
});


setInterval(() => {
    points += pointsPerSec/100*multiplier;
    pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10;
}, 10); 

setInterval(() => {
    goldenCookie1.style.visibility = "visible"
    setTimeout(() => {
        if(goldenCookie1.style.visibility == "visible") {
            points-=Math.round(points/10)
        }
        
    }, 10000);
}, 50000); 
setInterval(() => {
    goldenCookie2.style.visibility = "visible"
    setTimeout(() => {
        if(goldenCookie2.style.visibility == "visible") {
            points-=Math.round(points/10)
        }
    }, 10000);
}, 70000); 
setInterval(() => {
    music.play()
}, 1000); 
