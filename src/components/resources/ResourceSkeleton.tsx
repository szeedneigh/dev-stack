"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export const ResourceSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="space-y-4"
    >
      <Skeleton className="w-full h-[200px] rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[180px]" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[100px]" />
        <Skeleton className="h-8 w-[60px]" />
      </div>
    </motion.div>
  );
};
