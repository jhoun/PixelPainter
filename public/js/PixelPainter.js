var main = document.getElementById('pixelPainter');

var selectedColor;

//The Grids
var gridsDiv = document.createElement('div');
gridsDiv.className = "gridsDiv";
main.appendChild(gridsDiv);

  //Color Grid
  var colorGrid = document.createElement('div');
  colorGrid.id = "colorGrid";
  gridsDiv.appendChild(colorGrid);

   //Painting Grid
  var paintingGrid = document.createElement('div');
  paintingGrid.id = "paintingGrid";
  gridsDiv.appendChild(paintingGrid);

  var colorsArr = ['#fefa43','#fadb50', '#fef972', '#f1d781', '#39720e',
  '#3d7b0f', '#c2f543', '#7ff327', '#a5f52e', '#6bc034', '#7df47b', '#a7e58c',
  '#60a868', '#7bf194', '#79741b', '#487e4f', '#e13233', '#e34e34', '#e88837',
  '#d03b44', '#6a1113', '#8b2d2e', '#bb6433', '#e87c59', '#bf2f44', '#d6907a',
  '#e03f90', '#962b2c','#e470af', '#b55a5b', '#da8080', '#efb4bd', '#ec9c7b',
  '#dd50fa', '#a9337e', '#c175d0', '#c36f8e', '#c46f8f', '#e28074', '#e39f66',
  '#061773', '#371b75', '#0c1e63', '#113cf6', '#682076', '#6e46d9', '#6393e5',
  '#77faf9', '#3b8180', '#3a3c7e', '#51baf6', '#b0d3e0', '#55a9a0', '#91caf4',
  '#adbed8','#685b7f', '#686be5', '#3b6bd7', '#595bc2', '#697786', '#4c7ba9',
  '#367575', '#74d7c8', '#a2a2a2', '#cecfce', '#000000'];

    function createColorDiv(numRows, numCell) {

    for(var i = 0; i< numRows; i++) {
      var row = document.createElement('div');
      colorGrid.appendChild(row);
      for(var x = 0; x < numCell; x++) {
        var colorCounter = 0
        cell = document.createElement('div');
        row.appendChild(cell);
        cell.classList.add('colors');
        cell.style.border = "thin solid black"
        cell.style.display = "inline-block";
        cell.style.height = '10px';
        cell.style.width = '10px';
      }
    }
  }



  createColorDiv(11,6);

// creates the colorSwatch and lets you select a color to paint
  var colorCells =  document.querySelectorAll('div.colors');
  for(var i = 0; i < colorCells.length; ++i) {
    colorCells[i].style.backgroundColor = colorsArr[i];
    colorCells[i].id = colorsArr[i];
    colorCells[i].addEventListener('click', function(e) {
      selectedColor = e.currentTarget.id
    })
  }




console.log(colorsArr.length)

var clicked = false;
  function createPaintDiv(numRows, numCell) {

    for(var i = 0; i< numRows; i++) {
      var row = document.createElement('div');
      paintingGrid.appendChild(row);
      for(var x = 0; x < numCell; x++) {
        cell = document.createElement('div');
        row.appendChild(cell);

        cell.style.backgroundColor = 'white';
        cell.style.border = "1px solid black";
        cell.classList.add('paintGridCells');
        cell.id = "div" + x;
        cell.style.backgroundColor = 'white';
        cell.style.border = "thin solid black"
        cell.style.display = "inline-block";
        cell.style.height = '10px';
        cell.style.width = '10px';

        cell.addEventListener("mousedown", function(){
          this.style.backgroundColor = selectedColor;
          clicked = true;
        })
        cell.addEventListener("mouseup", function() {
          clicked = false;
        })
        cell.addEventListener("mouseover", function() {
          if(clicked) {
            this.style.backgroundColor = selectedColor;
          }
        })
      }
    }
  }








  createPaintDiv(25,40);





//erase div
var eraseDiv = document.createElement('div');
eraseDiv.className = "eraseDiv";
colorGrid.appendChild(eraseDiv);

  //Erase Button
  var eraseButton = document.createElement('button');
  eraseButton.id = "erase";
  eraseButton.innerHTML = "erase";
  eraseDiv.appendChild(eraseButton);
  eraseButton.addEventListener('click', function(e) {
      selectedColor = "white";
  })

//clear div
var clearDiv = document.createElement('div');
clearDiv.className = "clearDiv";
colorGrid.appendChild(clearDiv);

   //Clear Button
  var clearButton = document.createElement('button');
    clearButton.id = "clear";
    clearButton.innerHTML = "clear";
    clearDiv.appendChild(clearButton);

    clearButton.addEventListener('click', function(e) {
      var toBeCleared = document.getElementsByClassName("paintGridCells");
      for(var z = 0; z < toBeCleared.length; ++z){
        toBeCleared[z].style.backgroundColor = "white";
      }
  })










