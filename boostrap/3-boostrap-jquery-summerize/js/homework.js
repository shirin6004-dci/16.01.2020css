let arr = [
    [2, 5, 8],
    [5, 9, 2],
    [7, 2, 3],
    [4, 9, 6]
]
// 2^(x*y) = 16
var arrRevers = []
let col = 0;
let counter = 0;
for(let j = 0; j< arr.length;j++){
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr[i].length; x++) {
                counter ++
                if (x == col) {
                   temp.push(arr[i][x]) 
                }
        }
    }
        col ++
        if(temp.length>0)
        arrRevers.push(temp)
}



console.log(arrRevers);
console.log(counter)


function fill(array, col ){
    let pack = [];
    for(i = 0; i< array.length; i++){
        for(j = 0; j< array[i].length; j++){
            if(j == col)
            pack.p
        }

    }


}

