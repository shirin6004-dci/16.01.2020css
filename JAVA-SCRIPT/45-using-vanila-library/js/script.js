// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 500,
    height: 500
  });
  
  // then create layer
  var layer = new Konva.Layer();
  
  // create our shape
  var circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 70,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true
  });
  
  // add the shape to the layer
  layer.add(circle);
  
  // add the layer to the stage
  stage.add(layer);
  
  // draw the image
  layer.draw();


 /*  function render(a) {     //? animaition
    // Clear the scene
    ctx.clearRect(0, 0, width, height);  //!noghteha safharo rangi mikonan
    
    // Increase the globe rotation
    rotation = a * 0.0004;      //!sorate charchesh
    
    const sineRotation = Math.sin(rotation); // Sine of the rotation
    const cosineRotation = Math.cos(rotation); // Cosine of the rotation
    
    // Loop through the dots array and draw every dot
    for (var i = 0; i < dots.length; i++) {
      dots[i].draw(sineRotation, cosineRotation);
    }
    
    window.requestAnimationFrame(render);
  }
   */