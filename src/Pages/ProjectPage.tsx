import ProjectBlock from '../Base/ProjectBlock';
import { IProjectData } from '../Structures/Interfaces';
import projectData from '../Structures/projects.json';

export default function Projects() {
    return (
        <div className='project-page'>
            <h1>PROJECTS</h1>
            {projectData.projects.map((project: IProjectData, index: number) => 
                <ProjectBlock {...project} key={'project' + index} />
            )}
        </div>
    )
}