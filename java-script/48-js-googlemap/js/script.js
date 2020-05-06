
var map;
var contentString = ''
function initMap() {

  //! first set map 
  map = new google.maps.Map(document.getElementById('map-div'), {
    center: {lat: 53.550270, lng: 10.025270},
    zoom: 15 , // 0-20
    maxZoom:15,
    disableDefaultUI:true // see just map

  });

  var image = {
    url: '../imags/marker.gif',
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(50, 100),
      scaledSize: new google.maps.Size(100, 100)
  };

//! second set options for map
var marker = new google.maps.Marker({
  position :{lat: 53.550270, lng: 10.025270},
  map:map , 
  title:'DCI',
  icon : image,
  draggable : true,
  //animation:google.maps.Animation.BOUNCE,  //.DROP
  //label : 'DCI' , 

})

//set img wenn mouseover
var infowindow = new google.maps.InfoWindow({
  content : document.querySelector('#windowContainer').innerHTML
})
marker.addListener('mouseover' , ()=>{
  infowindow.open(map,marker)
})

}

//wenn open the window should be zoom an our adress

