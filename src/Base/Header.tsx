import { PageType } from '../Structures/Enums';
import { IHeader } from '../Structures/Interfaces';
import './Header.css';

export default function Header(props: IHeader) {
    return (
        <div className='header'>
            <div className='home-button' onClick={() => props.setCurrentSection(PageType.LandingPage)}>DC</div>
            {props.currentSection !== PageType.LandingPage && 
                <div className='header-text-options'>
                    <div onClick={() => props.setCurrentSection(PageType.AboutMe)}>About Me</div>
                    <div onClick={() => props.setCurrentSection(PageType.Contact)}>Contact</div>
                    <div onClick={() => props.setCurrentSection(PageType.Projects)}>Projects</div>
                </div>
            }
        </div>
    );
}