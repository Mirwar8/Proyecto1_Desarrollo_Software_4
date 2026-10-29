import "../styles/StatusMessage.css"

interface StatusMessageProps {
  variant: 'loading' | 'error' | 'empty'
  message?: string
  onRetry?: () => void
}

const DEFAULTS = {
  loading: 'Cargando apartamentos…',
  error: 'No se pudieron cargar los apartamentos.',
  empty: 'No hay apartamentos que coincidan con la búsqueda.',
}

export default function StatusMessage({
  variant,
  message,
  onRetry,
}: StatusMessageProps) {
  const isError = variant === 'error'

  return (
    <div
      className={`status status--${variant}`}
      role={isError ? 'alert' : 'status'}
      aria-live={isError ? 'assertive' : 'polite'}
    >
      {variant === 'loading' && (
        <span className="status__spinner" aria-hidden="true" />
      )}

      <p>{message ?? DEFAULTS[variant]}</p>

      {isError && onRetry && (
        <button type="button" onClick={onRetry}>
          Reintentar
        </button>
      )}
    </div>
  )
}