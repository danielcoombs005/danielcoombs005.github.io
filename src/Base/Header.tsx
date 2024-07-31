import { PageType } from '../Structures/Enums';
import { IHeader } from '../Structures/Interfaces';
import './Header.css';

export default function Header(props: IHeader) {
    return (
        <div className='header'>
            <div className='home-button' onClick={() => props.setCurrentPage(PageType.LandingPage)}>DC</div>
            {props.currentPage !== PageType.LandingPage && 
                <div className='header-text-options'>
                    <div onClick={() => props.setCurrentPage(PageType.AboutMe)}>About Me</div>
                    <div onClick={() => props.setCurrentPage(PageType.Contact)}>Contact</div>
                    <div onClick={() => props.setCurrentPage(PageType.Projects)}>Projects</div>
                </div>
            }
        </div>
    );
}