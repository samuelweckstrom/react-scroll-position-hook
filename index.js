import { useState, useEffect } from 'react'

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    let lastPos = 0
    let requestRunning = false
    const handleScroll = () => {
      lastPos = window.scrollY
      requestRunning
        ? (requestRunning = true)
        : window.requestAnimationFrame(() => {
            setScrollPosition(lastPos)
            requestRunning = false
          })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return scrollPosition
}
