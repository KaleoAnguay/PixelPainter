//create Grid to color.  Append buttons to Grid.  Buttons are the best!
//painter set

var pixgrid = document.getElementById('pixelPainter');
var colorGrid = document.getElementById('pixelPainter');
var paint = null;

var whiteBox = document.createElement('div');

whiteBox.id = 'Whitebox';
whiteBox.style.width = '500px';
whiteBox.style.height = '500px';
pixgrid.appendChild(whiteBox);

var buttnum = 400;
var isMouseDown = false;


for(var i = 0; i < buttnum; i++) {
  var button = document.createElement('button');
  button.id = i;
  button.style.background = "white";
  button.style.width = '25px';
  button.style.height = '25px';

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

//Color buttons div
var colorButtons = document.createElement('div');

colorButtons.id = 'color';
colorButtons.style.width = '200px';
colorButtons.style.height = '200px';
colorGrid.appendChild(colorButtons);

//Color Wheel array to iterate through and number of buttons
var colorbutt = 12;
var colorsOfTheRainbow = ["Red", "Green", "Blue", "Yellow", "Black", "Teal", "Purple", "Pink", "Orange", "Grey", "Lime", "White" ];

//creating color buttons
for(var i = 0; i <colorbutt; i++) {
  var buttoncolor = document.createElement('button');
  buttoncolor.id =  colorsOfTheRainbow[i];
  buttoncolor.style.background = colorsOfTheRainbow[i];
  buttoncolor.style.width  = '50px';
  buttoncolor.style.height = '50px';
  buttoncolor.addEventListener('click', function(event) {
   console.log(event.target.id);
   paint = event.target.id;
   console.log(paint);
  });
  colorButtons.appendChild(buttoncolor);
}
// Creating paint variable to color with.
