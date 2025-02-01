'use client'

import { useState } from "react"
import { Button } from "../ui/button"
import { Heart } from 'lucide-react'

export function UpvoteButton({ initialVotes =0 }) {
  const [votes, setVotes] = useState(initialVotes)
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = async () => {
    if (!hasVoted) {
      setVotes(prev => prev + 1)
      setHasVoted(true)
      // Backend sync
      await fetch(`/api/resources/${id}/vote`, {method: 'POST' })
    }
  }

  return (
    <Button variant="ghost" onClick={handleVote}>
      <Heart className={`mr-2 ${hasVoted ? 'fill-red-500 text-red-500' : ''}`} />
      {votes}
    </Button>
  )
}