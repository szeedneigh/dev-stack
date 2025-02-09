"use client";

import { Bookmark, BookmarkCheck, FolderPlus } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { create } from "zustand";
import localforage from "localforage";

type BookmarkState = {
  bookmarks: Record<string, string[]>;
  collections: string[];
  addBookmark: (resourceId: string, collection: string) => Promise<void>;
  removeBookmark: (resourceId: string) => Promise<void>;
  createCollection: (name: string) => Promise<void>;
};

const useBookmarkStore = create<BookmarkState>((set) => ({
  bookmarks: {},
  collections: ["default"],
  addBookmark: async (resourceId, collection) => {
    const bookmarks =
      (await localforage.getItem<Record<string, string[]>>("bookmarks")) || {};
    const updated = {
      ...bookmarks,
      [resourceId]: [...(bookmarks[resourceId] || []), collection],
    };
    await localforage.setItem("bookmarks", updated);
    set({ bookmarks: updated });
  },
  removeBookmark: async (resourceId) => {
    const bookmarks =
      (await localforage.getItem<Record<string, string[]>>("bookmarks")) || {};
    const { [resourceId]: _, ...rest } = bookmarks;
    await localforage.setItem("bookmarks", rest);
    set({ bookmarks: rest });
  },
  createCollection: async (name) => {
    set((state) => {
      const newCollections = [...state.collections, name];
      localforage.setItem("collections", newCollections);
      return { collections: newCollections };
    });
  },
}));

export const BookmarkButton = ({ resourceId }: { resourceId: string }) => {
  const {
    bookmarks,
    collections,
    addBookmark,
    removeBookmark,
    createCollection,
  } = useBookmarkStore();
  const [isOpen, setIsOpen] = useState(false);
  const isBookmarked = !!bookmarks[resourceId];

  const handleBookmark = async (collection: string) => {
    await addBookmark(resourceId, collection);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "hover:bg-accent",
              isBookmarked && "text-primary hover:text-primary/80"
            )}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-5 h-5 fill-current" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </Button>
        </motion.div>
      </PopoverTrigger>

      <PopoverContent className="w-48 p-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          {collections.map((collection) => (
            <Button
              key={collection}
              variant="ghost"
              className="w-full justify-start"
              onClick={() => handleBookmark(collection)}
            >
              {collection}
            </Button>
          ))}
          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={() => {
              const name = prompt("Collection name:");
              if (name) createCollection(name);
            }}
          >
            <FolderPlus className="w-4 h-4" />
            New Collection
          </Button>
        </motion.div>
      </PopoverContent>
    </Popover>
  );
};
