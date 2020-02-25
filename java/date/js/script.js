let x = new Date()

document.write(typeof(x) + "<br>")

document.write(x + "<br>")

let y = new Date(1989 , 5 , 27 )
//let z = new Date("1989 , 5 , 27" )

document.write(y + "<br>")

document.write(y.getFullYear() + "<br>")


document.write(y.getDay() + "<br>")   

document.write(Date.now() + "<br>")  // date for 1970 bis yet
//======================================================
let date1 = new Date("01.01.2018")
document.write(date1 + "<br>")



let date2 = new Date("01.02 . 2018")
document.write(date2 + "<br>")

document.write((date2-date1)/1000/60/60/24 + "<br>")   // different between 2date
//=========================================================

let shirin = new Date("06-27-1989 12:20:28 ")
document.write(shirin + "<br>")

let yet = Date.now()

document.write((yet - shirin)/1000/60/60/24/365 + "<br>")