import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SITE } from "../config/site";
import { useFavorites } from "../hooks/useFavorites";

const LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/apartamentos", label: "Apartamentos" },
  { to: "/favoritos", label: "Favoritos" },
  { to: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { favorites } = useFavorites();
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          {SITE.name}
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>

        <nav
          id="menu-principal"
          aria-label="Navegación principal"
          className={open ? "site-nav is-open" : "site-nav"}
        >
          <ul>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "is-active" : undefined
                  }
                >
                  {link.label}
                  {link.to === "/favoritos" && favorites.length > 0 && (
                    <span className="site-nav__badge">{favorites.length}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
