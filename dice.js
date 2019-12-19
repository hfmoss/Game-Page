function dice(){
    console.log("in diceRoll");
    var dice1 = Math.floor(Math.random()*6)+1;
    var dice2 = Math.floor(Math.random()*6)+1;
    var total = dice1 + dice2;
    document.getElementById("diceOutput").innerHTML ="First roll is a(n) " + dice1;
    document.getElementById("diceOutput").innerHTML =("Second roll is a(n) " + dice2);
    if(total == 7 || total == 11){
        document.getElementById("diceOutput").innerHTML =("You rolled a(n) " + total + ", you lose!");
    }
    else if(total == 2 || total == 3 || total == 12){
        document.getElementById("diceOutput").innerHTML =("You rolled a(n) " + total + ", you win!");
    }
    else{
        document.getElementById("diceOutput").innerHTML =("You rolled a(n) " + total + ". Roll again!");
    }
}
