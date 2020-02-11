let num1 = 2.6
let rounded = Math.round(num1) // round number
console.log(rounded)


console.log(Math.PI) // 3.14   adade pi

let num2 = Math.sqrt(9) // jazr
console.log(num2)


console.log(Math.random()) // random nummer barmidare



function random1() {  // random adad barmidarre behet peygham mide

    let x = Math.round((4 * Math.random()))
    switch (x) {
        case 0:
            return "toll"
        case 1:
            return "i am one"
        case 2:
            return "i am two"
        case 3:
            return " i am tree"
        case 4:
            return "i am vier"

        default:
            return "ERROR"
            break;
    }

}
console.log(random1())