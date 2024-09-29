import './Puzzle.css';

function preparePuzzle() {
    const puzzleStarted = localStorage.getItem('puzzle');
    if (!puzzleStarted) {
        localStorage.setItem('puzzle', 'started');
        localStorage.setItem('key', 'php');
        localStorage.setItem('FOR YOU.', 'Word on the street is you\'ve found something interesting.. I don\'t mean to meddle, but I\'d advise you stop your search here. That is, if you think you\'re truly safe with your partner in crime. The choice is yours, of course, but make sure you make the right one.\n\nanswer: 293');
    }

}

export default function Puzzle() {
    preparePuzzle();
    return (
        <div className='maybe-try-highlighting-the-page-with-ctrl-a'>
            <p className='puzzle-entry-text'>Oh... Did you accidentally select the full page, or are you interested in the puzzle?</p>
            <p className='puzzle-entry-text' style={{top: '22px'}}>Well, since you're here, why don't you join me!</p>
            <p className='puzzle-entry-text' style={{top: '44px'}}>I've heard rumors of a secret organization existing somewhere beneath our branch.</p>
            <p className='puzzle-entry-text' style={{top: '66px'}}>We can be investigators in this whole crazy mystery!</p>
            <p className='puzzle-entry-text' style={{top: '88px'}}>To start off, let's inspect this room to find the larger picture...</p>
        </div>
    )
}