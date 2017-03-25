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

var colorsOfTheRainbow = ["Red", "Green", "Blue", "Yellow", "Black", "Blue", "Purple", "Pink", "Orange", "Grey", "White" ];

for(var i = 0; i <colorbutt; i++) {
  var buttoncolor = document.createElement('button');
  buttoncolor.id =  "clr" + i;
  buttoncolor.style.background = colorsOfTheRainbow[i];
  buttoncolor.style.width  = '50px';
  buttoncolor.style.height = '50px';
  buttoncolor.addEventListener('click', function(event) {
   console.log(event.target.id);
  });
  colorButtons.appendChild(buttoncolor);
}

var redButton = document.getElementById('clr0');
redButton.style.background = "Red";



// for( var i = 1; i < buttnum; i++) {
//   var button = document.createElement('button');
//   button.id = i;
//   button.innerHTML = i;
//   button.addEventListener('click', function(event) {
//     price.innerHTML += event.target.innerHTML;



//   });
//   whiteBox.appendChild(button);