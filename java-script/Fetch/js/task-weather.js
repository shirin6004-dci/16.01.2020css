async function getData(keyWord) {
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+keyWord+'&APPID=d05af9477b0f46101352d52dfb650f46')
    let data = await response.json()
    console.log(data)
    //console.log(data.weather[0])
}
getData(prompt('Weather'))