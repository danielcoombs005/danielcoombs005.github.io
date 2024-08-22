import React, { ReactElement } from 'react';
import ProjectBlock from '../Base/ProjectBlock';
import { Direction } from '../Structures/Enums';
import { IProjectData } from '../Structures/Interfaces';
import projectData from '../Structures/projects.json';
import './ProjectPage.css';

export default class Projects extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            projectPage: 0,
            upArrowDisabled: true,
            downArrowDisabled: false
        }
    }

    componentDidMount = () => {
        this.setState({
            downArrowDisabled: projectData.projects.length <= 2
        })
    }

    getTotalPageCount = () => {
        const projectCount: number = projectData.projects.length;
        let pageCount: number = Math.floor(projectCount / 2);

        if (projectCount % 2 === 1) {
            pageCount++;
        } 

        return pageCount;
    }

    updatePage(direction: Direction) {
        const projectsLength = projectData.projects.length;
        let projectPage = this.state.projectPage;

        const newPage = projectPage + (direction === Direction.Up ? -1 : 1);
        if (newPage >= 0 && newPage < (projectsLength / 2)) {
            projectPage = newPage;
        }

        const upArrowDisabled = newPage <= 0 || projectsLength <= 2;
        const downArrowDisabled = newPage >= this.getTotalPageCount() - 1;

        this.setState({
            projectPage: projectPage,
            upArrowDisabled: upArrowDisabled,
            downArrowDisabled: downArrowDisabled
        })
    
    }
    
    displayProjects() {
        let projects = projectData.projects.slice(2*this.state.projectPage, 2*this.state.projectPage + 2);
        let projectsList: ReactElement[] = [];
    
        projects.map((project: IProjectData, index: number) => {
            projectsList.push(<ProjectBlock {...project} key={'project' + index} />);
        })
    
        let projectsRender: ReactElement = React.createElement('div', { className: 'projects-group', onScroll: (event: any) => console.log(event)}, projectsList);
    
        return projectsRender;
    }

    render() {
        return (
            <div id='project-page'>
                {this.displayProjects()}
                <div className='project-page-number-section'>
                    <img className='project-image-left no-select'
                        src={`${process.env.PUBLIC_URL}/up-arrow${this.state.upArrowDisabled ? '-disabled' : ''}.png`}
                        alt={'UP ARROW'}
                        onClick={() => this.updatePage(Direction.Up)} />
                    <span className='no-select'>Page {this.state.projectPage + 1} of {this.getTotalPageCount()}</span>
                    <img className='project-image-right no-select'
                        src={`${process.env.PUBLIC_URL}/down-arrow${this.state.downArrowDisabled ? '-disabled' : ''}.png`}
                        alt={'DOWN ARROW'}
                        onClick={() => this.updatePage(Direction.Down)} />
                </div>
            </div>
        )
    }
}
