import { IPageHandling } from '../Structures/Interfaces';
import { PageType } from '../Structures/Enums';
import './RedirectBlocks.css';

export default function RedirectBlocks(props: IPageHandling) {
    return (
        <div className='redirect-blocks'>
            <div className={'no-select ' + (props.currentSection === PageType.AboutMe ? 'redirect-block-selected' : 'redirect-block-not-selected')} onClick={() => props.moveToSection('about-me-page', PageType.AboutMe)}>About Me</div>
            <div className={'no-select ' + (props.currentSection === PageType.Contact ? 'redirect-block-selected' : 'redirect-block-not-selected')} onClick={() => props.moveToSection('contact-page', PageType.Contact)}>Contact</div>
            <div className={'no-select ' + (props.currentSection === PageType.Projects ? 'redirect-block-selected' : 'redirect-block-not-selected')} onClick={() => props.moveToSection('project-page', PageType.Projects)}>Projects</div>
        </div>
    )
}