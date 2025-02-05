"use client";

import { ArrowBigUp, ArrowBigUpDash } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useLocalStorage } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import { useState } from "react";

type VoteState = {
  votes: number;
  hasVoted: boolean;
};

export const UpvoteButton = ({ resourceId }: { resourceId: string }) => {
  const [localVotes, setLocalVotes] = useLocalStorage<
    Record<string, VoteState>
  >("votes", {});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentState = localVotes[resourceId] || { votes: 0, hasVoted: false };

  const handleVote = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    const newVotes = currentState.hasVoted
      ? currentState.votes - 1
      : currentState.votes + 1;

    setLocalVotes((prev) => ({
      ...prev,
      [resourceId]: {
        votes: newVotes,
        hasVoted: !currentState.hasVoted,
      },
    }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await fetch(`/api/resources/${resourceId}/vote`, { method: "POST" });
    } catch (error) {
      setLocalVotes((prev) => ({
        ...prev,
        [resourceId]: currentState,
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleVote}
        disabled={isSubmitting}
        className={cn(
          "gap-2 transition-colors",
          currentState.hasVoted
            ? "bg-primary/10 text-primary"
            : "hover:bg-accent"
        )}
      >
        <motion.div
          animate={{ rotate: currentState.hasVoted ? [0, -10, 10, 0] : 0 }}
          transition={{ duration: 0.4 }}
        >
          {currentState.hasVoted ? (
            <ArrowBigUpDash className="w-5 h-5" />
          ) : (
            <ArrowBigUp className="w-5 h-5" />
          )}
        </motion.div>
        <span className="font-medium">{currentState.votes}</span>
      </Button>
    </motion.div>
  );
};
