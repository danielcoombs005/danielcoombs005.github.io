export interface IHeader {
    currentPage: number;
    setCurrentPage: Function;
}

export interface IPageHandling {
    setCurrentPage: Function;
}

export interface IProjectListData {
    projects: IProjectData[];
}

export interface IProjectData {
    description: string;
    image: string;
    githubURL: string;
    languages: string[];
    name: string;
    status: string;
    tools: string[];
}