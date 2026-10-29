import "../styles/Pagination.css"

interface PaginationProps {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

export default function Pagination({
  page,
  totalPages,
  onChange,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="pagination" aria-label="Paginación del catálogo">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        Anterior
      </button>

      <ol className="pagination__pages">
        {pages.map((n) => (
          <li key={n}>
            <button
              type="button"
              className={n === page ? 'is-current' : undefined}
              aria-current={n === page ? 'page' : undefined}
              onClick={() => onChange(n)}
            >
              {n}
            </button>
          </li>
        ))}
      </ol>

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
      >
        Siguiente
      </button>
    </nav>
  )
}