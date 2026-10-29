import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import "../styles/Layout.css"

export default function Layout() {
  return (
    <>
      <Header />
      <main id="contenido" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}