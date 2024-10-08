import { useState } from 'react';
import { delay } from './CommonLogic';
import './Introduction.css'

const delayFactor: number = 1 * 1000; // 1 second
const messageTime: number = 10 * 1000; // 10 seconds
const messages: string[] = ['I build websites.', 
    'I have over 2 years of professional experience.',
    'I primarily use React, C#, .NET, and MongoDB.',
    'I also have experience with Angular, Python, and SQL.',
    'I love puzzles! They\'re the highlight of the party! Maybe you should try the one on this page :)'];

export default function Introduction() {
    const [messageIndex, setMessageIndex] = useState(0);

    setTimeout(() => {
        let messageElement = document.getElementById('summary');
        if (messageElement !== null) {
            messageElement.classList.remove('fadeIn');
            messageElement.classList.add('fadeOut');
            delay(delayFactor).then(() => {
                const nextMessageIndex: number = (messageIndex + 1) % messages.length;
                setMessageIndex(nextMessageIndex);
                messageElement!.classList.remove('fadeOut');
                messageElement!.classList.add('fadeIn');
            });
        }
    }, messageTime);

    return (
        <div className='introduction'>
            <div id='name'>Daniel Coombs</div>
            <div id='title'>Full Stack Software Developer</div>
            <div id='sources'>
                <a href='https://github.com/danielcoombs005' target='_'>Github</a>
                <span> | </span>
                <a href='https://www.linkedin.com/in/daniel-coombs-402934135/' target='_'>LinkedIn</a>
            </div>
            <div id='summary' className='fadeIn'>{messages[messageIndex]}</div>
        </div>
    )
}