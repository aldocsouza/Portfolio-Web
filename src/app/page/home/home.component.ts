import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { MainComponent } from '../shared/main/main.component';
import { AboutMeComponent } from '../shared/about-me/about-me.component';
import { MyProjectsComponent } from '../shared/my-projects/my-projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    AboutMeComponent,
    MyProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
