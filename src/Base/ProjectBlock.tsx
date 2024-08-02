import { IProjectData } from '../Structures/Interfaces';
import { Status } from '../Structures/Enums';
import './ProjectBlock.css';

function renderCircle(status: string) {
    let color = '';
    switch (status) {
        case Status.Complete:
            color = 'green';
            break;
        case Status.InProgress:
            color = 'yellow';
            break;
        case Status.Planning:
            color = 'orangered';
            break;
        case Status.Incomplete:
            color = 'orange';
            break;
        default:
            color = 'red';
            break;
    }
    return <span className='circle' style={{backgroundColor: color}} />
}

function printList(items: string[]) {
    let list: string = '';
    if (items.length > 2) {
        for (let i = 0; i < items.length - 1; i++) {
            list += `${items[i]}, `;
        }
    } else {
        list += `${items[0]} `;
    }

    if (items.length < 2) {
        return list;
    }

    list += `and ${items[items.length - 1]}`;
    return list;
}

export default function ProjectBlock(props: IProjectData) {
    return (
        <div className={'project-block'}>
            <div className='project-block-inner'>
                <div className='project-block-left'>
                    <a href={props.githubURL} target='_'>{props.name}</a>
                    <div className='project-block-left-status'>Status: {renderCircle(props.status)} {props.status}</div>
                    <img className='project-image' src={process.env.PUBLIC_URL+'/'+props.image} alt={props.image} />
                </div>
                <div className='project-block-right'>
                    <div className='project-block-description'>{props.description}</div> 
                    <div className='project-block-right-tools'>
                        <div>Languages: {printList(props.languages)}</div> | 
                        <div> Tools: {printList(props.tools)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}