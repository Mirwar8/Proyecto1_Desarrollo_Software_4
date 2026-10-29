import { SITE } from '../config/site'
import "../styles/Footer.css"

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {SITE.name} — {SITE.tagline}
      </p>
      <p>© {new Date().getFullYear()} · Todos los derechos reservados</p>
    </footer>
  )
}