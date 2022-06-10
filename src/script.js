let counter = 0;
let clickEarning = 1;


/* Adding an event listener to the element with the id "amberHeard" and when the element is clicked, it
will add the value of clickEarning to the counter and update the counter on the page. */
document.getElementById("amberHeard").addEventListener('click', ()=> {
    counter += clickEarning;
    document.getElementById("counter").innerHTML = "$"+counter;
     let moneyAnimate = document.createElement("p");
        moneyAnimate.innerHTML = "+"+clickEarning;
        document.getElementById("moneyAnimation").appendChild(moneyAnimate);
        moneyAnimate.classList.add("moneyAnimation", "text-white"); // Add the class that animates
        console.log('clicked');
            setTimeout(()=>{
            document.getElementById("moneyAnimation").removeChild(moneyAnimate);
        }, 1000);
});

const bonusClickBtn = document.getElementById("bonusClick");

let bonusBtnClicked = false;
let bonusClick = 3;
const bonusCounter = document.getElementById("bonusCounter");


    window.setInterval( function() {
    bonusClickBtn.classList.remove("hidden");
    bonusBtnClicked = true;
    }, Math.floor(Math.random() * 100000 + 200000));



document.getElementById('bonusClick').addEventListener('click', () =>{

    if (bonusBtnClicked === true){
        alert('You have activated a bonus! Your click earning is now tripled for 30sec!');
        let bonusClickEarning = clickEarning;
        bonusClickEarning *= bonusClick;
        clickEarning = bonusClickEarning;
        bonusCounter.classList.remove("hidden");
        bonusCounter.innerHTML = "3x ";
        bonusClickBtn.classList.add("hidden");
        bonusBtnClicked = false;
        /* A timer that will divide the bonusClickEarning by the bonusClick after 30 seconds. */
        window.setTimeout(function(){

            bonusCounter.classList.add("hidden");
            bonusClickEarning /= bonusClick;
            clickEarning = bonusClickEarning;

        }, 30000);
    }
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
            helperList.classList.add('hidden');
        };
    } else {
        upgradeList.classList.add('hidden');
    }
});

let rumCost = 15000000;
let rumBought = false;


document.getElementById('bRum').onclick = function buyRum(){
    console.log('clicked');
    if(rumBought === false){
        alert('Rum Diary will permanently double your click earning and will reset the game!');
        if(confirm('Are you sure you want to buy Rum Diary?')){
            if(counter >= rumCost){
                counter -= rumCost;
                document.getElementById("rumCost").innerHTML = "Bought";
                rumBought = true;
                alert('You have bought Rum Diary! Your earning per click is now doubled!');
                rumUnlocked();
            }
        } 
    } else {
        document.getElementById("bRum").classList.add('pointer-events-none', 'cursor-not-allowed');
    }
};


let aquaCost = 15000000;
let aquaBought = false;

document.getElementById('bAqua').onclick = function buyAqua(){
    console.log('clicked');
    if(aquaBought === false){
        alert('Aquaman will permanently double your earning per second and will reset the game!');
        if(confirm('Are you sure you want to buy Aquaman?')){
            if(counter >= aquaCost){
                counter -= aquaCost;
                document.getElementById("aquaCost").innerHTML = "Bought";
                aquaBought = true;
                aquaUnlocked();
            }
        }
    } else {
        document.getElementById("bAqua").classList.add('pointer-events-none', 'cursor-not-allowed');
    }
};

let meraCost = 1000000000;
let meraBought = false;

document.getElementById('bMera').onclick = function buyMera(){
    console.log('clicked');
    if(meraBought === false){
        alert('Mera is a unknowned special upgrade!');
        if(confirm('Are you sure you want to buy Mera?')){
            if(counter >= meraCost){
                counter -= meraCost;
                clickEarning *= 2;
                alert('Congratulations! You have just wasted you precious like on playing this stupid game!');
                location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            }
        }
    } else {
        document.getElementById("bMera").classList.add('pointer-events-none', 'cursor-not-allowed');
    }
};

function rumUnlocked(){
    if(rumBought === true){
        clickEarning *= 2;

        document.getElementById("multi").innerHTML = "$"+clickEarning;

    }
}

function aquaUnlocked(){
    if(aquaBought === true){
        earnPerSec *= 2;
        document.getElementById("multi").innerHTML = "$"+earnPerSec;

    }
}




