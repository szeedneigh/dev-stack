"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ResourceCard } from "./ResourceCard";
import { Resource } from "@/types/resources";
import { ResourceSkeleton } from "./ResourceSkeleton";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ResourceGrid = ({
  resources,
  isLoading,
}: {
  resources: Resource[];
  isLoading: boolean;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="container px-4">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
          >
            {[...Array(6)].map((_, index) => (
              <ResourceSkeleton key={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {resources.map((resource) => (
              <motion.div key={resource.id} variants={itemVariants} layout>
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
