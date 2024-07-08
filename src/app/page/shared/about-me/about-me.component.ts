import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  @Input() darkAndLighMode: boolean = false;
  @Input() portAndEng: boolean = false;
}
