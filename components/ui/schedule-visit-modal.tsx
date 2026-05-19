"use client";

interface ScheduleVisitModalProps {
  open: boolean;
  onClose: () => void;
  propertyName: string;
}

export function ScheduleVisitModal({ open, onClose, propertyName }: ScheduleVisitModalProps) {
  return (
    <div className={open ? "schedule-modal-root open" : "schedule-modal-root"} aria-hidden={!open}>
      <button type="button" className="schedule-modal-backdrop" onClick={onClose} />
      <section className="schedule-modal-panel" aria-label="Agendar visita">
        <header>
          <h3>Agendar visita</h3>
          <button type="button" onClick={onClose}>
            Fechar
          </button>
        </header>

        <p>{propertyName}</p>

        <label>
          Nome
          <input type="text" placeholder="Seu nome" />
        </label>

        <label>
          Telefone
          <input type="tel" placeholder="(00) 00000-0000" />
        </label>

        <label>
          Melhor data
          <input type="date" />
        </label>

        <button type="button" className="schedule-modal-submit">
          Confirmar agendamento
        </button>
      </section>
    </div>
  );
}
