import Introduction from '../Base/Introduction';
import { IPageHandling } from '../Structures/Interfaces';
import AboutMe from './AboutMe';
import './LandingPage.css';

export default function LandingPage(props: IPageHandling) {
    return (
        <div id='landing-page'>
            {/* <Introduction /> */}
            <AboutMe
                moveToSection={props.moveToSection}
            />
        </div>
    )
}