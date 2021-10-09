export interface Owner {
  login: string,
  id: number,
  type: string
}

export interface GitHubRepo {
  full_name: string,
  owner: Owner;
  forks_url: string
}
