import { PageType } from '../Structures/Enums';
import { IPageHandling } from '../Structures/Interfaces';
import './AboutMe.css';

function getEmail() {
    navigator.clipboard.writeText('TODO');
}

export default function AboutMe(props: IPageHandling) {
    return (
        <div className='about-me'>
            <p>
                The year was 2019. I graduated the year prior from Illinois State University with a Bachelor's Degree in General Mathematics, and I had little idea as to how my world would change come the summer time.
                I always imagined myself to be a teacher, maybe even some Math wiz, but that was soon changed when I had the chance to delve into the crazy world that is software development.
                To this day, I am still as passionate and curious as back then to learn about this wild, ever-changing computer world.
            </p>
            <p>
                Currently based in Illinois, I'm looking to explore my next adventure.
                I've over two years of professional full stack development with an emphasis on C# using .NET Core; React using TypeScript, HTML5, and CSS3; and MongoDB.
                I also have industry experience with Angular, MVC, SQL, and RabbitMQ.
                Throughout 2024, I've learned and explored more languages, such as Python, Java, Go, and C++.
                I've also encountered other languages and tools, such as Node, Vue, Dart, R, Ruby, and Rust, and I would love to learn these more.
            </p>
            <p>
                I'm currently open to new opportunities!
                If you'd like to learn more about my prior experience and personal work, feel free to check out my <span onClick={() => props.setCurrentPage(PageType.Projects)}>projects</span>.
                You can also contact me by <span onClick={() => getEmail()}>email</span> or my <a href='https://www.linkedin.com/in/daniel-coombs-402934135/' target='_'>LinkedIn page</a>.
            </p>
        </div>
    )
}