export interface Iuser {
  avatar_url: string;
  name: string;
  company: string;
  location: string;
  bio: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  public_gists: number;
  public_repos: number;
  followers: number;
  following: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}
export interface IFork {
  comments: number;
  comments_url: string;
  commits_url: string;
  created_at: string;
  description: string;
  files: string;
  forks_url: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  id: string;
  node_id: string;
  owner: any;
  public: boolean;
  updated_at: string;
  url: string;
  user: string;
}
export interface IGist {
  comments: number;
  comments_url: string;
  commits_url: string;
  created_at: string;
  description: string;
  files: string;
  fork: IFork[];
  forks_url: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  id: string;
  node_id: string;
  owner: Iuser;
  public: boolean;
  truncated: boolean;
  updated_at: string;
  url: string;
  user: string;
}

export interface ISearchResult {
  user: Iuser;
  gist: IGist[];
}

export interface IQuery {
  q: string;
  per_page: string;
  p: string;
  o: string;
  s: string;
}
