"use client";

interface FilterSidebarProps {
  open: boolean;
  onClose: () => void;
  maxTaxA: string;
  setMaxTaxA: (value: string) => void;
  maxTaxB: string;
  setMaxTaxB: (value: string) => void;
  options: Array<{
    label: string;
    active: boolean;
    toggle: () => void;
  }>;
}

export function FilterSidebar({
  open,
  onClose,
  maxTaxA,
  setMaxTaxA,
  maxTaxB,
  setMaxTaxB,
  options,
}: FilterSidebarProps) {
  return (
    <div className={open ? "filter-sidebar-root open" : "filter-sidebar-root"} aria-hidden={!open}>
      <button type="button" className="filter-sidebar-backdrop" onClick={onClose} />

      <aside className="filter-sidebar-panel" aria-label="Filtros avancados">
        <header>
          <h3>Filtros avancados</h3>
          <button type="button" onClick={onClose}>
            Fechar
          </button>
        </header>

        <label className="filter-sidebar-field">
          Taxa A ate
          <select value={maxTaxA} onChange={(event) => setMaxTaxA(event.target.value)}>
            <option value="all">Qualquer</option>
            <option value="300">Ate R$ 300</option>
            <option value="600">Ate R$ 600</option>
            <option value="900">Ate R$ 900</option>
            <option value="1200">Ate R$ 1.200</option>
          </select>
        </label>

        <label className="filter-sidebar-field">
          Taxa B ate
          <select value={maxTaxB} onChange={(event) => setMaxTaxB(event.target.value)}>
            <option value="all">Qualquer</option>
            <option value="100">Ate R$ 100</option>
            <option value="200">Ate R$ 200</option>
            <option value="350">Ate R$ 350</option>
            <option value="500">Ate R$ 500</option>
          </select>
        </label>

        <div className="filter-sidebar-group">
          {options.map((option) => (
            <button
              key={option.label}
              type="button"
              className={option.active ? "active" : ""}
              onClick={option.toggle}
            >
              {option.label}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
