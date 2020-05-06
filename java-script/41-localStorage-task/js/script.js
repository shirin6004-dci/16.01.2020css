//* students management
let studentName = document.querySelector('#studentNameinp')
let select = document.querySelector('#kursesList')
let ul = document.querySelector('#ul')
let gradeInp = document.querySelector('#studentGradeinp')
let studentarr = [] //!  students Name 
let gradesArr = [] //!  add Grade OBJ
let body = document.querySelector('body')
document.querySelector('#add').addEventListener('click', function () {

    let selectedkurs = kursesList.options[kursesList.selectedIndex].value //!get data  bla.options[bla.selectedIndex]
    //console.log(kursesList.options)
    let grade = studentGradeinp.value

    if (selectedkurs != '' && grade.trim() != '') {
        var li = document.createElement('li')
        li.innerText = selectedkurs + ':' + grade
        ul.append(li)
        let obj = {} //! every time make new opject 
        /*    if (selectedkurs == 'math') {     1   hard way
               obj.math = grade
           }
           if (selectedkurs == 'English') {
               obj.English = grade
           }
           .
           .    
           .
           */

        obj[selectedkurs.replace(/ /g, '_')] = grade //!1  easy   // replace('', '_') > to kill space
        gradesArr.push(obj) //! push jede opj inside arr
        console.log('obj', obj)
    }
})

//let somthing = [{'name':'shirin' , 'grades':[{'math' : 90 , 'english' : 90 }]}]
function calllocalStorage() {
    

 document.querySelector('#save').addEventListener('click', function () {
    if (studentName.value.trim() != '') {
        let student = {
            name: studentName.value,
            grades: gradesArr
        }
        studentarr.push(student)
        localStorage.setItem('user', JSON.stringify(studentarr))
        console.log('studentArr', studentarr);
        callback(studentarr)
    }
    //gradesArr = []
   // ul.innerHTML = ''
    studentName.value = ''
    studentGradeinp.value = ''
})

}
calllocalStorage()


// to bring data from local storage--------------------------------

let div = document.querySelector('#div')
body.append(div)
let mejson = localStorage.getItem('user') //!1 get localStorage
console.log('mejson', mejson);
if (mejson != null) {
    let meobject = this.JSON.parse(mejson)
    //  console.log( 'meobject', meobject)

    function callback(x) {
        x.forEach(element => {
      studentarr.push(element)  //! put firs element in student arr 
            let h2 = document.createElement('h2')
            h2.innerText = element.name
            // console.log(h2.innerText)
            div.append(h2)
            let ul1 = document.createElement('ul')
            div.append(ul1)
            element.grades.forEach(grad => {
                /// console.log(Object.keys(grade)[0])   //! IMPORTANT***************************
                // console.log(Object.values(grade)[0]) //! IMPORTANT***************************
                Object.keys(grad).forEach(key => {
                    let li1 = document.createElement('li')
                    console.log(key);
                    console.log(grad[key]);
                    li1.innerText = key + ':' + grad[key] + '%'
                    ul1.append(li1)
                })
            })

        });
    }
    callback(meobject)
}

console.log(localStorage)


//? 1-show all student   and its grades at the end of page       local storage shouldent be delet ()
//? load students from the local storage and show in html


