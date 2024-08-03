import { IPageHandling } from '../Structures/Interfaces';
import { PageType } from '../Structures/Enums';
import './RedirectBlocks.css';

export default function RedirectBlocks(props: IPageHandling) {
    return (
        <div className='redirect-blocks'>
            <div onClick={() => props.moveToSection('about-me-page', PageType.AboutMe)}>About Me</div>
            <div onClick={() => props.moveToSection('contact-page', PageType.Contact)}>Contact</div>
            <div onClick={() => props.moveToSection('project-page', PageType.Projects)}>Projects</div>
        </div>
    )
}