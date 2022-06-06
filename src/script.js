let counter = 100000;
let clickEarning = 1;

/* Adding an event listener to the element with the id "amberHeard" and when the element is clicked, it
will add the value of clickEarning to the counter and update the counter on the page. */
document.getElementById("amberHeard").addEventListener('click', ()=> {
    counter += clickEarning;
    document.getElementById("counter").innerHTML = counter+"$";
});

const helperList = document.getElementById("helperList");
const shopList = document.getElementById("shopList");
const upgradeList = document.getElementById("upgradeList");

//@note helperBtn
document.getElementById("helper").addEventListener('click', ()=> {

 /* Checking if the helperList has the class hidden. If it does, it will remove the class hidden from
 the helperList. If the shopList and upgradeList do not have the class hidden, it will add the class
 hidden to the shopList and upgradeList. If the helperList does not have the class hidden, it will
 add the class hidden to the helperList. */
 if (helperList.classList.contains('hidden')) {
     helperList.classList.remove('hidden');
     if(shopList.querySelector('hidden') !== 'hidden' && upgradeList.querySelector('hidden') !== 'hidden'){
         shopList.classList.add('hidden');
         upgradeList.classList.add('hidden');
     };
 } else {
     helperList.classList.add('hidden');
 }

});

//@note shopBtn
document.getElementById("shop").addEventListener('click', ()=> {

    /* Checking if the shopList has the class hidden. If it does, it will remove the class hidden from
    the shopList. If the helperList and upgradeList do not have the class hidden, it will add the
    class hidden to the helperList and upgradeList. If the shopList does not have the class hidden,
    it will add the class hidden to the shopList. */
    if (shopList.classList.contains('hidden')) {
        shopList.classList.remove('hidden');
        if(helperList.querySelector('hidden') !== 'hidden' && upgradeList.querySelector('hidden') !== 'hidden'){
            helperList.classList.add('hidden');
            upgradeList.classList.add('hidden');
        };
    } else {
        shopList.classList.add('hidden');
    }
});

//@note upgradeBtn
document.getElementById("upgrade").addEventListener('click', ()=> {

    /* Checking if the upgradeList has the class hidden. If it does, it will remove the class hidden
    from the upgradeList. If the shopList and helperList do not have the class hidden, it will add
    the class hidden to the shopList and helperList. If the upgradeList does not have the class
    hidden, it will add the class hidden to the upgradeList. */
    if (upgradeList.classList.contains('hidden')) {
        upgradeList.classList.remove('hidden');
        if(shopList.querySelector('hidden') !== 'hidden' && shopList.querySelector('hidden') !== 'hidden'){
            shopList.classList.add('hidden');
            shopList.classList.add('hidden');
        };
    } else {
        upgradeList.classList.add('hidden');
    }
});

let rumCost = 50;
let rumBought = false;

document.getElementById('bRum').onclick = function buyRum(){
    console.log('clicked');
    if(rumBought === false){
        alert('Rum Diary will permanently double your click earning!');
        if(confirm('Are you sure you want to buy Rum Diary?')){
            if(counter >= rumCost){
                counter -= rumCost;
                clickEarning *= 2;
                document.getElementById("counter").innerHTML = counter+"$";
                document.getElementById("rumCost").innerHTML = "Bought";
                rumBought = true;
                updateClickEarning();
                alert('You have bought Rum Diary! Your earning per click is now doubled!');
            }
        } 
    } else {
        rumBought = true;
        document.getElementById("bRum").classList.add('pointer-events-none', 'cursor-not-allowed');
        alert('Already bought');
    }
};


let aquaCost = 50;
let aquaBought = false;

document.getElementById('bAqua').onclick = function buyAqua(){
    console.log('clicked');
    if(aquaBought === false){
        alert('Rum Diary will permanently double your click earning!');
        if(confirm('Are you sure you want to buy Rum Diary?')){
            if(counter >= aquaCost){
                counter -= aquaCost;
                clickEarning *= 2;
                document.getElementById("counter").innerHTML = counter+"$";
                document.getElementById("aquaCost").innerHTML = "Bought";
                aquaBought = true;
                updateClickEarning();
            }
        }
    } else {
        aquaBought = true;
        document.getElementById("bAqua").classList.add('pointer-events-none', 'cursor-not-allowed');
        alert('Already bought');
    }
};

