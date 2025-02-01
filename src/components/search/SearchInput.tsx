'use client'

import { useEffect, useState } from 'react'
import { Input } from '../ui/input'

export function SearchInput() {
  const [query ,setQuery] = useState('')

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query.length > 2) {
        fetch(`/api/resources?q=${encodeURIComponent(query)}`)
          .then(res => res.json())
          .then(updateResults)
      }
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [query])

  return (
    <Input
      placeholder="Search resources..."
      value={query}
      onChange={(e) => setQuery(e.target.value)} 
    />
  )
}