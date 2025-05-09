document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formAgendamento");
    const listaEventos = document.querySelector(".eventos-agendados");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const data = form.data_evento.value.trim();
      const periodo = form.periodo_evento.value.trim();
      const evento = form.evento.value.trim();
      const responsavelEvento = form.responsavel_evento.value.trim();
      const responsavelAgendamento = form.responsavel_agendamento.value.trim();
      const observacoes = form.observacoes.value.trim();
  
      if (!data || !periodo || !evento || !responsavelEvento || !responsavelAgendamento) {
        alert("Preencha todos os campos obrigatórios.");
        return;
      }
  
      // Cria o card do evento
      const item = document.createElement("div");
      item.className = "evento-item";
      item.textContent = `${evento} (${periodo} - ${data})`;
  
      // Cria tooltip escondido
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.innerText =
  `Evento: ${evento}
  Período: ${periodo}
  Data: ${data}
  Responsável pelo Evento: ${responsavelEvento}
  Responsável pelo Agendamento: ${responsavelAgendamento}
  Observações: ${observacoes || "Nenhuma"}`;
  
      item.appendChild(tooltip);
      listaEventos.appendChild(item);
      form.reset();
    });
  });