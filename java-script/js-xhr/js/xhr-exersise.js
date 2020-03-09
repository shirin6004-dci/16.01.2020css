var appkey="12000491-41fc68d8c365df909e022ceb6";
function getData(key,keyWord,category,language,orientation,minHeight,minWidth,color,safe,orderType,page,perPage){
let url="https://pixabay.com/api/?key="+key+"&q="+keyWord+"&image_type=photo&category="+category+"&pretty=true"+(language!=""?"&lang="+language:"")+(orientation!=""?"&orientation="+orientation:"")+(language!=""?"&lang="+language:"")+(minHeight!=""?"&min_height="+minHeight:"")+(minWidth!=""?"&min_width="+minWidth:"")+(color!=""?"&colors="+color:"")+(safe!=""?"&safesearch="+safe:"")+(orderType!=""?"&order="+orderType:"")+(page!=""?"&page="+page:"")+(perPage!=""?"&per_page="+perPage:"");


    let xhr = new XMLHttpRequest() 
    xhr.open('GET', url)
    xhr.send()  
    xhr.onload = function () {      

        if (xhr.status == 200) {
            let findimg = JSON.parse(xhr.response)
           console.log(findimg)
           
           let showinHtext = ' '
           findimg.hits.forEach(item => { 
        
            showinHtext += `<a href=" ${item.pageURL}" target="_blank"> <img src="${item.largeImageURL}" height = 100px > </a>` 
        });         
        document.write(showinHtext) 
        document.close() 


        }else{
            console.log(xhr.status)
        }

    }
}
getData(appkey, prompt('enter : '))