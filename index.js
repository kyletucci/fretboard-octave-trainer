import { Fretboard } from '@moonwave99/fretboard.js';

const fretboard = new Fretboard({
  el: '#fretboard',
  fretColor: 'blue',
  dotFill: 'red',
});

const scale = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#']

const notes = {
    E: ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E'],
    a: ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A'],
    d: ['D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D'],
    g: ['G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G'],
    b: ['B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B'],
    e: ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E'],
}

const strings = (Object.keys(notes))

function getAllIndexes(arr, val) {
    val = val.toUpperCase()
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

function getDots(stringName){
    let dots = []
    let noteIndexes = []
    strings.forEach((string) => {
        noteIndexes.push(getAllIndexes(notes[string], stringName))
    })
    noteIndexes.map((note, index) => note.map(fret => dots.push({string: index+1, fret:fret})))
    fretboard.setDots(dots);
    fretboard.render()
}

const buttonContainer = document.getElementById('button-container')
scale.map((note, index) => buttonContainer.innerHTML += `<button class="noteButton" key=${index} value=${note}>${note}</button>`)

buttonContainer.addEventListener('click', (event) => getDots(event.target.value))

fretboard.render()

