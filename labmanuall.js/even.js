function findevenodd() {
    let counte = 0
    let ciunto = 0
    let arr = [1, 2, 3, 4, 5, 6, 7]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            counte++;
        }
        else {
            ciunto++;
        }
    }
    console.log("this is count of even",counte)
    console.log("this is count of odd",ciunto)

}

function vowel() {
    let str = "jatin"
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            console.log(str[i])
            cnt++;
        }
        if (str[i] == 'e') {
            console.log(str[i])
            cnt++;
        }
        if (str[i] == 'i') {
            console.log(str[i])
            cnt++;
        }
        if (str[i] == 'o') {
            console.log(str[i])
            cnt++;
        }
        if (str[i] == 'u') {
            console.log(str[i])
            cnt++;
        }

      
    }
    console.log("the count of vowel id",cnt)
}