// menuLinkElements.forEach((menuLinkElement) => {
//     const menuLinkElements = document.querySelectorAll('.navigation__list-link');
//     menuLinkElement.addEventListener('click', () => {
//         removeSelectedClass();
//         addSelectedClass(menuLinkElement);
//     });
// });

export function removeSelectedClass() {
    const menuLinkElements = document.querySelectorAll('.navigation__list-link');
    menuLinkElements.forEach((menuLinkElement) => {
        menuLinkElement.classList.remove('selected');
    });
}

export function addSelectedClass(menuLinkElement) {
    menuLinkElement.classList.add('selected');
}