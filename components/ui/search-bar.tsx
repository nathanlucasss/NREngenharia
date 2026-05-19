"use client";

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  suggestions: string[];
  onSelectSuggestion: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  query,
  onQueryChange,
  suggestions,
  onSelectSuggestion,
  placeholder = "Busque por cidade, bairro, rua ou caracteristica",
  className,
}: SearchBarProps) {
  return (
    <div className={className ? `smart-search ${className}` : "smart-search"}>
      <div className="smart-search-input-wrap">
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={placeholder}
          aria-label="Buscar imoveis"
        />
        <span className="smart-search-icon" aria-hidden>
          Buscar
        </span>
      </div>

      {suggestions.length > 0 ? (
        <div className="smart-search-suggestions">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => onSelectSuggestion(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
