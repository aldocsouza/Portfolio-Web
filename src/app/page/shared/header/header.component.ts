import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() darkAndLighMode: boolean = false;
  @Input() portAndEng: boolean = false;

  @Output() darkAnLight = new EventEmitter();
  @Output() portAndEnglish = new EventEmitter();

  onDarkAndLight(event: boolean){
    this.darkAnLight.emit(event)
  }
  onPortAndEng(event: boolean){
    this.portAndEnglish.emit(event)
  }

}
