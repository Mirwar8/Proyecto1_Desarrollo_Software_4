import '../styles/ContactInfo.css';

export default function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-info-card">
        <h3 className="contact-info__title">Oficina Principal</h3>
        <p className="contact-info__description">
          Nos especializamos en propiedades exclusivas en las zonas más cotizadas de Costa Rica.
        </p>

        <ul className="contact-info__list">
          <li>
            <span className="info-label">Ubicación:</span>
            <span className="info-value">Escazú, San José, Costa Rica</span>
          </li>
          <li>
            <span className="info-label">Teléfono:</span>
            <span className="info-value">+506 2288-9900</span>
          </li>
          <li>
            <span className="info-label">Correo:</span>
            <span className="info-value">contacto@luxurychantes.com</span>
          </li>
          <li>
            <span className="info-label">Horario:</span>
            <span className="info-value">Lunes a Viernes: 9:00 AM – 6:00 PM</span>
          </li>
        </ul>
      </div>

      <div className="contact-info-card founders-card">
        <h3 className="contact-info__title">Dirección Ejecutiva</h3>
        <p className="contact-info__description">
          Liderazgo y experiencia en el sector inmobiliario de alta gama.
        </p>

        <div className="founders-list">
          <div className="founder-item">
            <span className="info-label">Arwy Zamora </span>
            <span className="info-value">Co-Fundador & Director General</span>
          </div>
          <div className="founder-item">
            <span className="info-label">Sebastián Villegas </span>
            <span className="info-value">Co-Fundador & Director Comercial</span>
          </div>
        </div>
      </div>
    </div>
  );
}