// let aquaCost = 50;
// let aquaBought = false;

// document.getElementById('bAqua').onclick = function buyAqua(){
//     console.log('clicked');
//     if(aquaBought === false){
//         if(counter >= aquaCost){
//             counter -= aquaCost;
//             clickEarning *= 2;
//             document.getElementById("counter").innerHTML = counter+"$";
//             document.getElementById("aquaCost").innerHTML = "Bought";
//             aquaBought = true;
//             updateClickEarning();
//         }
//     } else {
//         aquaBought = true;
//         console.log('already bought');
//     }
// };

//@note shop
let apCost = 50;
let apMulti = 0;

document.getElementById('bAP').onclick = function buyAP(){
    if(counter >= apCost){
        counter -= apCost;
        clickEarning *= apMulti;
        apMulti += 1;
        apCost = Math.round(apCost * 1.5);
        document.getElementById("counter").innerHTML = counter+"$";
        document.getElementById("apCost").innerHTML = apCost+"$";
        document.getElementById("apMulti").innerHTML = apMulti;
        updateEarning();
        updateClickEarning();
    }
}

let camCost = 50;
let camMulti = 0;

document.getElementById('bCam').onclick = function buyCam(){
    if(counter >= camCost){
        counter -= camCost;
        clickEarning *= camMulti;
        camMulti += 10;
        camCost = Math.round(camCost * 1.5);
        document.getElementById("counter").innerHTML = counter+"$";
        document.getElementById("camCost").innerHTML = camCost+"$";
        document.getElementById("camMulti").innerHTML = camMulti;
        updateEarning();
        updateClickEarning();
    }
}

let milaniCost = 50;
let milanimulti = 0;

document.getElementById('bMilani').onclick = function buyMilani(){
    if(counter >= milaniCost){
        counter -= milaniCost;
        clickEarning *= milaniMulti;
        milanimulti += 100;
        milaniCost = Math.round(camCost * 1.5);
        document.getElementById("counter").innerHTML = counter+"$";
        document.getElementById("milaniCost").innerHTML = milaniCost+"$";
        document.getElementById("milaniMulti").innerHTML = milanimulti;
        updateEarning();
        updateClickEarning();
    }
}

let jamesCost = 30;
let james = 0;

/* A function that is called when the button with the id "bJames" is clicked. */
document.getElementById("bJames").onclick = function buyJames(){
    /* Checking if the counter is greater than or equal to the jamesCost. If it is, it will subtract
    the jamesCost from the counter, add 1 to the james, and multiply the jamesCost by 1.1. Then
    it will update the counter, jamesCost, and james on the page. */
    if(counter >= jamesCost) {
        counter -= jamesCost;
        james += 1;
        jamesCost = Math.round(jamesCost * 1.1);

        document.getElementById("counter").innerHTML = counter+"$";
        document.getElementById("jamesCost").innerHTML = jamesCost+"$";
        document.getElementById("james").innerHTML = james;
        updateEarning();
    }
};

let lawyerCost = 500;
let lawyers = 0;

/* A function that is called when the button with the id "bLawyer" is clicked. */
document.getElementById("bLawyer").onclick = function buyLawyer(){
    /* Checking if the counter is greater than or equal to the lawyerCost. If it is, it will subtract
    the lawyerCost from the counter, add 1 to the lawyers, and multiply the lawyerCost by 1.2. Then
    it will update the counter, lawyerCost, and lawyers on the page. */
    if(counter >= lawyerCost) {
        counter -= lawyerCost;
        lawyers += 1;
        lawyerCost = Math.round(lawyerCost * 1.2);

        document.getElementById("counter").innerHTML = counter+"$";
        document.getElementById("lawyerCost").innerHTML = lawyerCost+"$";
        document.getElementById("lawyers").innerHTML = lawyers;
        updateEarning();
    }
};

let elonCost = 1000;
let elon = 0;

