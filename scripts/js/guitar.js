var E = ["E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B", "C"];
var A = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E", "F"];
var D = ["D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A", "A#"];
var G = ["G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D", "D#"];
var B = ["B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#", "E"];
var E2 = ["E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B", "C"];
var strings = [E, A, D, G, B, E2];
var colours = ['#C490D1', '#A0D2DB', '#7D8CC4', '#B8336A'];

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
  possibleAChords('A', colours[0]);
  possibleAChords('C#', colours[1]);
  possibleAChords('E', colours[2]);
}

function drawBm7Chord(){
  emptyTable();
  possibleAChords('B',colours[0]);
  possibleAChords('D', colours[1]);
  possibleAChords('F#', colours[2]);
  possibleAChords('A', colours[3]);
}

function drawA7Chord(){
  emptyTable();
  possibleAChords('A',colours[0]);
  possibleAChords('C#', colours[1]);
  possibleAChords('E', colours[2]);
  possibleAChords('G#', colours[3]);
}

function drawCustom(){
  var name = document.getElementById('inputText').value;
  emptyTable();
  possibleAChords(name,colours[0]);
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
