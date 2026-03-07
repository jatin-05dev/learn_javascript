// let first=parseInt(prompt("enter 1 st number"))
// let second=parseInt(prompt("enter 1 st number"))
function fibonacci() {
    let num = parseInt(prompt("enter a number"))
    let first = 0;
    let second = 1;
    for (let i = 0; i <= num; i++) {
        console.log(first)      
        let nxt = first + second
        first = second
        second=nxt
     
   

    }
}


function gcd() {
    let a = parseInt(prompt("enter a number"))
    let b = parseInt(prompt("enter a number"))
    let cnt = 0;
    if (a > b) {
        for (let i = 0; i <= b; i++) {
            if (a % i == 0 && b % i == 0) {
                cnt = i;
            }

        }
        alert(cnt);
    }

    if (a < b) {
        for (let i = 0; i <= a; i++) {
            if (a % i == 0 && b % i == 0) {
                cnt = i;
            }
        }
        alert(cnt);
    }

}