/* A function that is called when the button with the id "bElon" is clicked. */
document.getElementById("bElon").onclick = function buyElon(){
    /* Checking if the counter is greater than or equal to the celonost. If it is, it will subtract the
    elonCost from the counter, add 1 to the elon, and multiply the celonost by 1.3. Then it will update
    the counter, elonCost, and elon on the page. */
    if(counter >= elonCost) {
        counter -= elonCost;
        elon += 1;
        elonCost = Math.round(elonCost * 1.3);

        document.getElementById("counter").innerHTML = counter+"$";
        document.getElementById("elonCost").innerHTML = elonCost+"$";
        document.getElementById("elon").innerHTML = elon;
        updateEarning();
    }
};

/* Adding the value of james, lawyers, and elon to the counter every second. */
setInterval (function() {
    counter += james;
    counter += lawyers * 5;
    counter += elon * 10;
    document.getElementById("counter").innerHTML = counter+"$";
}, 1000); // 1000ms = 1s

let earnPerSec = 0;

function updateEarning(){
    /* Updating the earnPerSec variable and updating the earnPerSec on the page. */
    earnPerSec = james + lawyers * 5 + elon * 10;
    document.getElementById("earn").innerHTML = earnPerSec+"$";
};


function updateClickEarning(){
    /* Updating the earnPerClick variable and updating the earnPerClick on the page. */
    clickEarning = apMulti + camMulti + milanimulti;
    document.getElementById("multi").innerHTML = clickEarning+"$";
}

//@note savegame
/* Saving the game. */
document.getElementById("saveGame").onclick = gameSaved();
function gameSaved() {
    console.log("Game Saved");
    let gameSave = {
        counter: counter,
        earnPerSec: earnPerSec,
        jamesCost: jamesCost,
        james: james,
        lawyerCost: lawyerCost,
        lawyers: lawyers,
        elonCost: elonCost,
        elon: elon,
        apCost: apCost,
        apMulti: apMulti,
        camCost: camCost,
        camMulti: camMulti,
        milaniCost: milaniCost,
        milanimulti: milanimulti,
        clickEarning: clickEarning,

    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
};

//@note autoSave
/* Saving the game every 30 seconds. */
setInterval (()=> {
    gameSaved();
}, 30000); // 30000ms = 30s

//@note loadgame
 /* If there is a gameSave in localStorage, then set the variables to the values in the gameSave.
 */
function loadGame(){
    let gameSave = JSON.parse(localStorage.getItem("gameSave"));
    if(gameSave !== null){
        counter = gameSave.counter;
        earnPerSec = gameSave.earnPerSec;
        jamesCost = gameSave.jamesCost;
        james = gameSave.james;
        lawyerCost = gameSave.lawyerCost;
        lawyers = gameSave.lawyers;
        elonCost = gameSave.elonCost;
        elon = gameSave.elon;
        apCost = gameSave.apCost;
        apMulti = gameSave.apMulti;
        camCost = gameSave.camCost;
        camMulti = gameSave.camMulti;
        milaniCost = gameSave.milaniCost;
        milanimulti = gameSave.milanimulti;
        clickEarning = gameSave.clickEarning;
    }
};

//@note resetGame
document.getElementById("resetGame").onclick = function resetGame(){
    if(confirm('Are you sure you want to reset the game?')){
        localStorage.removeItem("gameSave");
        location.reload();
    }
};

//@note onLoad
/* Updating the page with the values of the variables. */
window.onload = function () {
    loadGame();
    updateEarning();
    document.getElementById("counter").innerHTML = counter+"$";
    document.getElementById("lawyerCost").innerHTML = lawyerCost+"$";
    document.getElementById("lawyers").innerHTML = lawyers;
    document.getElementById("jamesCost").innerHTML = jamesCost+"$";
    document.getElementById("james").innerHTML = james;
    document.getElementById("elonCost").innerHTML = elonCost+"$";
    document.getElementById("elon").innerHTML = elon;
};

//@note Ctrl + S save
/* Saving the game when the user presses Ctrl + S. */
document.addEventListener('keydown', function(event) {
    if(event.ctrlKey && event.keyCode == 83) { // Ctrl + S
        event.preventDefault();
        saveGame();
    }
});

