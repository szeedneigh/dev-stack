'use client'

import { useState, useEffect } from "react"
import { Input } from "../ui/input"
import { motion } from "framer-motion"

export function SearchSystem({ onSearch, categories }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  useEffect(() => {
    const timer = setTimeout(() => onSearch({ query, category }), 300)
    return () => clearTimeout(timer)
  }, [query, category])

  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      className="space-y-4 mb-8"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Search resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-background border rounded-md px-4 py-2"
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </motion.div>
  )
}