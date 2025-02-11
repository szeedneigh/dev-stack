"use client"

import { ResourceGrid } from "@/components/resources/ResourceGrid";
import { CategoryFilter } from "@/components/search/CategoryFilter";
import { SearchInput } from "@/components/search/SearchInput";
import { useSearch } from "@/lib/hooks/useSearch";
import { useState } from "react";
import { Resource } from "@/lib/utils/validation";

export default function HomePage() {
  const [category, setCategory] = useState<Resource | undefined>();
  const [searchQuery, setSearchQuery] = useState("");
  const { resources, isLoading } = useSearch({ category, query: searchQuery });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchInput
          value={searchQuery}
          onChange={(value) => setSearchQuery(value)}
          className="w-full sm:w-96"
        />
        <CategoryFilter
          selectedCategory={category}
          onCategoryChange={setCategory}
        />
      </div>
      <ResourceGrid resources={resources} isLoading={isLoading} />
    </div>
  )
}