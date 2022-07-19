let stand = 100;

document.querySelector("#stand").innerHTML = stand + "€";

function run(){
    const nummer = Math.round(Math.random() * 5 + 1);


    document.querySelector("#nummer").innerHTML = nummer;

    if (nummer == 6){
        stand += 5;
    } else {
        stand -= 1;
    };

  
    document.querySelector("#stand").innerHTML = stand + "€";

    if (stand >= 60){
        document.getElementById("stand").style.color = "green";
        document.getElementById("comment").style.color = "green";
    }
    if (stand < 59){
        document.getElementById("stand").style.color = "red";
        document.getElementById("comment").style.color = "red";
    }
};

function reset(){
   stand = 100;
   document.querySelector("#stand").innerHTML = stand + "€";
};