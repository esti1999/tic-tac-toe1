import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template:`

    <button>{{ value }}</button>
  `,
  styles: []
})
export class SquareComponent  {
    
  @Input() value: 'X' | 'O' | undefined;

}
