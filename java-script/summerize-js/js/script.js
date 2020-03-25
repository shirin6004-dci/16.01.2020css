//1 write javascript function that will recive div'container' id as a parameter and 
//1creat inside this div a text input
//2 creat div change your previuos function to add input inside a div and this div suppose to be in the container
//3 creat button inside div2
//4 add a div inside idcontainer
//5 set class for idcontainer   and for div2
//6  put img 20time
//7 set class for div3
//8 show imgs wenn i click
//9  no reapet img 
//10 to log the result from Api (fetch)  https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=lion
//11  keyword
//12 show imeges at html
//13 button after search





function appInit(containId) {

    let appContainer = document.querySelector('#container') //?1. 1 id adresse
    appContainer.classList.add('container') //? .5

    let div2 = document.createElement('div') //?2. 1creat div
    appContainer.append(div2) //container
    console.log(appContainer)
    div2.classList.add('controls-container') //? 5.


    let div3 = document.createElement('div') //?4.   1add div inside idcontainer
    appContainer.append(div3)
    div3.classList.add('img-container') //?7
    /*     for (let i = 0; i < 20; i++) {                          //?6.
            let img = document.createElement('img')                 
            img.src = './img/dummy.png'
            console.log(img)
            div3.append(img)
        } */


    if (appContainer) { //CHECK IF THIS ELEMENT exist
        let input1 = document.createElement('input') //?1.  2creat input
        input1.type = 'text'
        div2.append(input1) //?1. 3 put input inside id
        // console.log(div2)


        let button = document.createElement('button') //?3. 1creat button
        button.innerText = 'search'
        div2.append(button)

        let pagingdiv = document.createElement('div') //div after search
        div2.append(pagingdiv)


        button.addEventListener('click', function (e) { //?8.   
            //div3.innerHTML = '' //?9
            /* for (let i = 0; i < 20; i++) { //?6.   
                let img = document.createElement('img')
                img.src = './img/dummy.png'              
                div3.append(img)

            } */                          //  + pageNumber = 1
            getData(input1.value, div3, pagingdiv, 1) //!11. (input1.value)            //?10.  2        //!12.  4(div3)
        })

    } else {

        console.log('element with Id "' + containId + ' "could not be found') //container not exist 
    }

}

appInit('container')

async function getData(keyword, imagesContainer, pagingContainer, pageNumber) { //? 10.    1
    imagesContainer.innerHTML = ''
    let respo1 = await fetch('https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=' + keyword + '&page=' + pageNumber)
    if (respo1.status == 200) {
        let data = await respo1.json() //! convert to object
        console.log(data)


        let num = data.totalHits / 20 //*how many pages hits(20)
        console.log(Math.ceil(num)); //* round up
        let btnNumbers = Math.ceil(num)
        pagingContainer.innerHTML = '' // no reapet the number
        for (let i = 0; i < btnNumbers; i++) { //?13 show how many pages wie have
            let button2 = document.createElement('button')
            button2.innerText = i + 1
            pagingContainer.append(button2)
            //ADD event for page button
            button2.addEventListener('click', function (e) { //!20 click an button after search
                getData(keyword, imagesContainer, pagingContainer, i + 1) //!20 call function here > next page   ( i+1)to show first page b.w(i=0)
            })

        }

        data.hits.forEach(element => { //! 12.  1
            let img = document.createElement('img') //!12.  2
            img.setAttribute('src', element.previewURL) //!12.  3         
            imagesContainer.append(img)
        });
    }



}