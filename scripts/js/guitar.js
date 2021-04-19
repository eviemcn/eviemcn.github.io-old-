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
    count = 0;
    for (i = 0; i < strings.length; i++){
        var display = "";
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

function drawChords(){
    var display = document.getElementById("guitar-display");
    var table = document.createElement("table");
    for (i = 0; i < 6; i++){
        var row = document.createElement("tr");
        for (j = 0; j < 20; j++){
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    display.appendChild(table);
    
}

function drawTabs(){
    possibleAChords("D", "#f5c842");
    possibleAChords("F#", "#4293f5");
    possibleAChords("A", "#e342f5");
}

function drawMusicTheory(){
  
}
