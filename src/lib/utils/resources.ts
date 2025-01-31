import { supabase } from "@/lib/config/supabase";

export interface Resource {
  id: string
  title: string
  url: string
  description: string
  category: string
  tags: string[]
  upvotes: number
  created_at: string
}

export const getResources = async (): Promise<Resource[]> => {
  const { data, error } = await supabase
  .from('resources')
  .select('*')
  .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export const addResource = async (resource: Omit<Resource, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
  .from('resources')
  .insert([resource])
  .select()

  if (error) throw error
  return data[0]
}