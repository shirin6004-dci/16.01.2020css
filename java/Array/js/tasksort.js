

  let x = [ 2,4,9,5,17,6,31,7,1]

function findsmallest(arr1) {
  
    let sor = [ ]
    let thesmalles = arr1[0]
    for (let i = 1; i < arr1.length; i++) {

        if (arr1[i] < thesmalles) {

            thesmalles = arr1[i]
            sor.push(thesmalles)
           x = arr1.slice(thesmalles)
            console.log(sor)  
            console.log(x)  
        }
        
    } 
}//document.write(findsmallest(x) + "<br>") 
  
findsmallest(x)


//===============================================



/*
let sortArray = (arr, n=arr.length) => {
    for(let i = 0; i < n -1; i++){
        if(arr[i] > arr[i +1]) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        }
    }
    return sortArray(arr, n-1)
}
console.log(sortArray([10,5,9,6]))
*/
/*
let numbers =[12,10,15,11,14,13,16];
function ordre(liste){
    var result=[];
    
    
    for(i=0; i<liste.length; i++){
    
    for(j=0; j<liste.length; j++){
            if(liste[i]>liste[j+1]){
    
            }
        }
    
     }
    
     console.log( result );
    }
    
    ordre(nombres);*/