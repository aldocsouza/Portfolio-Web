import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../../model/Repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly GITHUB_URL = 'https://api.github.com/users/aldocsouza/repos';
  private readonly token = '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';

  constructor(
    private http: HttpClient
  ) { }

  getRepo(): Observable<Repository[]> {
    const headers = new HttpHeaders({
      'Authorization': `token ${this.token}`
    });
    return this.http.get<Repository[]>(this.GITHUB_URL, { headers });
  }

  getLanguages(url: string){
    const headers = new HttpHeaders({
      'Authorization': `token ${this.token}`
    });
    return this.http.get<Repository[]>(url, { headers });
  }

}
