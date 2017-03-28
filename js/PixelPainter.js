var pixModule = (function() {


  var pixgrid = document.querySelector('#pixelPainter');
  var transparentBox = document.createElement('div');
  var colorButtons = document.createElement('div');
  var colorAll = document.createElement('div');
  var paint = 'transparent';
  var module = {};

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
      for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
  }


  module.intGrid = function() {
    //transparent buttons
    transparentBox.id = 'transparentBox';
    transparentBox.style.width = '650px';
    transparentBox.style.height = '500px';
    pixgrid.appendChild(transparentBox);

    //Color buttons
    colorAll.id = 'All';
    colorAll.style.width = '500px';
    colorAll.style.height = '500px';
    pixgrid.appendChild(colorAll);


    // the color buttons for the painter
    colorButtons.id = 'color';
    colorButtons.style.width = '50px';
    colorButtons.style.height = '50px';
    pixgrid.appendChild(colorButtons);

  };

  module.gridButtons = function() {

    //for inital transparent box
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

      transparentBox.appendChild(button);

    }

  };
  module.colorGrid = function() {
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

  module.randomButtons = function(){

    //for Special buttons
    var randomButt = 2;

    for(var i = 0; i<randomButt; i++) {
      var instColor = document.createElement('button');
        instColor.id = 'instant' + i;
        instColor.style.width = '100px';
        instColor.style.height = '50px';
        colorAll.appendChild(instColor);
    }
    instant0.innerHTML = "Color All";
    instant0.style.background = "white";
    instant1.innerHTML = "Random Color";
    //Append function for color all button.
    instant0.addEventListener('click', function(event){
    var everything = transparentBox.querySelectorAll('button');
      for(i = 0; i<everything.length; i++){
        everything[i].style.background = paint;
      }
    });
    //Append function for Random Color button.
    instant1.addEventListener('click', function(event){
      instant1.style.background = getRandomColor();
        paint = instant1.style.background;
    });
  };
  return module;
});
var pix = pixModule();
pix.intGrid();
pix.randomButtons();
pix.gridButtons();
pix.colorGrid();