//@note shop
let apCost = 50;
let apMulti = 0;
let apBought = false;

document.getElementById('bAP').onclick = function buyAP(){
    if(counter >= apCost){
        counter -= apCost;
        clickEarning *= apMulti;
        apMulti += 1;
        apCost = Math.round(apCost * 1.5);
        document.getElementById("counter").innerHTML = counter;
        document.getElementById("apCost").innerHTML = apCost;
        document.getElementById("apMulti").innerHTML = apMulti;
        updateClickEarning();
    }
}

let handCost = 500;
let handMulti = 0;
let handBought = false;

document.getElementById('bHand').onclick = function buyHand(){
    if(counter >= handCost){
        counter -= handCost;
        clickEarning *= handMulti;
        handMulti += 10;
        handCost = Math.round(handCost * 1.5);
        document.getElementById("counter").innerHTML = "$"+counter;
        document.getElementById("handCost").innerHTML = "$"+handCost;
        document.getElementById("handMulti").innerHTML = handMulti;
        updateClickEarning();
    }
}

let milaniCost = 1000;
let milanimulti = 0;
let milaniBought = false;

document.getElementById('bMilani').onclick = function buyMilani(){
    if(counter >= milaniCost){
        counter -= milaniCost;
        clickEarning *= milanimulti;
        milanimulti += 100;
        milaniCost = Math.round(milaniCost * 1.5);
        document.getElementById("counter").innerHTML = "$"+counter;
        document.getElementById("milaniCost").innerHTML = "$"+milaniCost;
        document.getElementById("milaniMulti").innerHTML = milanimulti;
        updateClickEarning();
    }
}
/*document.getElementById("bLawyer").onclick = function buyLawyer(numToCount, costOfLawyer){ counter -= lawyerCost;
    lawyers += 1;
    lawyerCost = Math.round(lawyerCost * 1.2);

    document.getElementById("counter").innerHTML = "$"+counter;
    document.getElementById("lawyerCost").innerHTML = "$"+lawyerCost;
    document.getElementById("lawyers").innerHTML = lawyers;
    updateEarning();}
function buyLawyers(){
     Checking if the counter is greater than or equal to the lawyerCost. If it is, it will subtract
    the lawyerCost from the counter, add 1 to the lawyers, and multiply the lawyerCost by 1.2. Then
    it will update the counter, lawyerCost, and lawyers on the page. 
    if(counter >= lawyerCost) {
       buyLawyer(counter, lawyerCost);
    }
};*/

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

        document.getElementById("counter").innerHTML = "$"+counter;
        document.getElementById("jamesCost").innerHTML = "$"+jamesCost;
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

        document.getElementById("counter").innerHTML = "$"+counter;
        document.getElementById("lawyerCost").innerHTML = "$"+lawyerCost;
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

        document.getElementById("counter").innerHTML = "$"+counter;
        document.getElementById("elonCost").innerHTML = "$"+elonCost;
        document.getElementById("elon").innerHTML = elon;
        updateEarning();
    }
};

/* Adding the value of james, lawyers, and elon to the counter every second. */
setInterval (function() {
    counter += james;
    counter += lawyers * 5;
    counter += elon * 10;
    document.getElementById("counter").innerHTML = "$"+counter;
}, 1000); // 1000ms = 1s

let earnPerSec = 0;

function updateEarning(){
    /* Updating the earnPerSec variable and updating the earnPerSec on the page. */
    earnPerSec = james + lawyers * 5 + elon * 10;
    document.getElementById("earn").innerHTML = "$"+earnPerSec;
};


function updateClickEarning(){
    /* Updating the earnPerClick variable and updating the earnPerClick on the page. */
    
    if(apBought == false || handBought == false || milaniBought == false){
        apBought = true;
        handBought = true;
        milaniBought = true;
        clickEarning = 1;
    } else {

        clickEarning = apMulti + handMulti  + milanimulti  ;
    }
    document.getElementById("multi").innerHTML = "$"+clickEarning;

};

