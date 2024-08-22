import { useState } from 'react';
import { ContactReason } from '../Structures/Enums';
import './Contact.css';

function prepareEmailContent(subject: ContactReason): string {
    const mailToAddress:string = 'danielcoombs005@yahoo.com';
    let subjectLine: string = '';
    let body: string = 'Hello Daniel,%0D%0A%0D%0A';

    switch(subject) {
        case ContactReason.Hire:
            subjectLine = 'Reaching out to Discuss an Opportunity';
            body += 'I looked over your portfolio, and I would like to discuss a potential role or request your service. Please let me know when you are available to discuss.';
            break;
        case ContactReason.Bug:
            subjectLine = 'Reporting a Bug in your Portfolio/Website';
            body += 'I would like to report a bug I found in your website. Please review the following information:'
                + '%0D%0A%0D%0ADescription: [INSERT A DESCRIPTION OF THE BUG]'
                + '%0D%0AReproduction Steps: [INSERT STEPS TO REPRODUCE THE BUG TO THE BEST OF YOUR KNOWLEDGE]'
                + '%0D%0ADevice Used: [INSERT DEVICE USED]'
                + '%0D%0ABrowser: [INSERT BROWSER USED]';
            break;
        case ContactReason.FeatureRequest:
            subjectLine = 'Requesting a Feature in your Portfolio/Website';
            body += 'I would like to request a feature for your website.'
                + '%0D%0A%0D%0AWebsite: [INSERT THE NAME OF THE PROJECT THAT YOU ARE REQUESTING A FEATURE FOR]'
                + '%0D%0ADescription: [INSERT A DESCRIPTION OF THE FEATURE';
            break;
        default:
            subjectLine = 'Regarding your Portfolio';
            body += '[YOU FOUND A BUG IN MY WEBSITE. CONGRATULATIONS! INSERT YOUR MESSAGE HERE]';
    }

    body += '%0D%0A%0D%0ASincerely,%0D%0A[YOUR NAME]%0D%0A%0D%0A';
    return `mailto:${mailToAddress}?subject=${subjectLine}&body=${body}`;
}

function redirectToEmail(event: React.MouseEvent<HTMLElement>, subject: ContactReason) {
    event.preventDefault();
    let href: string = prepareEmailContent(subject);
    let emailUrl = document.createElement('a');
    emailUrl.href = href;
    emailUrl.click();
}

export default function Contact() {
    const [reason, setReason] = useState(-1)

    return (
        <div className='contact'>
            <p>If you're intersted in reaching out, feel free to choose an option and click the button below! If you're not on a compatable browser or prefer an alternate form of contact, feel free to use my contacts on the left side of the page!</p>
            <form className='contact-form'>
                <label className='contact-radio-label'>
                    <input type='radio' className='contact-radio-option' checked={reason === ContactReason.Hire} onChange={() => setReason(ContactReason.Hire)} />
                    <span className='contact-radio-value'>Inquire about professional opportunity</span>
                </label>
                <label className='contact-radio-label'>
                    <input type='radio' className='contact-radio-option' checked={reason === ContactReason.Bug} onChange={() => setReason(ContactReason.Bug)} />
                    <span className='contact-radio-value'>Report a bug</span>
                </label>
                <label className='contact-radio-label'>
                    <input type='radio' className='contact-radio-option' checked={reason === ContactReason.FeatureRequest} onChange={() => setReason(ContactReason.FeatureRequest)} />
                    <span className='contact-radio-value'>Suggest a feature to a project</span>
                </label>
                <input type='button' 
                    className={'contact-submit-button' + (reason == -1 ? ' contact-submit-button-disabled' : '')}
                    value='Open your mail app with template'
                    onClick={(event: React.MouseEvent<HTMLElement>) => redirectToEmail(event, reason)} disabled={reason === -1} />
            </form>
        </div>
    )
}