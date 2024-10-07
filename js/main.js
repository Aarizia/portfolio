import { removeSelectedClass, addSelectedClass} from './menu-selected.js';

const menuLinkElements = document.querySelectorAll('.navigation__list-link');
const mainElement = document.querySelector('.main');
const homeLinkElement = document.querySelector('#home-link');
const projectsLinkElement = document.querySelector('#projects-link');
const aboutLinkElement = document.querySelector('#about-link');
const contactLinkElement = document.querySelector('#contact-link');

menuLinkElements.forEach((menuLinkElement) => {
    menuLinkElement.addEventListener('click', () => {
        removeSelectedClass();
        addSelectedClass(menuLinkElement);
    });
});

homeLinkElement.addEventListener('click', () => {

    const htmlOutput = `
    <div class="flex-container">
        <section class="home">
            <h3 class="home__heading">Lorem ipsum dolor sit amet.</h3>
            <p class="home__bio">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quae officiis eaque. Dolor, praesentium fugiat.</p>
        </section>
    </div>
    `

    mainElement.innerHTML = htmlOutput;
});

projectsLinkElement.addEventListener('click', () => {

    const htmlOutput = `
    <section class="projects">
        <h3>Projects</h3>
        <ul>
            <li><a href="">Hypokeimenon</a></li>
            <li><a href="">Star Wars leksikon</a></li>
            <li><a href="">Eksamensprojekt</a></li>
            <li><a href="">Taoistiske citater</a></li>
            <li><a href=""></a>Filosoffer</li>
            <li><a href=""></a>Vejret</li>
            <li><a href=""></a>Information</li>
            <li><a href=""></a>Quiz</li>
            <li><a href=""></a>KatteAPI?</li>
            <li><a href=""></a>Kommer hi-fi med?</li>
        </ul>
    </section>
    `

    mainElement.innerHTML = htmlOutput;
});

aboutLinkElement.addEventListener('click', () => {

    const htmlOutput = `
    <div class="flex-container">
        <section class="about">
            <h3 class="about__heading">Lorem lorem lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur, bl bla bla adipisicing elit. A quae officiis eaque. Dolor, praesentium fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quae officiis eaque. Dolor, praesentium fugiat.</p>
            <p> bla bla bla her er mit cv </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quae officiis eaque. Dolor, praesentium fugiat.</p>
        </section>
    </div>
    `

    mainElement.innerHTML = htmlOutput;
});

contactLinkElement.addEventListener('click', () => {

    const htmlOutput = `
    <div class="contact">
        <address>mail@email.omgcontactme</address>
    </div>
    `

    mainElement.innerHTML = htmlOutput;
});