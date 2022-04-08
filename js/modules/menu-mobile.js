import clickOutside from "./outsideclick.js";

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]')

    menuButton.addEventListener('click', openMenu);

    function openMenu() {
        menuList.classList.add('active');
        menuButton.classList.add('active');
        clickOutside(menuList, ['touchstart', 'click'], () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
        })
    }
}

