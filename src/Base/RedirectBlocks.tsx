import { IPageHandling } from '../Structures/Interfaces';
import { PageType } from '../Structures/Enums';
import './RedirectBlocks.css';

export default function RedirectBlocks(props: IPageHandling) {
    return (
        <div className='redirect-blocks'>
            <div onClick={() => props.setCurrentPage(PageType.AboutMe)}>About Me</div>
            <div onClick={() => props.setCurrentPage(PageType.Contact)}>Contact</div>
            <div onClick={() => props.setCurrentPage(PageType.Projects)}>Projects</div>
        </div>
    )
}