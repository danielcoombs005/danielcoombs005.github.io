import { PageType } from "./Enums";

export interface IPageHandling {
    currentSection: PageType;
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