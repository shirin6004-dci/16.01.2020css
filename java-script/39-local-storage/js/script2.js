//* last browsing Date time
let lastBrowserDate = localStorage.getItem('browserDate')
console.log(lastBrowserDate);  //null
if(lastBrowserDate){ // call it in (index)
    document.querySelector('#browserDateElement').innerText = lastBrowserDate
}
