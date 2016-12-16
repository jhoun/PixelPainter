var main= document.getElementById('pixelPainter');

//The Tables
var tableDiv = document.createElement('div');
tableDiv.className = "tableDiv";
main.appendChild(tableDiv);

  //Color Table
  var colorTable = document.createElement('table');
  colorTable.id = "colorTable";
  tableDiv.appendChild(colorTable);

    //Rows for color rows
    var colorRows = document.createElement("tr");
    colorRows.id =

  //Grid Table
  var gridTable = document.createElement('table');
  gridTable.id = "gridTable";
  tableDiv.appendChild(gridTable);



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

