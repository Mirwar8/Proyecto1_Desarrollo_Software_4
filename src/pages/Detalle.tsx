import { Link, useParams } from 'react-router-dom'
import { useApartaments } from '../hooks/useApartaments'
import '../styles/ApartmentDetail.css'

export default function Detalle() {
  const { id } = useParams<{ id: string }>()
  const { apartaments, loading, error, reload } = useApartaments()

  if (loading) {
    return (
      <div className="status-message">
        <h2 className="status-message__title">Cargando propiedad...</h2>
        <p className="status-message__text">Por favor espere un momento.</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="status-message">
        <h2 className="status-message__title">No pudimos cargar la propiedad</h2>
        <p className="status-message__text">{error}</p>
        <button className="btn btn--primary" onClick={reload} style={{ marginTop: '1rem' }}>
          Reintentar
        </button>
      </div>
    )
  }

  const apartment = apartaments.find((a) => String(a.id) === id)

  if (!apartment) {
    return (
      <div className="status-message">
        <h2 className="status-message__title">Esta propiedad no existe</h2>
        <p className="status-message__text">El enlace puede estar desactualizado o la propiedad ya no está disponible.</p>
        <Link className="btn btn--primary" to="/apartamentos" style={{ marginTop: '1rem', display: 'inline-block', textDecoration: 'none' }}>
          Volver al catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <Link to="/apartamentos" className="back-link">← Volver al catálogo</Link>
      
      <div className="detail-container">
        <div className="detail__media">
          <img 
            src={apartment.image} 
            alt={`Fachada de ${apartment.name}`} 
            width="800" 
            height="600" 
          />
        </div>

        <div className="detail__content">
          <p className="detail__location">{apartment.location}</p>
          <h1 className="detail__title">{apartment.name}</h1>
          <p className="detail__price">
            $ {apartment.price.toLocaleString()} <span>/mes</span>
          </p>

          <dl className="detail__specs">
            <div><dt>Habitaciones</dt><dd>{apartment.bedrooms}</dd></div>
            <div><dt>Baños</dt><dd>{apartment.bathrooms}</dd></div>
            <div><dt>Área</dt><dd>{apartment.area} m²</dd></div>
          </dl>

          <p className="detail__description">{apartment.description}</p>

          <h2 className="detail__subtitle">Amenidades</h2>
          <ul className="detail__amenities">
            {apartment.amenities.map((am) => (
              <li key={am} className="amenity-tag">{am}</li>
            ))}
          </ul>

          <div className="detail__actions">
            <Link className="btn btn--primary" to={`/contacto?propiedad=${apartment.id}`}>
              Solicitar visita
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}