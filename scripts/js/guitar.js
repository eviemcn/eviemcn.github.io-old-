var E = ["E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B", "C"];
var A = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E", "F"];
var D = ["D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A", "A#"];
var G = ["G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D", "D#"];
var B = ["B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#", "E"];
var E2 = ["E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B", "C"];
var strings = [E, A, D, G, B, E2];

function possibleAChords(possible, colour){
    var x = document.getElementsByTagName("td");
    var i;
    var count = 0;
    for (i = 0; i < strings.length; i++){
        var j;
        for (j = 1; j < strings[i].length; j++){
            if (possible == strings[i][j]){
                x[count].innerHTML = j;
                x[count].style.backgroundColor = colour;
            }
            count += 1;
        }
    }
}

function emptyTable(){
	var x = document.getElementsByTagName("td");
	count = 0;
  	var i;
	for (i = 0; i < 6; i++){
        var j;
        for (j = 0; j < 20; j++){
          x[count].innerHTML = "&nbsp;";
          x[count].style.backgroundColor = "#ffffff";
	  count += 1;
        }
    }
}

function createTable(){
    var display = document.getElementById("guitar-display");
    var table = document.createElement("table");
    var i;
    for (i = 0; i < 6; i++){
        var row = document.createElement("tr");
        var j;
        for (j = 0; j < 20; j++){
            var cell = document.createElement("td");
	    cell.innerHTML = "&nbsp;";
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    display.appendChild(table);    
}

function drawAChord(){
  emptyTable();
  possibleAChords('A','#e342f5');
  possibleAChords('C#','#4293f5');
  possibleAChords('E','#f5c842');
}

function drawBm7Chord(){
  emptyTable();
  possibleAChords('B','#e342f5');
  possibleAChords('D','#4293f5');
  possibleAChords('F#','#f5c842');
  possibleAChords('A','#42f5b6');
}

function drawA7Chord(){
  emptyTable();
  possibleAChords('A','#e342f5');
  possibleAChords('C#','#4293f5');
  possibleAChords('E','#f5c842');
  possibleAChords('G#','#42f5b6');
}

function drawChord(){
  var e = document.getElementById("inputGroupSelect04");
  var num = e.value;
  if (num == 1){
	drawAChord();	  
  } else if (num == 2){
	drawBm7Chord();	  
  } else if (num == 3){
	drawA7Chord();	  
  }
}

function drawChords(){
    createTable();
}

function drawTabs(){
    emptyTable();
}

function drawMusicTheory(){
  
}

window.onload = drawChords();
