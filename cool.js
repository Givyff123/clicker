let button = document.querySelector("#button");
let points = parseInt(localStorage.getItem("localStoragePoints")) || 0
let pointsPerClick = parseInt(localStorage.getItem("localStoragePointsPerClick")) || 1;
let pointsPerSec = parseInt(localStorage.getItem("localStoragePointsPerSec")) || 0;
let multiplier = parseInt(localStorage.getItem("localStorageMultiplier")) || 1;
let luck = 0;
let luck2 = 0;
let attackOnWorms = "false"
let pp = parseInt(localStorage.getItem("localStoragePP")) || 0;
let prestigeShop = document.querySelector("#prestigeshopbutton")
let pointdisplay = document.querySelector("#pointdisplay");
let resetButton = document.querySelector("#resetbutton");
let pointspersecdisplay = document.querySelector("#pointspersecdisplay");
let pointsperclickdisplay = document.querySelector("#pointsperclickdisplay");
let ppdisplay = document.querySelector("#ppdisplay");
let butter = document.getElementById("butter");
let light = document.getElementById("light");
let chocolate = document.getElementById("chocolate");
let body = document.getElementById("body");
let goldenCookie1 = document.getElementById("goldenCookie1");
let goldenCookie2 = document.getElementById("goldenCookie2");
let goldenCookie3 = document.getElementById("goldenCookie3");
let goldenCookie4 = document.getElementById("goldenCookie4");
let attackOnWormButton = document.querySelector("#wormattackbutton")
let attackOnWormDiv = document.querySelector("#wormattackdiv")
let bigButtondiv = document.getElementById("cookiediv");
let goldenCookie1Button = document.getElementById("goldenCookie1Button");
let goldenCookie2Button = document.getElementById("goldenCookie2Button");
let goldenCookie3Button = document.getElementById("goldenCookie3Button");
let goldenCookie4Button = document.getElementById("goldenCookie4Button");
let upgdivs = document.querySelectorAll(".upgdivs")
let prestigeupg = document.querySelectorAll(".prestigeupg")
let upg1PriceDisplay = document.querySelector("#upg1cost")
let upg2PriceDisplay = document.querySelector("#upg2cost")
let upg3PriceDisplay = document.querySelector("#upg3cost")
let upg4PriceDisplay = document.querySelector("#upg4cost")
let upg5PriceDisplay = document.querySelector("#upg5cost")
let upg6PriceDisplay = document.querySelector("#upg6cost")
let upg7PriceDisplay = document.querySelector("#upg7cost")
let upg8PriceDisplay = document.querySelector("#upg8cost")
let upg9PriceDisplay = document.querySelector("#upg9cost")
let upg10PriceDisplay = document.querySelector("#upg10cost")
let upgPrice1 = parseInt(localStorage.getItem("localStorageupgPrice1")) || 100;
let upgPrice2 = parseInt(localStorage.getItem("localStorageupgPrice2")) || 50;
let upgPrice3 = parseInt(localStorage.getItem("localStorageupgPrice3")) || 550;
let upgPrice4 = parseInt(localStorage.getItem("localStorageupgPrice4")) || 600;
let upgPrice5 = parseInt(localStorage.getItem("localStorageupgPrice5")) || 5000;
let upgPrice6 = parseInt(localStorage.getItem("localStorageupgPrice6")) || 20000;
let upgPrice7 = parseInt(localStorage.getItem("localStorageupgPrice7")) || 50000;
let upgPrice8 = parseInt(localStorage.getItem("localStorageupgPrice8")) || 150000;
let upgPrice9 = parseInt(localStorage.getItem("localStorageupgPrice9")) || 150000;
let upgPrice10 = parseInt(localStorage.getItem("localStorageupgPrice10")) || 300000;
upg1PriceDisplay.innerText = `cost:${upgPrice1}`
upg2PriceDisplay.innerText = `cost:${upgPrice2}`
upg3PriceDisplay.innerText = `cost:${upgPrice3}`
upg4PriceDisplay.innerText = `cost:${upgPrice4}`
upg5PriceDisplay.innerText = `cost:${upgPrice5}`
upg6PriceDisplay.innerText = `cost:${upgPrice6}`
upg7PriceDisplay.innerText = `cost:${upgPrice7}`
upg8PriceDisplay.innerText = `cost:${upgPrice8}`
upg9PriceDisplay.innerText = `cost:${upgPrice9}`
upg10PriceDisplay.innerText = `cost:${upgPrice10}`
chocolate.style.visibility = (localStorage.getItem("localStorageChocolate")) || "hidden";
butter.style.visibility = (localStorage.getItem("localStorageButter")) || "hidden";
upg9div.style.visibility = (localStorage.getItem("localStorageUpgrade9Visibility")) || "hidden";
upg10div.style.visibility = (localStorage.getItem("localStorageUpgrade10Visibility")) || "hidden";

