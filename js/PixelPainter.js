var main= document.getElementById('pixelPainter');

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



  function createDiv(numRows, numCell) {

    for(var i = 0; i< numRows; i++) {
      var row = document.createElement('div');
      paintingGrid.appendChild(row);
      for(var x = 0; x < numCell; x++) {
        cell = document.createElement('div');
        row.appendChild(cell);
        cell.style.backgroundColor = 'red';
        cell.style.display = "inline-block";
        cell.style.height = '5px';
        cell.style.width = '5px';

        cell.addEventListener("mouseover", function(){
          this.style.backgroundColor = "green";
          console.log(this)
        })
        x++
      }
      i++
    }
  }



  createDiv(100,100);




//erase div
var eraseDiv = document.createElement('div');
eraseDiv.className = "eraseDiv";
main.appendChild(eraseDiv);

  //Erase Button
  var eraseButton = document.createElement('button');
  eraseButton.id = "erase";
  eraseButton.innerHTML = "erase";
  eraseDiv.appendChild(eraseButton);

//clear div
var clearDiv = document.createElement('div');
clearDiv.className = "clearDiv";
main.appendChild(clearDiv);

   //Clear Button
  var clearButton = document.createElement('button');
  clearButton.id = "clear";
  clearButton.innerHTML = "clear";
  clearDiv.appendChild(clearButton);








