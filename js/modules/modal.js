export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const container = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && container) {
    function toggleModal(event) {
      event.preventDefault();
      container.classList.toggle("ativo");
    }

    function cliqueForaModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);

    botaoFechar.addEventListener("click", toggleModal);

    container.addEventListener("click", cliqueForaModal);
  }
}
