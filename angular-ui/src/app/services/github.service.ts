import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {githubApi} from "../models/links";
import {GitHubRepo} from "../models/github.data";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  readGitHubRepos(): Observable<Array<GitHubRepo>> {
    return this.http.get<Array<GitHubRepo>>(githubApi);
  }
}
