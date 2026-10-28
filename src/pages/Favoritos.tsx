import { Link } from 'react-router-dom'
import { useApartaments } from '../hooks/useApartaments'
import { useFavorites } from '../hooks/useFavorites'
import ApartamentCard from '../components/ApartamentCard'
import StatusMessage from '../components/StatusMessage'

export default function Favoritos() {
  const { apartaments, loading, error, reload } = useApartaments()
  const { favorites, isFavorite, toggleFavorite } = useFavorites()

  const guardados = apartaments.filter((apt) => favorites.includes(apt.id))

  return (
    <section>
      <h1>Favoritos</h1>

      {loading && <StatusMessage variant="loading" />}
      {error && <StatusMessage variant="error" onRetry={reload} />}

      {!loading && !error && guardados.length === 0 && (
        <>
          <StatusMessage
            variant="empty"
            message="Todavía no guardaste ningún apartamento."
          />
          <Link className="btn btn--primary" to="/apartamentos">
            Explorar apartamentos
          </Link>
        </>
      )}

      {!loading && !error && guardados.length > 0 && (
        <ul className="cards">
          {guardados.map((apt) => (
            <li key={apt.id}>
              <ApartamentCard
                apartament={apt}
                isFavorite={isFavorite(apt.id)}
                onToggleFavorite={toggleFavorite}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}