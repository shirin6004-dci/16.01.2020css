

async function getData() {    

    let respo1 = await fetch('http://api.openweathermap.org/data/3.0/stations')      // return promis
    let dat1 = await respo1.json()       //! convert to object == if writr .text() convert to text
    // here i can print them 
    console.log(dat1)

}
getData(prompt)