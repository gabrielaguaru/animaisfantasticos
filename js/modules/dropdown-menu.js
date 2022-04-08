import clickOutside from "./outsideclick.js";

export default function initDropdown() {
  const dropdownsMenus = document.querySelectorAll("[data-dropdown]");
  dropdownsMenus.forEach((item) => {
    ["touchstart", "click"].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick() {
    this.classList.add("active");
    clickOutside(this, ["touchstart", "click"], () =>
      this.classList.remove("active")
    ); //precisa passar a função callback como parâmetro pra conseguir pegar esse this (cada um dos menus, se deixar para passar o this no handleclickoutside o this é o html e não o menu)
  }

}
