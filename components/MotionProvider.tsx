'use client'

import { MotionConfig } from 'motion/react'
import { motionTransitions } from '@/lib/motion'

const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={motionTransitions.ui}
    >
      {children}
    </MotionConfig>
  )
}

export default MotionProvider
