let game = {
    counter: 0,
    totalCounter: 0,
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