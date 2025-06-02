import './AboutMain.scss';

export default function AboutMain() {

    return (
        <main className="about">
            <div className='about__container'>
                <section className="about__section">
                    <h2 className="about__heading">Education</h2>
                    <p className="about__text">I am currently studying front-end web development at Roskilde Technical School.</p>
                    <p className="about__text">Up until now I have been working with React, Vite, the MERN stack, PHP, MySQL, WordPress, Jest, webpack, JavaScript, p5.js, SASS, CSS in JS, CSS and HTML.</p>
                </section>
                <section className="about__section">
                    <h2 className="about__heading">Employment</h2>
                    <p className="about__text">With my former sole proprietorship I have worked as a consultant helping a large pharmaceutical company move their library of scientific litterature to a new database.</p>
                </section>
            </div>
        </main>
    )
}