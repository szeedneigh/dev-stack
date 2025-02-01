'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resourceSchema } from '@/lib/utils/validation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


export default function SubmitPage() {
  const form = useForm({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      title: '',
      url: '',
      category: '',
      tags: '',
      description: ''
    }
  })

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!response.ok) throw new Error('Submission failed')
        form.reset()
    } catch (error) {
      console.error('Submission error:', error)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-2xl">
      <Input
        label="Title"
        {...form.register('title')}
        error={form.formState.errors.title}
      />
      <Input
        label="URL"
        type="url"
        {...form.register('url')}
        error={form.formState.errors.url}
      />
      <Button type="submit" loading={form.formState.isSubmitting}>
        Submit Resource
      </Button>
    </form>
  )
}
