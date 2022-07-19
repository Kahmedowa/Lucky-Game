let stand = 100;

document.querySelector("#stand").innerHTML = stand + "€";

function run(){
    const nummer = Math.round(Math.random() * 5 + 1);
 

    console.log(nummer);


    switch(nummer){
        case 1: document.querySelector("#wurffel").classList = "fa-solid fa-dice-one"; break;
        case 2: document.querySelector("#wurffel").classList = "fa-solid fa-dice-two"; break;
        case 3: document.querySelector("#wurffel").classList = "fa-solid fa-dice-three"; break;
        case 4: document.querySelector("#wurffel").classList = "fa-solid fa-dice-four"; break;
        case 5: document.querySelector("#wurffel").classList = "fa-solid fa-dice-five"; break;
        case 6: document.querySelector("#wurffel").classList = "fa-solid fa-dice-six fa-2x wurffel gewinn";
    }

    
    if (nummer == 6){
        stand += 5;

        document.querySelector("#stand").classList = "stand gruen";  
        delay(1000).then(() => document.querySelector("#stand").classList = "")

    } else {
        stand -= 1;

        document.querySelector("#stand").classList = "stand reed";
        delay(1000).then(() => document.querySelector("#stand").classList = "");
    };



  
    document.querySelector("#stand").innerHTML = stand + "€";

    /*if (stand >= 70){
        document.getElementById("stand").style.color = "green";
        document.getElementById("comment").style.color = "green";
    }
    if (stand >= 69){
        document.getElementById("stand").style.color = "yellow";
        document.getElementById("comment").style.color = "yellow";
    }
    if (stand >= 59){
        document.getElementById("stand").style.color = "orange";
        document.getElementById("comment").style.color = "orange";
    }
    if (stand >= 49){
        document.getElementById("stand").style.color = "red";
        document.getElementById("comment").style.color = "red";
    }*/
};

function reset(){
   stand = 100;
   document.querySelector("#stand").innerHTML = stand + "€";
};
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }