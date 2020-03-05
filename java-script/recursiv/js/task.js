let arr = [6, 9, 3, [10, 50, [6, 3, 9, 4], 60], 5, 4]
let sum = 0

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object") {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] == "object") {
                for (let k = 0; k < arr[i][j].length; k++) {
                    sum += arr[i][j][k]
                }

            } else {
                sum += arr[i][j]
            }
        }

    } else {
        sum += arr[i]
    }
}
//console.log(sum)




function fsum(arr) {
    let storage = 0
    for (let x = 0; x < arr.length; x++) { //!1
        if (typeof arr[x] == "number") { //!2
            storage += arr[x] //!3
        } else if (typeof arr[x] == "object") {
            storage += fsum(arr[x]) //!4
        }
    }


    return storage //!5
}
//console.log(fsum(arr))


//*=======================Exersice========================
function f1(num) {
    if(num < 0){
        return num + f1(num+1)
    }
   else if (num == 0) {
        return num
    } else {
        return f1(num - 1) + num

    }

}
console.log(f1(-10))