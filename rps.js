function RPS(){
    //rock=1, 2=paper, 3=scissors
    var user = document.getElementById("userInput").value.toLowerCase();
    document.getElementById("userOutput").innerHTML= ("User chose: " + user);
    var comp = Math.floor(Math.random()*3)+1;
    if(comp == 1){
        comp = "rock";
    }
    else if(comp == 2){
        comp = "paper";
    }
    else{
        comp = "scissors";
    }
    
    document.getElementById("computerOutput").innerHTML=("The computer chose: " + comp);
    
    if(comp == user){
        document.getElementById("rpsOutput").innerHTML=("It's a tie!");
    }
    else if((user == "rock" && comp == "scissors") || (user == "paper" && comp == "rock") || (user == "scissors" && comp == "paper")){
        document.getElementById("rpsOutput").innerHTML=("You win!");        
    }
    else{
        document.getElementById("rpsOutput").innerHTML=("You lose!");
    }
}
