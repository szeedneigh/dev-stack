"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star, Bookmark, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Resource } from "@/types/resources";

export const ResourceCard = ({
  resource,
  className,
}: {
  resource: Resource;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className={cn("group relative h-full", className)}
    >
      <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
        <CardHeader className="relative p-0 aspect-video">
          <Image
            src={resource.previewImage}
            alt={resource.title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+yHgAFWAJc08sE7wAAAABJRU5ErkJggg=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </CardHeader>

        <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-2">
            {resource.category.map((cat) => (
              <motion.span
                key={cat}
                className="px-2 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                whileHover={{ scale: 1.05 }}
              >
                {cat}
              </motion.span>
            ))}
          </div>

          <CardTitle className="flex items-center gap-2">
            {resource.title}
            {resource.type === "paid" && (
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            )}
          </CardTitle>

          <CardDescription className="line-clamp-2">
            {resource.description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between p-4">
          <div className="flex items-center gap-2">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon">
                <Bookmark className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button asChild className="gap-1">
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                Visit
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
