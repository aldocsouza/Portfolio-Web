import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../../model/Repository';
import { CommonModule } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [
    CommonModule,
    BtnPrimaryComponent
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent{

  @Input() repositories: Repository[] = []
  @Input() darkAndLighMode: boolean = false;
  @Input() portAndEng: boolean = false;

}
