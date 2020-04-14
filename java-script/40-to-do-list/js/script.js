let ol = document.querySelector('#list')
let input = document.querySelector('#todoInput')
let todoArr = []
let mejson = localStorage.getItem('ol') //!1 get localStorage

//let removeList = ()



document.querySelector('#todoBtn').addEventListener('click', function () {

    if (input.value.trim() != '') {
        let bt = document.createElement('button')
        bt.innerText = 'Done'
     
        let li = document.createElement('li')
        li.innerHTML = input.value
        li.append(bt)
        ol.append(li)
        //add the list to localstorage
        todoArr.push(input.value)
        console.log(todoArr)

        localStorage.setItem('ol', JSON.stringify(todoArr)) //set arr inside storage(no getItem weil we have Arr)  .setItem('key' , value)

    } else {
        alert('empty')
    }

    input.value = '' //! clear input after adding last item 

})


if (mejson != null) {
    let meobj = this.JSON.parse(mejson)
    meobj.forEach(element => {

        todoArr.push(element)
        let bt2 = document.createElement('button')
        bt2.innerText = 'Done'
    
        let li2 = document.createElement('li')
        li2.innerHTML = element
        li2.append(bt2)
        ol.append(li2)
        bt2.onclick = function(){
            localStorage.removeItem("li2");
        }
        // remove 
        bt2.addEventListener('click' , ()=>{
           // li2.style.display = 'none'
           li2.remove()
        })
    });


}





//render todolist 