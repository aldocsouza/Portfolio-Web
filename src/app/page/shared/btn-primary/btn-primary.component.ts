import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [
  ],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {

  @Input("btn-text") btnText: string = "";
  @Input() style: string = ""

  @Output() submit = new EventEmitter();
  @Output() portAndEng = new EventEmitter();

  trueAndFalse: boolean = false;
  truePortAndEng: boolean = false;

  onSubmit(){
    this.trueAndFalse = !this.trueAndFalse
    this.submit.emit(this.trueAndFalse)
  }

  onPortAndEng(){
    this.truePortAndEng = !this.truePortAndEng
    this.portAndEng.emit(this.truePortAndEng)
  }

}
