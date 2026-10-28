import { useEffect, useState, type ReactNode } from 'react'
import { FavoriteContext } from './FavoriteContext'
import type { FavoriteContextValue } from '../types/apartaments'

const STORAGE_KEY = 'favoritos'

export default function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const guardado = localStorage.getItem(STORAGE_KEY)
      return guardado ? (JSON.parse(guardado) as string[]) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  function toggleFavorite(id: string) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    )
  }

  const value: FavoriteContextValue = {
    favorites,
    toggleFavorite,
    isFavorite: (id) => favorites.includes(id),
  }

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}