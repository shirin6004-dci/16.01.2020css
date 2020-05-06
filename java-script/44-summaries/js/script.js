
//? ----------var------task 1
/* var x = 5
{
    let d = 3
    console.log(x);
    
}
console.log(d) */
//*1 answer > it will print 5 and error(d)


//? ---------------let-----task 2
/* let x = 5
{
    var d = 3
    console.log(x);
    
}
console.log(d) */
//*2 answer > it will print both



//?---------------const----- task 3
/* const i = 6
console.log(i)

i=2
console.log(i) */
//*3 answer > it will print 6 / *const (unchangebale)


//?-------------arr------- task 4
/* const arr = [1,3,6]
console.log(arr[2])

arr[2] = 8
console.log(arr[2]) */
//*4 answer > it will print 6 / 8 / *const (changebale)


//?---------------let ----- task 5
/* let c = 3
let y = c
y = 7 
console.log(c)
console.log(y)
 */
//*5 answer > it will print 3-7 / 


//?-------------obj------- task 6
/* let obj = {
    prob1:2,
    prob2:'dummy' ,
    prob3:true
}
obj.prob2 = 'hello'
console.log(obj.prob1);
console.log(obj.prob2); */
//*6 answer > it will print 2-hello / 


//?-------------obj------- task 7
/* let obj = {
    prob1:2,
    prob2:'dummy' ,
    prob3:true
}
let obj2 = obj
obj2.prob1 = 6
console.log(obj2.prob1);
console.log(obj.prob1); */
//*7 answer > it will print 6-6 / obj will be replace


//?------write the shortest code to print items in the following arry wich are graiter or equal  6-------------- task 8

let arr = [2,6,7,9,2,6,-9,12,66,-6]
/* let storage = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >=6 ) {   
        if(storage.indexOf(arr[i]) === -1) {
             storage.push( arr[i])  
        }                                           
    }   
} 
   console.log(storage) 
 */
//*   easy way or    ------filter----------
/*    let result = arr.filter(element =>  element >= 6)
   console.log(result);
    */


//? -----use last arry---print a new arr wich contain the items from multiable with 2-----------task9   

/*  let storage = []

arr.forEach(element => {
   storage.push(element*2) 
});
console.log(storage) 
//*   easy way or    ------map----------
console.log(arr.map(item => item*2));
 */


//? ------- task 10 -- combine task 8 and 9

/* let storage = []
arr.filter(element =>{
    if (element >=6) {
        storage.push(element*2)
    }
    
})
console.log(storage);
 */

//?-------------task 11 

