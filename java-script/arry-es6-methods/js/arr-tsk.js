let fruits = ['Apple' , 'banana' , 'watermelone' , 'grape' , 'orange']

let blavalue = fruits.find(item => item.indexOf('n'  ) > -1)  // just !!first item with 'n'
//document.write(blavalue + "<br>")


let blavalue1 = fruits.filter(item => item.indexOf('n') > -1 ) // will show !!all items they have 'n'
//document.write(blavalue1 + "<br>")



let blavalue2 = fruits.find(item => item.indexOf('a') == 2)  //! agar dar sevomin khone az item a gharar dare
//document.write(blavalue2 + "<br>")

document.write("<br>")

for ( let element of fruits){               // will show itms(meghdarharo neshon mide)
    document.write(element + "<br>")
}


for ( let element in fruits){      // will show indexof (shomare khonasho neshon mide)
    document.write(element + "<br>")
}
document.write("<br>")
//==========================================================

for ( let ind in fruits){      //! i cann see both wie freits[i] == fruits[ind]
    document.write(ind + " : indexof :" + fruits[ind]+"<br>")    // shomare khone v meghdare dakhelesho neshon mide
}


document.write("<br>")