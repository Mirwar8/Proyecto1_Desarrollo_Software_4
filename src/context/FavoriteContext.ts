import { createContext } from 'react'
import type { FavoriteContextValue } from '../types/apartaments'

export const FavoriteContext = createContext<FavoriteContextValue | null>(null)