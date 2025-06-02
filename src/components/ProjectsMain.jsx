import { useRef } from 'react'
import './ProjectsMain.scss'

export default function ProjectsMain() {

    const detailsElement = useRef();

/*     toggleHandler() {
            console.log(toggled);
    } */

    return (
        <main className="projects">
            <section className="projects__container">
                <h2 className="projects__heading">Projects</h2>
                <ul className="projects__list">
                    <li className="project">
                        <details ref={detailsElement} class="project__details" /* onToggle={toggleHandler} */>
                            <summary class="project__summary">May 2025: Movie Ticket App</summary>
                            <div class="project__container">
                                <p class="project__text">A web application for mobile phones browsing movies and booking seats in cinemas <span className='line-break'>The web app fetches data from an external api and is build in React, Vite, JavaScript and SASS. It uses the MERN stack to book seats.</span></p>
                                <a href="https://movie-ticket-app-movie-ticket-app-emmal.onrender.com/" target="_blank" class="project__link">Open project website</a>
                            </div>
                        </details>
                    </li>
                    <li className="project">
                        <details ref={detailsElement} class="project__details" /* onToggle={toggleHandler} */>
                            <summary class="project__summary">Feb 2025: Din Mægler</summary>
                            <div class="project__container">
                                <p class="project__text">A web application for mobile phones browsing residential properties for sale. <span className='line-break'>The web app fetches data from an external api and is build in React, Vite, JavaScript and SASS.</span></p>
                                <a href="https://praktik-din-m-gler-emmal.onrender.com" target="_blank" class="project__link">Open project website</a>
                            </div>
                        </details>
                    </li>
                    <li className="project">
                        <details ref={detailsElement} class="project__details" /* onToggle={toggleHandler} */>
                            <summary class="project__summary">Jan 2025: MyMovies</summary>
                            <div class="project__container">
                                <p class="project__text">A web application for mobile phones browsing current movies and tv-series. <span className='line-break'>The web app fetches data from an external api and is build in React, Vite, JavaScript and SASS.</span></p>
                                <a href="https://projekt-moviez-aarizia.onrender.com" target="_blank" class="project__link">Open project website</a>
                            </div>
                        </details>
                    </li>
                    <li className="project">
                        <details ref={detailsElement} class="project__details" /* onToggle={toggleHandler} */>
                            <summary class="project__summary">May 2024: Hypokeimenon</summary>
                            <div class="project__container">
                                <p class="project__text">A website about visual math build in HTML, CSS, JavaScript and p5.js.</p>
                                <a href="https://www.hypokeimenon.dk" target="_blank" class="project__link">Open project website</a>
                            </div>
                        </details>
                    </li>
                </ul>
            </section>
        </main>
    )
}