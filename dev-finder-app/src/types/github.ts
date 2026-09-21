export interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
}

export interface GitHubUserDetail extends GitHubUser {
    name: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    location: string | null;
}