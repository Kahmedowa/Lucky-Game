let stand = 100;

document.querySelector("#stand").innerHTML = stand + "€";

function run(){
    const nummer = Math.round(Math.random() * 4 + 1);
    document.querySelector("#nummer").innerHTML = nummer;

    if (nummer == 5){
        stand += 4;
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