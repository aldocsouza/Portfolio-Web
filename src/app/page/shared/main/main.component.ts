import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BtnPrimaryComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
