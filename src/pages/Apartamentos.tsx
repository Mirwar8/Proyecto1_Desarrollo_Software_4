import { useState } from 'react'
import { useApartaments } from '../hooks/useApartaments'
import { useFavorites } from '../hooks/useFavorites'
import StatusMessage from '../components/StatusMessage'
import ApartamentCard from '../components/ApartamentCard'
import Pagination from '../components/Pagination'

const PER_PAGE = 5

export default function Apartamentos() {
  const { apartaments, loading, error, reload } = useApartaments()
  const { isFavorite, toggleFavorite } = useFavorites()

  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(apartaments.length / PER_PAGE)
  const start = (page - 1) * PER_PAGE
  const visible = apartaments.slice(start, start + PER_PAGE)

  return (
    <section>
      <h1>Apartamentos</h1>

      {loading && <StatusMessage variant="loading" />}
      {error && <StatusMessage variant="error" onRetry={reload} />}

      {!loading && !error && (
        <>
          <ul className="cards">
            {visible.map((apt) => (
              <li key={apt.id}>
                <ApartamentCard
                  apartament={apt}
                  isFavorite={isFavorite(apt.id)}
                  onToggleFavorite={toggleFavorite}
                />
              </li>
            ))}
          </ul>

          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </>
      )}
    </section>
  )
}
