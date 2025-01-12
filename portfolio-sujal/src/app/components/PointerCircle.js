'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PointerCircle() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
    >
      <div className="w-8 h-8 bg-blue-500 bg-opacity-25 rounded-full" />
    </motion.div>
  )
}

