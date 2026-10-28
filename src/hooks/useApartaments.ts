import { useEffect, useState } from 'react'
import type { Apartament } from '../types/apartaments'

interface UseApartamentsResult {
  apartaments: Apartament[]
  loading: boolean
  error: string | null
  reload: () => void
}

export function useApartaments(): UseApartamentsResult {
  const [apartaments, setApartaments] = useState<Apartament[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let activo = true

    async function load() {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/apartaments.json`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = (await res.json()) as Apartament[]

        if (activo) {
          setApartaments(data)
          setError(null)
        }
      } catch {
        if (activo) setError('No se pudieron cargar los apartamentos.')
      } finally {
        if (activo) setLoading(false)
      }
    }

    load()

    return () => {
      activo = false
    }
  }, [attempt])

  function reload() {
    setLoading(true)
    setError(null)
    setAttempt((n) => n + 1)
  }

  return { apartaments, loading, error, reload }
}