let crunch = new Audio("./plastic-crunch.mp3");
let cash = new Audio("./cash.mp3");
let music = new Audio("./music.mp3");
music.volume = 0.3;
let ascend = new Audio("./ascend.mp3");
music.play()
if(multiplier>1) {
    body.style.backgroundImage = `linear-gradient(rgb(242, 255, ${(multiplier*20)+100}),white 15%)`
    if(multiplier>9) {
        body.style.backgroundImage = `linear-gradient(rgb(242, 0, ${(multiplier*10)-50}),black 15%)`
        upgdivs.forEach(upgdiv => {
            upgdiv.style.color = "white"
          });
    }
}

function update() {
    pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
    pointspersecdisplay.innerText = "Cps:" + pointsPerSec
    pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
}

button.addEventListener("click", () => {
    points += pointsPerClick;
    crunch.play()
    pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10
});

function random(max) {
   return Math.floor(Math.random()*max+1)
}
function reset() {
    body.style.backgroundImage =  "linear-gradient(rgb(123, 255, 123),green 15%);"
    points = 0
    pp = 0
    pointsPerClick = 1
    pointsPerSec = 0
    multiplier = 1;
    upgPrice1 = 100;
    upgPrice2 = 50;
    upgPrice3 = 550;
    upgPrice4 = 600;
    upgPrice5 = 5000;
    upgPrice6 = 20000;
    upgPrice7 = 50000;
    upgPrice8 = 150000;
    upg1PriceDisplay.innerText = `cost:100`
    upg2PriceDisplay.innerText = `cost:50`
    upg3PriceDisplay.innerText = `cost:550`
    upg4PriceDisplay.innerText = `cost:600`
    upg5PriceDisplay.innerText = `cost:5000`
    upg6PriceDisplay.innerText = `cost:20000`
    upg7PriceDisplay.innerText = `cost:50000`
    upg8PriceDisplay.innerText = `cost:150000`
    localStorage.setItem("localStorageupgPrice1", `${upgPrice1}`)
    localStorage.setItem("localStorageupgPrice2", `${upgPrice2}`)
    localStorage.setItem("localStorageupgPrice3", `${upgPrice3}`)
    localStorage.setItem("localStorageupgPrice4", `${upgPrice4}`)
    localStorage.setItem("localStorageupgPrice5", `${upgPrice5}`)
    localStorage.setItem("localStorageupgPrice6", `${upgPrice6}`)
    localStorage.setItem("localStorageupgPrice7", `${upgPrice7}`)
    localStorage.setItem("localStorageupgPrice8", `${upgPrice8}`)
    localStorage.setItem("localStoragePoints", "0")
    localStorage.setItem("localStoragePointsPerClick", "1")
    localStorage.setItem("localStoragePointsPerSec", "0")
    butter.style.visibility = "hidden"
    chocolate.style.visibility = "hidden"
    document.querySelector("#upg9div").style.visibility = "hidden"
    localStorage.setItem("localStorageButter", "hidden")
    localStorage.setItem("localStorageChocolate", "hidden")
    localStorage.setItem("localStorageUpgrade9Visibility", "hidden")
    localStorage.setItem("localStoragePP", 0)
}
function ruinTheFun() {
    setInterval(()=>{points+=1e+100}, 10)
    body.style.backgroundImage = "linear-gradient(red,darkred 15%)"
}
resetButton.addEventListener("click", reset)

