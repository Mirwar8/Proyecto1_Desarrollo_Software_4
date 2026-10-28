import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Apartamentos from './pages/Apartamentos'
import Detalle from './pages/Detalle'
import Favoritos from './pages/Favoritos'
import Contacto from './pages/Contacto'
import FavoriteProvider from './context/FavoriteProvider'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <FavoriteProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="apartamentos" element={<Apartamentos />} />
          <Route path="apartamentos/:id" element={<Detalle />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </FavoriteProvider>
  )
}