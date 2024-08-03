import { ReactElement } from 'react';
import ProjectBlock from '../Base/ProjectBlock';
import { IProjectData } from '../Structures/Interfaces';
import projectData from '../Structures/projects.json';
import './ProjectPage.css';

function prepareProjectsLayout() {
    let projectCount: number = projectData.projects.length;
    let projectsRender: ReactElement[] = [];
    let elementLeft, elementMiddle, elementRight;

    function createReactElement(project: IProjectData, index: number) {
        return (<ProjectBlock {...project} key={'project' + index} />);
    }

    function createRowReactElement(leftSideElement: ReactElement, rightSideElement: ReactElement | null, index: number) {
        return (<div className='projects-row' key={'project-row' + index}>{leftSideElement}{rightSideElement ?? '' }</div>)
    }

    for (let i = 0; i < projectCount; i += 2) {
        if (i + 2 > projectCount && projectCount % 2 === 1) {
            elementMiddle = createReactElement(projectData.projects[projectCount - 1], projectCount - 1);
            projectsRender.push(createRowReactElement(elementMiddle, null, i));
        } else {
            elementLeft = createReactElement(projectData.projects[i], i);
            elementRight = createReactElement(projectData.projects[i + 1], i + 1);

            projectsRender.push(createRowReactElement(elementLeft, elementRight, i));
        }
    }

    return projectsRender;
}

export default function Projects() {
    return (
        <div id='project-page'>
            <h1>PROJECTS</h1>
            {prepareProjectsLayout()}
        </div>
    )
}