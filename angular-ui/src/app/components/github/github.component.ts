import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../services/github.service";
import {GitHubRepo} from "../../models/github.data";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  // repos!: GitHubRepo[];
  repos: GitHubRepo[] = []; // to samo co wyżej
  displayedColumns = ['fullName', 'login', 'type', 'forksUrl'];
  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.github.readGitHubRepos()
      .subscribe(value => this.repos = value)
  }

}
