
ourSells = [
    {month : 1 , sells:50000},
    {month : 2 , sells:20000},
    {month : 3 , sells:5000},
    {month : 4 , sells:100000},
    {month : 5 , sells:120000},
    {month : 6 , sells:1000},
    {month : 7 , sells:75000},
    {month : 8 , sells:3000},
    {month : 9 , sells:50000},
    {month : 10 , sells:2000},
    {month : 11 , sells:60000},
    {month : 12 , sells:0}
]


//*-------------------
let chartCanvas = document.querySelector('#chartCanvas')
let ctx = chartCanvas.getContext('2d')
ctx.strokeStyle = 'black'
//actual x size 1 * 50
//actual y size 1 to 1000
let startY = 120 // first point  (big sells)  > height
let stepX = 50  //(space between) and first point (month)

ctx.moveTo(0 ,startY-(ourSells[0].sells / 1000) )   //!we make it (-) agar na mishe revers
// for ()  we have Arry 
for (let i = 1; i < ourSells.length ; i++) {
    let pointY = startY-(ourSells[i].sells / 1000)
    let pointX = i* stepX
    ctx.lineTo(pointX ,pointY )  
    ctx.fillText('mounth'+i , pointX , pointY +10)  // or statt pointy put startY   >/ +10 to see all number
}




ctx.stroke()

//ctx.moveTo(0,120)
/* ctx.fillText('ja' , 0 , 120)
ctx.fillText('fe' , 50 , 120)
ctx.fillText('ma' , 100 , 120) */