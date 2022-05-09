export const gitHubUserApi = "https://api.github.com/users";
export const gitHubGistUrl = "https://gist.github.com";
export const labels = {
  users: "Gists",
  sort: "Sort",
  searchText: "Search",
  searchPlaceholder: "Search gists by user name...",
  searchErrorText: "Error Occured, Please try again later",
  rateExceededError: "API request limit exceeded, try again after an hour ",
  follow: "Follow",
  previous: "< previous",
  copyRight: "@copy 2022 GitHub, Inc.",
  next: "next >",
  breakLabel: "...",
  homeTitle: "See what the git hub community most exceited about today.",
  noResultText: "No Result? Modify your search and find more than 90M Gist",
  followers: "Followers",
  following: "Following",
  public_repos: "Public repos",
  bio: "Bio",
  files: "Files",
  forks: "Forks",
  comments: "Comments",
  pageTitle: "JavaScript Exercise: GitHub Public Gist Search",
};
export const itemPerPage = 10;

export const sortOptons = [
  {
    label: "Best match",
    order: "desc",
    sort: "",
  },
  {
    label: "Most stars",
    order: "desc",
    sort: "stars",
  },
  {
    label: "Fewest stars",
    order: "asc",
    sort: "stars",
  },
  {
    label: "Most forks",
    order: "desc",
    sort: "forks",
  },
  {
    label: "Fewest forks",
    order: "asc",
    sort: "forks",
  },
  {
    label: "Recently updated",
    order: "desc",
    sort: "updated",
  },
  {
    label: "Least recently updated",
    order: "asc",
    sort: "updated",
  },
];
