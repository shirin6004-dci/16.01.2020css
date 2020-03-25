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
//14 (disabled) button if its page shown
//15 creat element link
//16 creat color list  (https://pixabay.com/api/docs/)
//17 to getcolor (to use it)
//18 creat orientation list
//19 category list
//21. height
function appInit(containId) {

    let appContainer = document.querySelector('#'+containId) //?1. 1 id adresse
    appContainer.classList.add('container') //? .5

    let div2 = document.createElement('div') //?2. 1creat div
    appContainer.append(div2) //container
    // console.log(appContainer)
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
        let color = document.createElement('select') //16. colorlist musst be immer inside select > option
        let coloroption1 = document.createElement('option') //16. put clolor list inside options
        coloroption1.value = ""
        coloroption1.innerText = "choose color"
        color.append(coloroption1) //  add option inside list element 16.
        div2.append(color)
        //creat options arry
        let arrOption = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"]
        arrOption.forEach(element => {
            let coloroption1 = document.createElement('option') //! use OPTION for color
            coloroption1.value = element
            coloroption1.innerText = element
            color.append(coloroption1) //  add option inside list element            
        });
        div2.append(color)


        let orientation = document.createElement('select') //* orientation list
        let orientationoptions = document.createElement('option')
        orientationoptions.value = ''
        orientationoptions.innerText = 'orientation'
        orientation.append(orientationoptions)
        div2.append(orientation)
        let arrOrintion = ["all", "horizontal", "vertical"]
        arrOrintion.forEach(element => {
            let orientationoptions = document.createElement('option')
            orientationoptions.value = element
            orientationoptions.innerText = element
            orientation.append(orientationoptions)
        });
        div2.append(orientation)



        let category = document.createElement('select')
        let categoryOption = document.createElement('option')
        categoryOption.value = ''
        categoryOption.innerText = 'category'
        category.append(categoryOption)
        div2.append(category)
        let arrCaterory = ['backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', ' people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music']
        arrCaterory.forEach(element => {
            let categoryOption = document.createElement('option')
            categoryOption.value = element
            categoryOption.innerText = element
            category.append(categoryOption)
        });
        div2.append(category)



        let min_height = document.createElement('input') //21.
        min_height.type = 'number'
        min_height.min = '0' //21.
        min_height.placeholder = 'min_height'
        div2.append(min_height)


        let min_width = document.createElement('input') //21.
        min_width.type = 'number'
        min_width.min = '0' //21.
        min_width.placeholder = 'min_width'
        div2.append(min_width)

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

            } */ //  + pageNumber = 1
            getData(input1.value, div3, pagingdiv, 1, color, orientation, category, min_height, min_width) //!11. (input1.value)         //?10.  2      //!12.  4(div3)      //16 & 17.1 color (to use)
        })
    } else {
        console.log('element with Id "' + containId + ' "could not be found') //container not exist 
    }
}

//*   ========appInit('container')

async function getData(keyword, imagesContainer, pagingContainer, pageNumber, colorElement, orientationelement, categoryElement, heightElement, widthElement) { //? 10.    1      //17.1
    //console.log(colorElement) 
    //console.log(colorElement.options[1])  17.3
    //console.log(colorElement.selectedIndex)   17.3
    //console.log(colorElement.options[colorElement.selectedIndex])  17.3
    let selectedcolor = colorElement.options[colorElement.selectedIndex].value //*get selected color     //17.3
    let colorsparameters = '' //17.2
    if (selectedcolor) { //if there is element with selecte element        //17.3
        colorsparameters = '&colors=' + selectedcolor //17.2
    }

    let selectOrientation = orientationelement.options[orientationelement.selectedIndex].value //*get selected orientation  //18.3   //17.3
    let orientationparameters = '' //18.2
    if (selectOrientation) { //if there is orientationfor that element        //18.3
        orientationparameters = '&orientation=' + selectOrientation //18.2
    }


    let selectCategory = categoryElement.options[categoryElement.selectedIndex].value //19.
    let categoryParameters = ''
    if (selectCategory) {
        categoryParameters = '&category=' + selectCategory
    }


    let heightparamerts = '' //21.
    if (heightElement.value.trim()) {
        heightparamerts = '&min_height=' + heightElement.value.trim() + 'px'
    }

    let widthparamerts = '' //21.
    if (widthElement.value.trim()) {
        widthparamerts = '&min_width=' + widthElement.value.trim() + 'px'
    }


    imagesContainer.innerHTML = ''
    let respo1 = await fetch('https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=' + keyword + '&page=' + pageNumber + colorsparameters + orientationparameters + categoryParameters + heightparamerts + widthparamerts) //?17.2
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

            if (pageNumber == i + 1) { //!14 (disabled) button if its page shown
                button2.disabled = true
            }
            //ADD event for page button
            button2.addEventListener('click', function (e) { //!20 click an button after search
                getData(keyword, imagesContainer, pagingContainer, i + 1, colorElement, orientationelement, categoryElement, heightElement, widthElement) //!20 call function here > next page   ( i+1)to show first page b.w(i=0)       //17.1
            })

        }

        data.hits.forEach(element => { //! 12.  1

            let a = document.createElement('a') // 15.creat link 
            a.setAttribute('target', '_blank') //15.
            a.href = element.largeImageURL //15.


            let img = document.createElement('img') //!12.  2
            img.setAttribute('src', element.previewURL) //!12.  3         
            a.append(img)
            imagesContainer.append(a)

        });
    }



}




let Fbw5Search = {
    go: function (elementId) {
        appInit(elementId)
    }
}