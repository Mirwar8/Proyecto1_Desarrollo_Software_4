import { useContext } from 'react'
import { FavoriteContext } from '../context/FavoriteContext'
import type { FavoriteContextValue } from '../types/apartaments'

export function useFavorites(): FavoriteContextValue {
  const ctx = useContext(FavoriteContext)

  if (!ctx) {
    throw new Error('useFavorites debe usarse dentro de <FavoriteProvider>')
  }

  return ctx
}