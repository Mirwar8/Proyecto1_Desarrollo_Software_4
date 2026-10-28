import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="notfound">
      <h1>Página no encontrada</h1>
      <p>La dirección que buscás no existe o cambió de lugar.</p>
      <Link className="btn btn--primary" to="/">
        Volver al inicio
      </Link>
    </section>
  )
}