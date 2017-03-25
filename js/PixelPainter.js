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
  button.style.width = '60px';
  button.style.height = '60px';
  button.addEventListener('click', function(event) {
    console.log(button.id);
  });
whiteBox.appendChild(button);
}
console.log(button);

var colorButtons = document.createElement('div');

colorButtons.id = 'color';
colorButtons.style.width = '200px';
colorButtons.style.height = '200px';
colorGrid.appendChild(colorButtons);

var colorbutt = 12;

for(var i = 0; i <colorbutt; i++) {
  var buttoncolor = document.createElement('button');
  buttoncolor.id =  i;
  buttoncolor.innerHTML = i;
  buttoncolor.style.width  = '50px';
  buttoncolor.style.height = '50px';
  buttoncolor.addEventListener('click', function(event) {

   colorButtons.id + event.target.innerHTML;
  });
  colorButtons.appendChild(buttoncolor);
}

// for( var i = 1; i < buttnum; i++) {
//   var button = document.createElement('button');
//   button.id = i;
//   button.innerHTML = i;
//   button.addEventListener('click', function(event) {
//     price.innerHTML += event.target.innerHTML;



//   });
//   whiteBox.appendChild(button);