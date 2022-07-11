// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

   
    event.preventDefault();
 
   var mtable=document.getElementById("pixelCanvas");

   //get  user input
   const height=document.getElementById('inputHeight').value;
   const width=document.getElementById('inputWidth').value;
   console.log(height);
   console.log(width);

  //create table body
   var tblBody = document.createElement("tbody");
    
   //create a list or rows as user input
    for (var j = 0; j <height; j++) {
      // table row creation
      var row = document.createElement("tr");
      //vreate column as user input value width
      for (var i = 0; i < width; i++) {
       
        var cell = document.createElement("td");
        // add class to every table cell
        cell.classList.add("box");
       // add a list of cell in a row
        row.appendChild(cell);
      }
     
      //add table row to table body
      tblBody.appendChild(row);
    }

    /*check if table has any tbody or node and remove it
    before adding newly submited tbody .... */
    if(mtable.hasChildNodes()){
      mtable.removeChild(mtable.firstChild);
      console.log("nodes has been removed.........");
    }
    //add new node to our table 
    mtable.appendChild(tblBody);


    //add eventlistener all table cells
    var col=document.querySelectorAll('.box');
   col.forEach(e => {
      e.addEventListener("click",()=>{
        e.style.background=getColor();
        console.log("clicked..........");
      })
    });
    console.log("how many cell elements: ",col.length);
  }

function getColor(){
  var colr=document.getElementById("colorPicker").value;
     return colr;
  }
    