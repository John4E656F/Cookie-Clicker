let counter = 10000000;
let clickEarning = 1;

document.getElementById("amberHeard").addEventListener('click', ()=> {
    counter += clickEarning;
    document.getElementById("counter").innerHTML = counter+"$";
})

let makeupCost = 30;
let makeup = 0;

document.getElementById("bMakeup").onclick = function buyMakeup(){
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

document.getElementById("bLawyer").onclick = function buyLawyer(){
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

document.getElementById("bCry").onclick = function buyCry(){
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

setInterval (function() {
    counter += makeup;
    counter += lawyers * 5;
    counter += cry * 70;
    document.getElementById("counter").innerHTML = counter+"$";
}, 1000); // 1000ms = 1s

let earnPerSec = 0;

function updateEarning(){
    earnPerSec = makeup + lawyers * 5 + cry * 70;
    document.getElementById("earn").innerHTML = earnPerSec+"$";
};

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

setInterval (function() {
    saveGame();
}, 30000); // 30000ms = 30s

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

// window.onload = function () {
//     loadGame();
//     updateEarning();
//     document.getElementById("counter").innerHTML = counter+"$";
//     document.getElementById("lawyerCost").innerHTML = lawyerCost+"$";
//     document.getElementById("lawyers").innerHTML = lawyers;
//     document.getElementById("makeupCost").innerHTML = makeupCost+"$";
//     document.getElementById("makeup").innerHTML = makeup;
//     document.getElementById("cryCost").innerHTML = cryCost+"$";
//     document.getElementById("cry").innerHTML = cry;
// };