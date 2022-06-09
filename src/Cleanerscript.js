let game = {
    counter: 0,
    totalCounter: 1,
    totalClicks: 0,
    clickValue: 1,
    version: "0.0.1",

    addToCounter: function(value){
        this.counter += value;
        this.totalCounter += value;
        display.updateCounter();
    }
};


    let display = {
        updateCounter: function(){
            document.getElementById("counter").innerHTML = game.counter+"$";
            document.getElementById("totalCounter").innerHTML = game.totalCounter+"$";
        }
};


/Bonus timer:        var bonusCost = 10;        
//var bonusOn = false;        
var bonusTime=30;        
var scoree=0;        
function displayBonus() {              
    document.getElementById("bonuscost").innerHTML  = "Price= " + bonusCost  + " pts";        
}        

function displayBonusTime() {              
    document.getElementById("timer").innerHTML  = bonusTime + " seconds";        
 }        
 
 function bonusEnabler() {              
     if (!bonusOn && scoree >= bonusCost) {                    
     bonus.disabled = false;             
    } else {  bonus.disabled = true;              
    }        }        
     
function buttonsEnabler() {           
     bonusEnabler();          }        
     
function enableBonus() {              
    counter -= bonusCost;             
     bonusOn = true;            
       //counter *= 2;              
       bonus.disabled = true;              
       displayScore();              
       displayBonusTime();       
     }        
     
function disableBonus() {            
    bonusOn = false;            
    bonusTime = 30;            
    //imageBtn = multiplier;            
    displayBonus();            
    buttonsEnabler();          }        
    
function bonusF() {              
    if (bonusOn) {                    
        --bonusTime;                    
        displayBonusTime();                    
        if (bonusTime === 0) {                         
             disableBonus();                    }              }        }       
              //displayBonus();       
               //bonus.disabled = true;        
    
               bonus.addEventListener('click', enableBonus);        
bonusInterval = window.setInterval(bonusF, 1000);