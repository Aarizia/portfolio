const menuLinkElements = document.querySelectorAll('.navigation__list-link');

menuLinkElements.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        removeSelectedClass();
        addSelectedClass(menuLink);
    });
});

function removeSelectedClass() {
    menuLinkElements.forEach((menuLink) => {
        menuLink.classList.remove('selected');
    });
}

function addSelectedClass(menuLink) {
    menuLink.classList.add('selected');
}