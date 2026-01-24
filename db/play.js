document.getElementById("pl1").addEventListener("click", play1Start);
document.getElementById("pl2").addEventListener("click", play2Start);

let lft = 195;
let play1Int;

function kickPlay1(){
    lft = lft + 5;
    let ballObj = document.getElementById("ball");
    ballObj.style.left = lft + "px";

    if (lft >= 1295){
        clearInterval(play1Int);
    }
}

function play1Start(){
    play1Int = setInterval(kickPlay1, 1000);
}

let play2Int;

function kickPlay2(){
    lft = lft - 5;
    let ballObj = document.getElementById("ball");
    ballObj.style.left = lft + "px";

    if (lft < 1295){
        clearInterval(play2Int);
    }
}

function play2Start(){
    play2Int = setInterval(kickPlay2, 10);
}