function wormAttack(int) {
    if(attackOnWorms="false") {
        return int;
    }
    else {
        return 1;
    }
}
document.querySelector("#upgrade1").addEventListener("click", () => {
    if (points > upgPrice1-1) {
        pointsPerClick += 0.5 * multiplier;
        points -= upgPrice1;
        upgPrice1+=Math.round(upgPrice1/10)
        localStorage.setItem("localStorageupgPrice1", `${upgPrice1}`)
        upg1PriceDisplay.innerText = `cost:${upgPrice1}`
        update()
        cash.play()
    }
});


document.querySelector("#upgrade2").addEventListener("click", () => {
    if (points > upgPrice2-1) {
        pointsPerSec += 0.5 * multiplier;
        points -= upgPrice2;
        upgPrice2+=Math.round(upgPrice2/10)
        localStorage.setItem("localStorageupgPrice2", `${upgPrice2}`)
        upg2PriceDisplay.innerText = `cost:${upgPrice2}`
        update()
        cash.play()
    }
});

document.querySelector("#upgrade3").addEventListener("click", () => {
    if (points > upgPrice3-1) {
        pointsPerSec += 6 * multiplier; 
        points -= upgPrice3;
        upgPrice3+=Math.round(upgPrice3/10)
        localStorage.setItem("localStorageupgPrice3", `${upgPrice3}`)
        upg3PriceDisplay.innerText = `cost:${upgPrice3}`
        update()
        cash.play()
    }
});

document.querySelector("#upgrade4").addEventListener("click", () => {
    if (points > upgPrice4-1) {
        pointsPerClick += 3.5 * multiplier;
        points -= upgPrice4;
        upgPrice4+=Math.round(upgPrice4/10)
        localStorage.setItem("localStorageupgPrice4", `${upgPrice4}`)
        upg4PriceDisplay.innerText = `cost:${upgPrice4}`
        update()
        cash.play()
    }
});

document.querySelector("#upgrade5").addEventListener("click", () => {
    if (points > upgPrice5-1) {
        pointsPerSec += 62.5 * multiplier;
        points -= upgPrice5;
        upgPrice5+=Math.round(upgPrice5/10)
        localStorage.setItem("localStorageupgPrice5", `${upgPrice5}`)
        upg5PriceDisplay.innerText = `cost:${upgPrice5}`
        update()
        butter.style.visibility = "visible";
        cash.play()
    }
});

document.querySelector("#upgrade6").addEventListener("click", () => {
    if (points > upgPrice6-1) {
        pointsPerClick += 62.5 * multiplier;
        points -= upgPrice6;
        upgPrice6+=Math.round(upgPrice6/10)
        localStorage.setItem("localStorageupgPrice6", `${upgPrice6}`)
        upg6PriceDisplay.innerText = `cost:${upgPrice6}`
        update()
        cash.play()
    }
});

document.querySelector("#upgrade7").addEventListener("click", () => {
    if (points > upgPrice7-1) {
        pointsPerSec += 300 * multiplier;
        points -= upgPrice7;
        upgPrice7+=Math.round(upgPrice7/10)
        localStorage.setItem("localStorageupgPrice7", `${upgPrice7}`)
        upg7PriceDisplay.innerText = `cost:${upgPrice7}`
        update()
        chocolate.style.visibility = "visible";
        cash.play()
    }
});

document.querySelector("#upgrade8").addEventListener("click", () => {
    if (points > upgPrice8-1) {
        pp += 1;
        points = 0; 
        pointsPerClick = 1 * multiplier;
        pointsPerSec = 0;
        upgPrice8+=Math.round(upgPrice8/10)
        localStorage.setItem("localStorageupgPrice8", `${upgPrice8}`)
        localStorage.setItem("localStoragePP", `${pp}`)
        upg8PriceDisplay.innerText = `cost:${upgPrice8}`
        chocolate.style.visibility = "hidden";
        butter.style.visibility = "hidden";
        upgPrice1 = 100;
        upgPrice2 = 50;
        upgPrice3 = 550;
        upgPrice4 = 600;
        upgPrice5 = 5000;
        upgPrice6 = 20000;
        upgPrice7 = 50000;
        upgPrice9 = 150000;
        upgPrice10 = 300000;
        upg1PriceDisplay.innerText = `cost:100`
        upg2PriceDisplay.innerText = `cost:50`
        upg3PriceDisplay.innerText = `cost:550`
        upg4PriceDisplay.innerText = `cost:600`
        upg5PriceDisplay.innerText = `cost:5000`
        upg6PriceDisplay.innerText = `cost:20000`
        upg7PriceDisplay.innerText = `cost:50000`
        upg9PriceDisplay.innerText = `cost:150000`
        upg10PriceDisplay.innerText = `cost:300000`
        localStorage.setItem("localStorageupgPrice1", `${upgPrice1}`)
        localStorage.setItem("localStorageupgPrice2", `${upgPrice2}`)
        localStorage.setItem("localStorageupgPrice3", `${upgPrice3}`)
        localStorage.setItem("localStorageupgPrice4", `${upgPrice4}`)
        localStorage.setItem("localStorageupgPrice5", `${upgPrice5}`)
        localStorage.setItem("localStorageupgPrice6", `${upgPrice6}`)
        localStorage.setItem("localStorageupgPrice7", `${upgPrice7}`)
        localStorage.setItem("localStorageupgPrice9", `${upgPrice9}`)
        localStorage.setItem("localStorageupgPrice10", `${upgPrice10}`)
        update()
        light.style.visibility = "visible"
        document.querySelector("#upg9div").style.visibility = "visible"
        cash.play()
        ascend.play()
        body.style.backgroundImage = `linear-gradient(rgb(242, 255, ${(multiplier*20)+100}),white 15%)`
        if(multiplier>9) {
            body.style.backgroundImage = `linear-gradient(rgb(242, 0, ${(multiplier*10)-50}),black 15%)`
        }
        
        setTimeout(()=>{light.style.visibility = "hidden"}, 2000)
        
    }
});
document.querySelector("#upgrade9").addEventListener("click", () => {
    if (points > upgPrice9-1) {
        pointsPerSec += Math.round(Math.random()*2000) * Math.floor(multiplier/2);
        points -= upgPrice9;
        upgPrice9+=Math.round(upgPrice9/10)
        localStorage.setItem("localStorageupgPrice9", `${upgPrice9}`)
        upg9PriceDisplay.innerText = `cost:${upgPrice9}`
        document.querySelector("#upg10div").style.visibility = "visible"
        update()
        cash.play()
    }
});

document.querySelector("#upgrade10").addEventListener("click", () => {
    if (points > upgPrice10-1) {
        pointsPerClick += 300;
        points -= upgPrice10;
        upgPrice10+=Math.round(upgPrice10/10)
        localStorage.setItem("localStorageupgPrice10", `${upgPrice10}`)
        upg10PriceDisplay.innerText = `cost:${upgPrice10}`
        update()
        cash.play()
    }
});
attackOnWormButton.addEventListener("click", ()=>{
    attackOnWorms = "true"
})
prestigeShop.addEventListener("click", ()=>{
    document.querySelector("#multiplierupg").style.visibility = "visible"
    document.querySelector("#closeprestigeshop").style.visibility = "visible"

    
})
document.querySelector("#closeprestigeshop").addEventListener("click", ()=>{
    document.querySelector("#multiplierupg").style.visibility = "hidden"
    document.querySelector("#closeprestigeshop").style.visibility = "hidden"
})
document.querySelector("#multiplierupg").addEventListener("click", ()=>{
    if (pp > 0) {
        multiplier+=1
        pp-=1
        ppdisplay 
}
})

