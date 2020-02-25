
let x = 0

setTimeout(() => {
    document.write("hi<br>")
    x = 5
    blacall(x)     // !  call function
}, 5000);   //secend


function blacall(t) {
  //  console.log(10 / t)
  document.write(10 / t)
}