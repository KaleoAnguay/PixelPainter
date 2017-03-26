//create Grid to color.  Append buttons to Grid.  Buttons are the best!

var pixgrid = document.querySelector('#pixelPainter');
var paint = 'white';
var painted = function() {
  event.target.style.background = paint;
};

var whiteBox = document.createElement('div');
//
whiteBox.id = 'Whitebox';
whiteBox.style.width = '650px';
whiteBox.style.height = '500px';
pixgrid.appendChild(whiteBox);

var buttnum = 520;
var isMouseDown = false;


for(var i = 0; i < buttnum; i++) {
  var button = document.createElement('button');
  button.id = i;
  //button.innerHTML = button.id;
  button.style.background = "white";
  button.style.width = '25px';
  button.style.height = '25px';
  button.style.cursor = 'crosshair';

  button.addEventListener("mousedown", function(event){
    isMouseDown = true;
    // console.log(event.target.style.background = paint);
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

var colorButtons = document.createElement('div');

colorButtons.id = 'color';
colorButtons.style.width = '200px';
colorButtons.style.height = '200px';
pixgrid.appendChild(colorButtons);

var colorbutt = 12;
//Color Wheel array to iterate through.
var colorsOfTheRainbow = ["Red", "Green", "Blue", "Yellow", "Black", "Teal", "Purple", "Pink", "Orange", "Grey", "Lime", "White" ];

//creating color buttons
for(var i = 0; i <colorbutt; i++) {
  var buttoncolor = document.createElement('button');
  buttoncolor.id =  colorsOfTheRainbow[i];
  buttoncolor.style.background = colorsOfTheRainbow[i];
  buttoncolor.style.width  = '50px';
  buttoncolor.style.height = '50px';
  buttoncolor.style.cursor = 'crosshair';
  buttoncolor.addEventListener('click', function(event) {
   console.log(event.target.id);
   paint = event.target.id;
   console.log(paint);
  });
  colorButtons.appendChild(buttoncolor);
}

// Color all of pixpainter
var colorAll = document.createElement('div');
  colorAll.id = 'All';
  colorAll.style.width = '500px';
  colorAll.style.height = '500px';
  pixgrid.appendChild(colorAll);

//Random Colors and Full color stack
var randomButt = 2;

for(var i = 0; i<randomButt; i++) {
  var instColor = document.createElement('button');
    instColor.id = 'instant' + i;
    instColor.style.width = '100px';
    instColor.style.height = '50px';
    instColor.addEventListener('click', function(event) {
      console.log(event.target.id);
  });
    colorAll.appendChild(instColor);
}
//Query selector all returns an array.
//loop through it in order to access the buttons.
var everything = whiteBox.querySelectorAll('button');

instant0.innerHTML = "Color All";
instant1.innerHTML = "Random Color";

instant0.addEventListener('click', function(event) {
  everything.forEach(painted);
});