document.querySelector("#minigame").addEventListener("click", () => {
    if (points > 999) {
        luck = random(2)
        if(luck==1) {
            points+=2000
        }
        points-=1000
        update()
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
        update()
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
        update()
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
    let bonus = Math.floor(Math.random() * Math.floor(points/4)) + Math.floor(points/4); 
    points += bonus;
    pointdisplay.innerText = "Cupcakes: " + points;
    goldenCookie1.style.visibility = "hidden"; 
});

goldenCookie2Button.addEventListener("click", () => {
    let bonus = Math.floor(Math.random() * Math.floor(points/4)) + Math.floor(points); 
    points += bonus;
    pointdisplay.innerText = "Cupcakes: " + points;
    goldenCookie2.style.visibility = "hidden"; 
});

goldenCookie3Button.addEventListener("click", () => {
    let bonus = Math.floor(Math.random() * Math.floor(points/4)) + Math.floor(points); 
    points += bonus;
    pointdisplay.innerText = "Cupcakes: " + points;
    goldenCookie3.style.visibility = "hidden"; 
});


goldenCookie4Button.addEventListener("click", () => {
    let bonus = Math.floor(Math.random() * Math.floor(points/4)) + Math.floor(points); 
    points += bonus;
    pointdisplay.innerText = "Cupcakes: " + points;
    goldenCookie4.style.visibility = "hidden"; 
});



setInterval(() => {
    pointspersecdisplay.innerText = "Cps:" + pointsPerSec
    pointsperclickdisplay.innerText = "Cpc:" + pointsPerClick
    ppdisplay.innerText = "Prestige Points:" + pp
    points += pointsPerSec/100;
}, 10); 
setInterval(()=>{
    localStorage.setItem("localStorageChocolate", `${chocolate.style.visibility}`)
    localStorage.setItem("localStorageButter", `${butter.style.visibility}`)
    localStorage.setItem("localStorageUpgrade9Visibility", `${document.querySelector("#upg9div").style.visibility}`)
    localStorage.setItem("localStorageUpgrade10Visibility", `${document.querySelector("#upg10div").style.visibility}`)
    localStorage.setItem("localStoragePoints", `${points}`)
    localStorage.setItem("localStoragePointsPerClick", `${pointsPerClick}`)
    localStorage.setItem("localStoragePointsPerSec", `${pointsPerSec}`)
    localStorage.setItem("localStorageMultiplier", `${multiplier}`)
    localStorage.setItem("localStoragePP", `${pp}`)
    pointdisplay.innerText = "Cupcakes: " + Math.floor(points*10)/10;
}, 1000)

setInterval(() => {
    goldenCookie1.style.visibility = "visible"
    setTimeout(() => {
        if(attackOnWorms="false") {
            if(goldenCookie1.style.visibility == "visible") {
                points-=Math.round(points/10)
                goldenCookie1.style.visibility = "hidden"
            }
        }
        else {
            if(goldenCookie1.style.visibility == "visible") {
                points-=Math.round(points/10)
                goldenCookie1.style.visibility = "hidden"
            }
        }


    }, 10000);
},wormAttack(50000)); 

setInterval(() => {
    goldenCookie2.style.visibility = "visible"
    setTimeout(() => {
        if(attackOnWorms="false") {
            if(goldenCookie2.style.visibility == "visible") {
                points-=Math.round(points/10)
                goldenCookie2.style.visibility = "hidden"
            }
        }
        else {
            if(goldenCookie2.style.visibility == "visible") {
                points-=Math.round(points/3)
            }
        }
    }, 10000);
},wormAttack(90000)); 

setInterval(() => {
    goldenCookie3.style.visibility = "visible"
    setTimeout(() => {
        if(attackOnWorms="false") {
            if(goldenCookie3.style.visibility == "visible") {
                points-=Math.round(points/10)
                goldenCookie3.style.visibility = "hidden"
            }
        }
        else {
            if(goldenCookie3.style.visibility == "visible") {
                points-=Math.round(points/3)
                goldenCookie3.style.visibility = "hidden"
            }
        }
    }, 10000);
}, wormAttack(110000)); 

setInterval(() => {
    goldenCookie4.style.visibility = "visible"
    setTimeout(() => {
        if(attackOnWorms="false") {
            if(goldenCookie4.style.visibility == "visible") {
                points-=Math.round(points/10)
                goldenCookie4.style.visibility = "hidden"
            }
        }
        else {
            if(goldenCookie4.style.visibility == "visible") {
                points-=Math.round(points/3)
                goldenCookie4.style.visibility = "hidden"
            }
        }
    }, 10000);
}, wormAttack(120000)); 
setInterval(() => {
    music.play()
}, 1000); 
