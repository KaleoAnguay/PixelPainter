var pixModule = (function() {


var pixgrid = document.querySelector('#pixelPainter');
var paint = 'transparent';
var whiteBox = document.createElement('div');
var module = {};



module.intGrid = function() {
  //White buttons
  whiteBox.id = 'Whitebox';
  whiteBox.style.width = '650px';
  whiteBox.style.height = '500px';
  pixgrid.appendChild(whiteBox);

  //Color buttons
  var colorAll = document.createElement('div');
    colorAll.id = 'All';
    colorAll.style.width = '500px';
    colorAll.style.height = '500px';
    pixgrid.appendChild(colorAll);


//for Special buttons
var randomButt = 2;

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
      for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
  }
    return color;
}

  for(var i = 0; i<randomButt; i++) {
    var instColor = document.createElement('button');
      instColor.id = 'instant' + i;
      instColor.style.width = '100px';
      instColor.style.height = '50px';
      instColor.addEventListener('click', function(event) {

  });
    colorAll.appendChild(instColor);
}
    instant0.innerHTML = "Color All";
    instant0.style.background = "white";
    instant1.innerHTML = "Random Color";

    instant0.addEventListener('click', function(event){
    var everything = whiteBox.querySelectorAll('button');
      for(i = 0; i<everything.length; i++){
        everything[i].style.background = paint;
      }

    });

    instant1.addEventListener('click', function(event){
      instant1.style.background = getRandomColor();
        paint = instant1.style.background;

});
//for inital white box
var buttnum = 520;
var isMouseDown = false;

  for(var i = 0; i < buttnum; i++) {
  var button = document.createElement('button');
    button.id = i;
    button.style.background = "transparent";
    button.style.width = '25px';
    button.style.height = '25px';
    button.style.cursor = 'crosshair';
    button.addEventListener("mousedown", function(event){
      isMouseDown = true;

  }, false);

    button.addEventListener("mousemove", function(event){
      if(isMouseDown === true) {
        event.target.style.background = paint;
    }
  }, false);

    button.addEventListener("mouseup", function(event){
      isMouseDown = false;
  }, false);

    whiteBox.appendChild(button);

    }

};

module.colorGrid = function() {

// // the color buttons for the painter
  var colorButtons = document.createElement('div');
    colorButtons.id = 'color';
    colorButtons.style.width = '50px';
    colorButtons.style.height = '50px';
      pixgrid.appendChild(colorButtons);

  var colorbutt = 20;

//Color Wheel array to iterate through.
  var colorsOfTheRainbow = ["Red", "Green", "Blue", "Yellow", "Black", "Teal", "Purple", "Pink", "Orange", "Grey", "transparent", "White","gold","silver","tomato","salmon","sandybrown","Magenta","wheat","" ];

//creating color buttons
    for(var i = 0; i <colorbutt; i++) {
      var buttoncolor = document.createElement('button');
      buttoncolor.id =  colorsOfTheRainbow[i];
      buttoncolor.style.background = colorsOfTheRainbow[i];
      buttoncolor.style.width  = '50px';
      buttoncolor.style.height = '50px';
      buttoncolor.style.cursor = 'crosshair';
      buttoncolor.addEventListener('click', function(event) {
        paint = event.target.id;
    });
        colorButtons.appendChild(buttoncolor);
  }
};




  return module;
});
var pix = pixModule();
console.log(pix.intGrid());
console.log(pix.colorGrid());
