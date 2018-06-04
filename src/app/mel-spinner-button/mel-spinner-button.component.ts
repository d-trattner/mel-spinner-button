import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mel-spinner-button',
  templateUrl: './mel-spinner-button.component.html',
  styleUrls: ['./mel-spinner-button.component.scss']
})
export class MelSpinnerButtonComponent {

  @Input() text: string = '';
  @Input() loading: boolean = false;
  @Output() click = new EventEmitter();

  constructor() { }

  onClick() {
    this.click.emit('');
  }

}
