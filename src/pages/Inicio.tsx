import { Link } from 'react-router-dom'
import { useApartaments } from '../hooks/useApartaments'
import { useFavorites } from '../hooks/useFavorites'
import ApartamentCard from '../components/ApartamentCard'
import StatusMessage from '../components/StatusMessage'
import { SITE } from '../config/site'

export default function Inicio() {
  const { apartaments, loading, error, reload } = useApartaments()
  const { isFavorite, toggleFavorite } = useFavorites()

  const destacadas = apartaments.slice(0, 3)

  return (
    <>
      <section className="hero">
        <p className="hero__eyebrow">{SITE.tagline}</p>
        <h1>Vivir bien no es un lujo, es una decisión</h1>
        <p className="hero__lead">
          {SITE.name} selecciona apartamentos de lujo en las mejores zonas del
          país: diseño, ubicación y tranquilidad en una sola decisión.
        </p>
        <Link className="btn btn--primary" to="/apartamentos">
          Ver apartamentos
        </Link>
      </section>

      <section aria-labelledby="destacadas">
        <h2 id="destacadas">Propiedades destacadas</h2>

        {loading && <StatusMessage variant="loading" />}
        {error && <StatusMessage variant="error" onRetry={reload} />}

        {!loading && !error && (
          <>
            <ul className="cards">
              {destacadas.map((apt) => (
                <li key={apt.id}>
                  <ApartamentCard
                    apartament={apt}
                    isFavorite={isFavorite(apt.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                </li>
              ))}
            </ul>

            <Link className="link-more" to="/apartamentos">
              Ver las {apartaments.length} propiedades
            </Link>
          </>
        )}
      </section>

      <section aria-labelledby="propuesta">
        <h2 id="propuesta">Nuestra propuesta</h2>
        <ul className="value-list">
          <li>
            <h3>Ubicaciones seleccionadas</h3>
            <p>Solo zonas con acceso, seguridad y plusvalía comprobada.</p>
          </li>
          <li>
            <h3>Diseño con criterio</h3>
            <p>Cada espacio resuelto para vivirse, no para fotografiarse.</p>
          </li>
          <li>
            <h3>Acompañamiento real</h3>
            <p>Visitas coordinadas y asesoría en cada etapa de la decisión.</p>
          </li>
        </ul>
      </section>
    </>
  )
}