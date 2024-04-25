import { Component } from "@angular/core";
import { octaves } from "./note-frequencies";

@Component({
  selector: 'app-keyboard',
  standalone: true,
  template: `
    @for (octave of octaves; track octave; let idx = $index) {
      <div class="octave">
        @for (note of getNotes(octave); track note) {
          <div class="key" (mousedown)="notePressed({ octave: idx, note: note[0], frequency: $any(note[1]) })" (mouseup)="noteReleased({ octave: idx, note: note[0], frequency: $any(note[1]) })">
            <div>{{note[0]}} <sub>{{idx}}</sub></div>
          </div>      
        }
      </div>
    }
  `,
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {
  protected octaves = octaves;
  protected oscList: any[] = [];
  protected audioContext = new AudioContext()
  protected mainGainNode = this.audioContext.createGain();

  ngOnDestroy() {
    this.audioContext.close();
  }

  getNotes(octave: any) {
    return Object.entries(octave);
  }

  ngOnInit() {
    this.mainGainNode.connect(this.audioContext.destination);
    this.mainGainNode.gain.value = 100;
  
    // Create the keys; skip any that are sharp or flat; for
    // our purposes we don't need them. Each octave is inserted
    // into a <div> of class "octave".
  
    // octaves.forEach((keys, idx) => {
    //   const keyList = Object.entries(keys);
    //   const octaveElem = document.createElement('div');
    //   octaveElem.className = 'octave';
  
    //   keyList.forEach((key) => {
    //     if (key[0].length === 1) {
    //       // octaveElem.appendChild(createKey(key[0], idx, key[1]));
    //     }
    //   });
  
    // });
  
    // // const sineTerms = new Float32Array([0, 0, 1, 0, 1]);
    // // const cosineTerms = new Float32Array(sineTerms.length);
    // // customWaveform = this.audioContext.createPeriodicWave(cosineTerms, sineTerms);
  
    // for (let i = 0; i < 9; i++) {
    //   this.oscList[i] = {};
    // }
  }

  notePressed(note: { note: string, octave: number, frequency: number }) {
    this.oscList[note.octave][note.note] = this.playTone(note.frequency);
  }
  
  noteReleased(note: { note: string, octave: number, frequency: number }) {
    this.oscList[note.octave][note.note].stop();
  }

  playTone(freq: number) {
    const osc = this.audioContext.createOscillator();
    osc.connect(this.mainGainNode);
    
    osc.type = 'triangle';
  
    osc.frequency.value = freq;
    osc.start();
  
    return osc;
  }
}





// const ;
// const oscList = [];
// let mainGainNode = null;

// const keyboard = document.querySelector('.keyboard');
// const wavePicker = document.querySelector("select[name='waveform']");
// const volumeControl = document.querySelector("input[name='volume']");

// let noteFreq = null;
// let customWaveform = null;
// let sineTerms = null;
// let cosineTerms = null;

// function createNoteTable() {
  
// }

// if (!Object.entries) {
//   Object.entries = function entries(O) {
//     return reduce(
//       keys(O),
//       (e, k) =>
//         concat(
//           e,
//           typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []
//         ),
//       []
//     );
//   };
// }

// setup();

// function createKey(note, octave, freq) {
 
// }





// function changeVolume(event) {
//   mainGainNode.gain.value = volumeControl.value;
// }

// const synthKeys = document.querySelectorAll('.key');
// const keyCodes = [
//   'Space',
//   'ShiftLeft',
//   'KeyZ',
//   'KeyX',
//   'KeyC',
//   'KeyV',
//   'KeyB',
//   'KeyN',
//   'KeyM',
//   'Comma',
//   'Period',
//   'Slash',
//   'ShiftRight',
//   'KeyA',
//   'KeyS',
//   'KeyD',
//   'KeyF',
//   'KeyG',
//   'KeyH',
//   'KeyJ',
//   'KeyK',
//   'KeyL',
//   'Semicolon',
//   'Quote',
//   'Enter',
//   'Tab',
//   'KeyQ',
//   'KeyW',
//   'KeyE',
//   'KeyR',
//   'KeyT',
//   'KeyY',
//   'KeyU',
//   'KeyI',
//   'KeyO',
//   'KeyP',
//   'BracketLeft',
//   'BracketRight',
//   'Digit1',
//   'Digit2',
//   'Digit3',
//   'Digit4',
//   'Digit5',
//   'Digit6',
//   'Digit7',
//   'Digit8',
//   'Digit9',
//   'Digit0',
//   'Minus',
//   'Equal',
//   'Backspace',
//   'Escape',
// ];
// function keyNote(event) {
//   const elKey = synthKeys[keyCodes.indexOf(event.code)];
//   if (elKey) {
//     if (event.type === 'keydown') {
//       elKey.tabIndex = -1;
//       elKey.focus();
//       elKey.classList.add('active');
//       notePressed({ buttons: 1, target: elKey });
//     } else {
//       elKey.classList.remove('active');
//       noteReleased({ buttons: 1, target: elKey });
//     }
//     event.preventDefault();
//   }
// }
// addEventListener('keydown', keyNote);
// addEventListener('keyup', keyNote);
