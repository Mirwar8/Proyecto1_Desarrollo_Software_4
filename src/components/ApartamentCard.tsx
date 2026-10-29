import { Link } from 'react-router-dom'
import type { Apartament } from '../types/apartaments'
import "../styles/ApartmentCard.css"

interface ApartamentCardProps {
  apartament: Apartament
  isFavorite: boolean
  onToggleFavorite: (id: string) => void
}

const priceFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function ApartamentCard({
  apartament,
  isFavorite,
  onToggleFavorite,
}: ApartamentCardProps) {
  return (
    <article className="card">
      <div className="card__media">
        <img
          src={apartament.image}
          alt={`Fachada de ${apartament.name}`}
          loading="lazy"
          width={640}
          height={420}
        />
        <button
          type="button"
          className={isFavorite ? 'card__fav is-active' : 'card__fav'}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Quitar ${apartament.name} de favoritos`
              : `Agregar ${apartament.name} a favoritos`
          }
          onClick={() => onToggleFavorite(apartament.id)}
        >
          <span aria-hidden="true">{isFavorite ? '♥' : '♡'}</span>
        </button>
      </div>

      <div className="card__body">
        <h3 className="card__title">
          <Link to={`/apartamentos/${apartament.id}`}>{apartament.name}</Link>
        </h3>
        <p className="card__location">{apartament.location}</p>
        <p className="card__meta">
          {apartament.bedrooms} hab · {apartament.bathrooms} baños · {apartament.area} m²
        </p>
        <p className="card__price">
          {priceFormat.format(apartament.price)} <span>/mes</span>
        </p>
      </div>
    </article>
  )
}