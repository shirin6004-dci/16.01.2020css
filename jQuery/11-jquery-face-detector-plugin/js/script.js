$(document).ready(function () {
    $('#picture').faceDetection({
        complete: function (faces) {
            console.log(faces);
           // console.log(Arry.isArry(faces));  // show it is a arry

          for (let i = 0; i < faces.length; i++) {
              const face = faces[i];

             let frameString = `<div class="frame" style ='
             left :${face.x}px;
             top:${face.y}px;
             width:${face.width}px;
             height:${face.height}px;
             '  ></div>`

             $('body').append($(frameString))
          }

          
        }
    });
});