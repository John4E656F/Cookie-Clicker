let counter = 0;
let clickEarning = 1;

/* Adding an event listener to the element with the id "amberHeard" and when the element is clicked, it
will add the value of clickEarning to the counter and update the counter on the page. */
document.getElementById("amberHeard").addEventListener('click', ()=> {
    counter += clickEarning;
    document.getElementById("counter").innerHTML = counter+"$";
})

let makeupCost = 30;
let makeup = 0;

/* A function that is called when the button with the id "bMakeup" is clicked. */
document.getElementById("bMakeup").onclick = function buyMakeup(){
    /* Checking if the counter is greater than or equal to the makeupCost. If it is, it will subtract
    the makeupCost from the counter, add 1 to the makeup, and multiply the makeupCost by 1.1. Then
    it will update the counter, makeupCost, and makeup on the page. */
    if(counter >= makeupCost) {
        counter -= makeupCost;
        makeup += 1;
        makeupCost = Math.round(makeupCost * 1.1);

        document.getElementById("counter").innerHTML = counter+"$";
        document.getElementById("makeupCost").innerHTML = makeupCost+"$";
        document.getElementById("makeup").innerHTML = makeup;
        updateEarning();
    }
}

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
}

let cryCost = 1000;
let cry = 0;

/* A function that is called when the button with the id "bCry" is clicked. */
document.getElementById("bCry").onclick = function buyCry(){
    /* Checking if the counter is greater than or equal to the cryCost. If it is, it will subtract the
    cryCost from the counter, add 1 to the cry, and multiply the cryCost by 1.3. Then it will update
    the counter, cryCost, and cry on the page. */
    if(counter >= cryCost) {
        counter -= cryCost;
        cry += 1;
        cryCost = Math.round(cryCost * 1.3);

        document.getElementById("counter").innerHTML = counter+"$";
        document.getElementById("cryCost").innerHTML = cryCost+"$";
        document.getElementById("cry").innerHTML = cry;
        updateEarning();
    }
}

/* Adding the value of makeup, lawyers, and cry to the counter every second. */
setInterval (function() {
    counter += makeup;
    counter += lawyers * 5;
    counter += cry * 70;
    document.getElementById("counter").innerHTML = counter+"$";
}, 1000); // 1000ms = 1s

let earnPerSec = 0;

function updateEarning(){
    /* Updating the earnPerSec variable and updating the earnPerSec on the page. */
    earnPerSec = makeup + lawyers * 5 + cry * 70;
    document.getElementById("earn").innerHTML = earnPerSec+"$";
};

/* Saving the game. */
document.getElementById("saveGame").onclick = function saveGame() {
    let gameSave = {
        counter: counter,
        earnPerSec: earnPerSec,
        makeupCost: makeupCost,
        makeup: makeup,
        lawyerCost: lawyerCost,
        lawyers: lawyers,
        cryCost: cryCost,
        cry: cry
    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
};

/* Saving the game every 30 seconds. */
setInterval (function() {
    saveGame();
}, 30000); // 30000ms = 30s

/**
 * If there is a gameSave in localStorage, then set the variables to the values in the gameSave.
 */
function loadGame(){
    let gameSave = JSON.parse(localStorage.getItem("gameSave"));
    if(gameSave !== null){
        counter = gameSave.counter;
        earnPerSec = gameSave.earnPerSec;
        makeupCost = gameSave.makeupCost;
        makeup = gameSave.makeup;
        lawyerCost = gameSave.lawyerCost;
        lawyers = gameSave.lawyers;
        cryCost = gameSave.cryCost;
        cry = gameSave.cry;
    }
};

window.onload = function () {
    loadGame();
    updateEarning();
    document.getElementById("counter").innerHTML = counter+"$";
    document.getElementById("lawyerCost").innerHTML = lawyerCost+"$";
    document.getElementById("lawyers").innerHTML = lawyers;
    document.getElementById("makeupCost").innerHTML = makeupCost+"$";
    document.getElementById("makeup").innerHTML = makeup;
    document.getElementById("cryCost").innerHTML = cryCost+"$";
    document.getElementById("cry").innerHTML = cry;
};