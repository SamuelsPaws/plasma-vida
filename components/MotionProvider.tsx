'use client'

import { MotionConfig } from 'motion/react'

const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </MotionConfig>
  )
}

export default MotionProvider
