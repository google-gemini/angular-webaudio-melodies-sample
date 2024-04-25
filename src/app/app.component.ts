import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './keyboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeyboardComponent],
  template: `<app-keyboard/>`,
})
export class AppComponent {
  title = 'ngsynth';
}
