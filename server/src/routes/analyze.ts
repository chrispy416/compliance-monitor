import { Router, Request, Response } from 'express'
import { analyze } from '../services/huggingface'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
  const { action, guideline } = req.body

  console.log('Request body:', req.body)

  if (!action || !guideline) {
    return res.status(400).json({ error: 'action and guideline are required' })
  }

  try {
    const result = await analyze({ action, guideline })
    console.log('Result:', result)
    res.json(result)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

export default router