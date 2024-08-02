import Introduction from '../Base/Introduction';
import RedirectBlocks from '../Base/RedirectBlocks';
import { IPageHandling } from '../Structures/Interfaces';
import './LandingPage.css';

export default function LandingPage(props: IPageHandling) {
    return (
        <div className='landing-page'>
            <Introduction />
            <RedirectBlocks setCurrentPage={props.setCurrentPage} />
        </div>
    )
}