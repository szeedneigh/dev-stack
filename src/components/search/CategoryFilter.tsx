"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { X, Filter } from "lucide-react";

const categories = [
  { id: "development", label: "Development" },
  { id: "design", label: "Design" },
  { id: "infrastructure", label: "Infrastructure" },
];

export const CategoryFilter = ({
  selected,
  setSelected,
}: {
  selected: string[];
  setSelected: (value: string[]) => void;
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter
          {selected.length > 0 && (
            <Badge className="px-1.5 py-0.5">{selected.length}</Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <div className="flex items-center justify-between px-2">
            <h4 className="text-sm font-medium">Categories</h4>
            {selected.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelected([])}
                className="h-auto p-1 text-muted-foreground"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
          <AnimatePresence>
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 p-2 rounded hover:bg-accent"
              >
                <Checkbox
                  id={category.id}
                  checked={selected.includes(category.id)}
                  onCheckedChange={(checked) => {
                    setSelected(
                      checked
                        ? [...selected, category.id]
                        : selected.filter((c) => c !== category.id)
                    );
                  }}
                />
                <label
                  htmlFor={category.id}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {category.label}
                </label>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </PopoverContent>
    </Popover>
  );
};
