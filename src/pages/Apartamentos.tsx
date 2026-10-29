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

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBedrooms, setSelectedBedrooms] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const [page, setPage] = useState(1)

  const filteredApartments = apartaments.filter((apt) => {
    const matchesSearch = 
      apt.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      apt.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesBedrooms = selectedBedrooms 
      ? apt.bedrooms === Number(selectedBedrooms) 
      : true

    const matchesPrice = maxPrice 
      ? apt.price <= Number(maxPrice) 
      : true

    return matchesSearch && matchesBedrooms && matchesPrice
  })

  const totalPages = Math.ceil(filteredApartments.length / PER_PAGE)
  const start = (page - 1) * PER_PAGE
  const visible = filteredApartments.slice(start, start + PER_PAGE)

  const handleFilterChange = (setter: (val: string) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setter(e.target.value)
    setPage(1)
  }

  return (
    <section className='apartamentos-page'>
      <h1>Apartamentos</h1>
      <p className="page__subtitle">Explore nuestro catálogo exclusivo de propiedades de lujo.</p>

      <div className="filters-container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '1.5rem 0' }}>
        <input 
          type="text" 
          placeholder="Buscar por nombre o ubicación..." 
          value={searchTerm}
          onChange={handleFilterChange(setSearchTerm)}
          className="filter-input"
          style={{ padding: '0.75rem', flex: '1 1 250px', borderRadius: '8px', border: '1px solid var(--color-border, #e2ddd4)' }}
        />

        <select 
          value={selectedBedrooms} 
          onChange={handleFilterChange(setSelectedBedrooms)}
          className="filter-select"
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border, #e2ddd4)' }}
        >
          <option value="">Todas las habitaciones</option>
          <option value="1">1 Habitación</option>
          <option value="2">2 Habitaciones</option>
          <option value="3">3 Habitaciones</option>
          <option value="4">4+ Habitaciones</option>
        </select>

        <input 
          type="number" 
          placeholder="Precio máximo ($)" 
          value={maxPrice}
          onChange={handleFilterChange(setMaxPrice)}
          className="filter-input"
          style={{ padding: '0.75rem', width: '180px', borderRadius: '8px', border: '1px solid var(--color-border, #e2ddd4)' }}
        />
      </div>

      {loading && <StatusMessage variant="loading" />}
      {error && <StatusMessage variant="error" onRetry={reload} />}

      {!loading && !error && (
        <>
          {filteredApartments.length === 0 ? (
            <div className="status-message" style={{ textAlign: 'center', padding: '3rem' }}>
              <p>No se encontraron propiedades que coincidan con los criterios de búsqueda.</p>
            </div>
          ) : (
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

              {totalPages > 1 && (
                <Pagination page={page} totalPages={totalPages} onChange={setPage} />
              )}
            </>
          )}
        </>
      )}
    </section>
  )
}