function paidJohnny(){
    if(counter >= 15000000){
        alert('You are about to pay Johnny Depp, $15,000,000. This will reset the game with the permanent upgrade unlocked.');
            counter = 0;
            james = 0;
            lawyers = 0;
            elon = 0;
            jamesCost = 30;
            lawyerCost = 500;
            elonCost = 1000;
            apCost = 100;
            handCost = 50;
            milaniCost = 50;
            apMulti = 0;
            handMulti = 0;
            milanimulti = 0;
            clickEarning = 1;
            document.getElementById("counter").innerHTML = "$"+counter;
            document.getElementById("james").innerHTML = james;
            document.getElementById("lawyers").innerHTML = lawyers;
            document.getElementById("elon").innerHTML = elon;
            document.getElementById("jamesCost").innerHTML = "$"+jamesCost;
            document.getElementById("lawyerCost").innerHTML = "$"+lawyerCost;
            document.getElementById("elonCost").innerHTML = "$"+elonCost;
            document.getElementById("apCost").innerHTML = "$"+apCost;
            document.getElementById("handCost").innerHTML = "$"+handCost;
            document.getElementById("milaniCost").innerHTML = "$"+milaniCost;
            document.getElementById("apMulti").innerHTML = apMulti;
            document.getElementById("handMulti").innerHTML = handMulti;
            document.getElementById("milaniMulti").innerHTML = milanimulti;
            document.getElementById("multi").innerHTML = "$"+clickEarning;
    }
};

//@note savegame
/* Saving the game. */
document.getElementById("saveGame").onclick = function gameSaved() {
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
        handCost: handCost,
        handMulti: handMulti,
        milaniCost: milaniCost,
        milanimulti: milanimulti,
        clickEarning: clickEarning,
        apCost: apCost,
        apMulti: apMulti,
        handCost: handCost,
        handMulti: handMulti,
        milaniCost: milaniCost,
        milanimulti: milanimulti,
        apBought: apBought,
        handBought: handBought,
        milaniBought: milaniBought,

    }
    function store(){}
    store('key', '')
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
};

//@note autoSave
/* Saving the game every 30 seconds. */
setInterval (()=> {
    console.log("Game Auto Saved");
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
        handCost: handCost,
        handMulti: handMulti,
        milaniCost: milaniCost,
        milanimulti: milanimulti,
        clickEarning: clickEarning,
        apCost: apCost,
        apMulti: apMulti,
        handCost: handCost,
        handMulti: handMulti,
        milaniCost: milaniCost,
        milanimulti: milanimulti,
        apBought: apBought,
        handBought: handBought,
        milaniBought: milaniBought,


    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}, 30000); // 30000ms = 30s

//@note Ctrl + S save
/* Saving the game when the user presses Ctrl + S. */
document.addEventListener('keydown', function(event) {
    if(event.ctrlKey && event.keyCode == 83) { // Ctrl + S
        event.preventDefault();
        gameSaved();
    }
});


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
        handCost = gameSave.handCost;
        handMulti = gameSave.handMulti;
        milaniCost = gameSave.milaniCost;
        milanimulti = gameSave.milanimulti;
        clickEarning = gameSave.clickEarning;
        apCost = gameSave.apCost;
        apMulti = gameSave.apMulti;
        handCost = gameSave.handCost;
        handMulti = gameSave.handMulti;
        milaniCost = gameSave.milaniCost;
        milanimulti = gameSave.milanimulti;
        apBought = gameSave.apBought;
        handBought = gameSave.handBought;
        milaniBought = gameSave.milaniBought;
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
    updateClickEarning();
    document.getElementById("counter").innerHTML = "$"+counter;
    document.getElementById("lawyerCost").innerHTML = "$"+lawyerCost;
    document.getElementById("lawyers").innerHTML = lawyers;
    document.getElementById("jamesCost").innerHTML = "$"+jamesCost;
    document.getElementById("james").innerHTML = james;
    document.getElementById("elonCost").innerHTML = "$"+elonCost;
    document.getElementById("elon").innerHTML = elon;
    document.getElementById("apCost").innerHTML = "$"+apCost;
    document.getElementById("apMulti").innerHTML = "$"+apMulti;
    document.getElementById("handCost").innerHTML = "$"+handCost;
    document.getElementById("handMulti").innerHTML = "$"+handMulti;
    document.getElementById("milaniCost").innerHTML = "$"+milaniCost;
    document.getElementById("milaniMulti").innerHTML = "$"+milanimulti;
    document.getElementById("multi").innerHTML = "$"+clickEarning;
};

