export type Category = {
  id: number;
  name: string;
};

export type Resource = {
  id: string;
  title: string;
  url: string;
  description: string | null;
  category_id: number;
  upvotes: number;
  created_at: string; 
};


export type ResourceWithCategory = Resource & {
  categories: Category;
};

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: Category;
        Insert: Omit<Category, 'id'>;
        Update: Partial<Category>;
      };
      resources: {
        Row: Resource;
        Insert: Omit<Resource, 'id' | 'created_at' | 'upvotes'> & { upvotes?: number };
        Update: Partial<Resource>;
      };
    };
  };
};