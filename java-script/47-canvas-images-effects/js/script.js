//?1
//drow the dices img inside the convas
//?2 
//grayscale img
//?3 
//click than change the color
//? 4
// originBtn
//?5 
//invers COLOR
//?6
//remove red Color
//?7
//Green muss be gray
//?8 brightness



let canvas = document.querySelector('#canv')
let ctx = canvas.getContext('2d')
let img = document.createElement('img')
img.src = './imgs/1.png' //tranlates 
//img.style.filter = 'grayscale(100%)'
ctx.drawImage(img, 0, 0, 500, 500); // origin foto



let grascaleBtn = document.querySelector('#grascale') //!3.1
let orginalBtn = document.querySelector('#orginal') //!4.1
let invertBtn = document.querySelector('#invert') //!5.1
let removeRedBtn = document.querySelector('#removeRed') //!6.1
let greenToGray = document.querySelector('#greenToGray') //!7.1
let effect1Btn = document.querySelector('#effect1')
let effect2Btn = document.querySelector('#effect2')
let input = document.querySelector('#saturationSlider')


img.addEventListener('load', () => { //!1  load img
    ctx.drawImage(img, 0, 0, 500, 500);
    //!2.1 getting img data
    const imageData = ctx.getImageData(0, 0, 500, 500); //is a arry in each pixel we have 4color 
    console.log(imageData);


    function grascaleColor() {
        //! 2.2 for each pixel we need a for loop 
        for (let i = 0; i < imageData.data.length; i += 4) { //must be let
            let avg = ((imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3) //! 2.4
            imageData.data[i] = avg // red   firstcolor
            imageData.data[i + 1] = avg // green        secendcolor
            imageData.data[i + 2] = avg // blue             third color  
            //  imageData.data[i + 3] = 50  // forth is trasparancy   
        }
        ctx.clearRect(0, 0, 500, 500) //clear last foto first (befor drowing again delet last one)   2.3
        ctx.putImageData(imageData, 0, 0); //!2.3
    }

    grascaleBtn.addEventListener('click', () => { //!3.2
        grascaleColor()
    })

    orginalBtn.addEventListener('click', () => { //!4.2  
        ctx.clearRect(0, 0, 500, 500) //clear last foto first    
        ctx.drawImage(img, 0, 0, 500, 500);
    })



    function inversColor() { //!5.2
        for (let i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] = 255 - imageData.data[i]; // red
            imageData.data[i + 1] = 255 - imageData.data[i + 1]; // green
            imageData.data[i + 2] = 255 - imageData.data[i + 2]; // blue
        }
        ctx.clearRect(0, 0, 500, 500)
        ctx.putImageData(imageData, 0, 0); //!5.3
    }
    invertBtn.addEventListener('click', () => { //!5.4       
        inversColor()
    })


    function removeRedColor() { //!6.2  
        for (let i = 0; i < imageData.data.length; i += 4) {
            if (imageData.data[i] > imageData.data[i + 1] && imageData.data[i] > imageData.data[i + 2]) { //bigste(data(pixel)) is red
                imageData.data[i + 3] = 0
                //imageData.data[i] =0        
            }
        }
        ctx.clearRect(0, 0, 500, 500)
        ctx.putImageData(imageData, 0, 0); //!6.3  it muss be
    }
    removeRedBtn.addEventListener('click', () => { //!6.4
        removeRedColor()

    })


    function greenToGrayColor() { //!7.2
        for (let i = 0; i < imageData.data.length; i += 4) {
            if (imageData.data[i + 1] - 5 > imageData.data[i] && imageData.data[i + 1] - 5 > imageData.data[i + 2]) {
                let avg = ((imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3) //!7.3
                imageData.data[i] = avg // red   
                imageData.data[i + 1] = avg // green      
                imageData.data[i + 2] = avg // blue                   
            }
        }
        ctx.clearRect(0, 0, 500, 500)
        ctx.putImageData(imageData, 0, 0); //!7.4
    }
    greenToGray.addEventListener('click', () => { //!7.5
        greenToGrayColor()
    })



})



//!-------------img2

let img2 = document.createElement('img')
img2.src = './imgs/2.png'

ctx.drawImage(img2, 0, 0, 500, 500); // origin foto

img2.addEventListener('load', () => { //load img2
    effect1Btn.addEventListener('click', () => {
        ctx.drawImage(img2, 0, 0, 500, 500);
    })
})

//!----------------------------img 11
let img11 = document.createElement('img')
img11.src = './imgs/11.png'

ctx.drawImage(img11, 0, 0, 500, 500); // origin foto

img11.addEventListener('load', () => { //load img2
    effect2Btn.addEventListener('click', () => {
        ctx.drawImage(img11, 0, 0, 500, 500);
    })
})


//!8------------------brightness imgs
input.addEventListener('change', () => {
    let inputValue = input.value
    console.log(inputValue);
    let imageData = ctx.getImageData(0, 0, 500, 500);
    for (let i = 0; i < imageData.data.length; i += 4) {
        if ( imageData.data[i] + eval(inputValue) > 255) {
            imageData.data[i] = 255

        } else {
            imageData.data[i] = imageData.data[i] + eval(inputValue) // red   
        }
        if (imageData.data[i + 1]+ eval(inputValue) > 255) {
            imageData.data[i + 1] = 255

        } else {
            imageData.data[i + 1] = imageData.data[i + 1] + eval(inputValue) // green  
        }
        if (imageData.data[i + 2] + eval(inputValue) > 255) {
            imageData.data[i + 2] = 255

        } else {
            imageData.data[i + 2] = imageData.data[i + 2] + eval(inputValue) // blue 
        }

    }
    ctx.clearRect(0, 0, 500, 500)
    ctx.putImageData(imageData, 0, 0)
    inputValue.value = 0
})