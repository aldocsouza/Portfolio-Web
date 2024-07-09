import { Component, Input } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BtnPrimaryComponent,
    CommonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  @Input() darkAndLighMode: boolean = false;
  @Input() portAndEng: boolean = false;

}
