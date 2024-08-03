export interface IHeader {
    currentSection: number;
    setCurrentSection: Function;
}

export interface IPageHandling {
    moveToSection: Function;
}

export interface IProjectListData {
    projects: IProjectData[];
}

export interface IProjectData {
    description: string;
    githubURL: string;
    image: string;
    languages: string[];
    name: string;
    status: string;
    tools: string[];
    websiteURL: string;
}