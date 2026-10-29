<<<<<<< HEAD
import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { useApartaments } from "../hooks/useApartaments";
import ContactInfo from "../components/ContactInfo";
import '../styles/ContactInfo.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyId: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contacto() {
  const [searchParams] = useSearchParams();
  const { apartaments } = useApartaments();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    propertyId: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const propertyParam = searchParams.get("propiedad");
    if (propertyParam) {
      setFormData((prev) => ({ ...prev, propertyId: propertyParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = "Ingresa un correo electrónico válido.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="contact-page">
      <div className="contact-header-section">
        <h1 className="page__title">Contacto y Solicitud de Visita</h1>
        <p className="contact__subtitle">
          Complete el formulario o comuníquese directamente con nuestras oficinas. 
        </p>
      </div>

      <div className="contact-layout">
        <ContactInfo />

        <div className="contact-container">
          {submitted ? (
            <div className="status-message status-message--success">
              <h2>¡Mensaje enviado con éxito!</h2>
              <p>Gracias, {formData.name}. Hemos recibido su solicitud y le responderemos pronto a {formData.email}.</p>
              <button 
                type="button" 
                className="btn btn--primary" 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", propertyId: "", message: "" });
                }}
                style={{ marginTop: '1rem' }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name">Nombre completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej. Pepe Pérez"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej. pepe@correo.com"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono <span className="optional">(Opcional)</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ej. +506 8888 8888"
                />
              </div>

              <div className="form-group">
                <label htmlFor="propertyId">Propiedad de interés <span className="optional">(Opcional)</span></label>
                <select
                  id="propertyId"
                  name="propertyId"
                  value={formData.propertyId}
                  onChange={handleChange}
                >
                  <option value="">-- Seleccione una propiedad (Opcional) --</option>
                  {apartaments.map((apt) => (
                    <option key={apt.id} value={apt.id}>
                      {apt.name} ({apt.location})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje * <span className="hint">(Mínimo 10 caracteres)</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escriba los detalles de su consulta..."
                  className={errors.message ? "input-error" : ""}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
=======
export default function Inicio() {
  return <section><h1>Inicio</h1></section>
>>>>>>> 6cc370bfd55b8390d46d569e33ef81a3f3a62f42
}