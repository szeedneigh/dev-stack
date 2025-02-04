import { microlink } from '@microlink/react'
import { supabase } from '../config/supabase'

export async function captureScreenshot(url: string): Promise<string> {
  try {
    const { data } = await microlink(url, {
      screenshot: true,
      waitFor: 2000,
      viewport: { width: 1280, height: 720 },
      element: 'body'
    })

    const { data: uploadData, error } = await supabase.storage
      .from('previews')
      .upload(`/${Date.now()}.png`, data.screenshot)

      if (error) throw error

      return supabase.storage
        .from('previews')
        .getPublicUrl(uploadData.path).data.publicUrl

  } catch (error) {
    console.error('Screenshot capture failed:', error)
    return ''
  }
}