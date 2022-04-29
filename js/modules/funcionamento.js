export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.hora.split(",").map(Number);

  const agora = new Date();
  const dataAgora = agora.getDay();
  const horaAgora = agora.getHours();

  const semanaAberto = diasSemana.indexOf(dataAgora) !== -1;
  const horarioAberto =
    horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
