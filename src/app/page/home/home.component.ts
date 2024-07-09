import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { MainComponent } from '../shared/main/main.component';
import { AboutMeComponent } from '../shared/about-me/about-me.component';
import { ProjectCardComponent } from '../shared/project-card/project-card.component';
import { Repository } from '../model/Repository';
import { GithubService } from '../shared/services/github.service';
import { CommonModule } from '@angular/common';
import { SocialNetworksComponent } from '../shared/social-networks/social-networks.component';
import { FooterComponent } from '../shared/footer/footer.component';

export interface RepositoryId{
  id: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    AboutMeComponent,
    ProjectCardComponent,
    SocialNetworksComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  @Input() darkAndLighMode: boolean = false;
  @Input() portAndEng: boolean = false;

  repositories: Repository[] = []

  languages: any[] = []

  repoId: RepositoryId[] = [
    {id : 733305561},
    {id : 742028443},
    {id : 805531031},
    {id : 824334447}
  ]

  constructor(
    private github: GithubService
  ){}

  darkMode(event: boolean){
    this.darkAndLighMode = event;
  }

  portAndEnglish(event: boolean){
    this.portAndEng = event;
  }

  ngOnInit(): void {
    this.github.getRepo().subscribe({
      next: response => {
        response.forEach(repo => {
          for(let repository of this.repoId){
            if(repo.id === repository.id){
              this.repositories.push(repo)
              this.getUrlLanguage(repo.languages_url)
            }
          }
        })
      }
    })
  }

  getUrlLanguage(url: string){
    this.github.getLanguages(url).subscribe(r => {
        this.languages.push(r)
    })
  }

}
