import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { UpvoteButton } from './UpvoteButton'


export function ResourceCard({ resource }) {
  return (
    <motion.div
      initial={{ opacity: 0, y:20 }}
      animate={{ opacity: 1, y: 0}}
      whileHover={{ scale: 1.03 }}
    >
      <Card className='p-6 space-y-4'>
        <h3 className='text-lg font-semibold'>{resource.title}</h3>
        <p className='text-muted-foreground'>{resource.description}</p>
        <div className='flex justify-between items-center'>
          <UpvoteButton initialVotes={resource.upvotes} />
          <a
            href={resource.url}
            target='_blank'
            className='text-primary hover:underline'
            >
              Visit Resource 
            </a>
        </div>
      </Card>
    </motion.div>
  )
}