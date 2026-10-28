import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
<<<<<<< HEAD
import "../styles/Layout.css"
=======
>>>>>>> 6cc370bfd55b8390d46d569e33ef81a3f3a62f42

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