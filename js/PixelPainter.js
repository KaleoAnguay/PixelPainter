//create Grid to color.  Append buttons to Grid.  Buttons are the best!

var pixgrid = document.getElementById('pixelPainter');
var colorGrid = document.getElementById('pixelPainter');

var whiteBox = document.createElement('div');
//
whiteBox.id = 'Whitebox';
whiteBox.style.width = '500px';
whiteBox.style.height = '500px';
pixgrid.appendChild(whiteBox);

var buttnum = 64;


for(var i = 0; i < buttnum; i++) {
  var button = document.createElement('button');
  button.id = i;
  button.innerHTML = button.id;
  button.style.background = "white";
  button.style.width = '60px';
  button.style.height = '60px';
  button.addEventListener('click', function(event) {
    console.log(event.target.id);
  });
whiteBox.appendChild(button);
}
//button1.background = "red";

var colorButtons = document.createElement('div');

colorButtons.id = 'color';
colorButtons.style.width = '200px';
colorButtons.style.height = '200px';
colorGrid.appendChild(colorButtons);

var colorbutt = 12;
//Color Wheel array to iterate through.
var colorsOfTheRainbow = ["Red", "Green", "Blue", "Yellow", "Black", "Teal", "Purple", "Pink", "Orange", "Grey", "Lime", "White" ];
var paint = null;

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
