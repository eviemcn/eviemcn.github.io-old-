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
  
}

function drawTabs(){
  
}

function drawMusicTheory(){
  
}
