import { useState, useEffect } from 'react'
import Fuse from 'fuse.js'

export function useSearch<T>(data: T[], keys: string[]) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(data)

  useEffect(() => {
    const fuse = new Fuse(data, { keys, threshold: 0.3 })
    query ? setResults(fuse.search(query).map(r => r.item)) : setResults(data)
  }, [data, query])

  return { results, query, setQuery }
}