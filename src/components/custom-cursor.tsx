""

import { useEffect, useState, useRef } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const rafId = useRef<number | null>(null)
  const cursorPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = () => {
      setPosition(cursorPosition.current)
      rafId.current = requestAnimationFrame(updateCursorPosition)
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorPosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseDown = () => {
      setIsClicked(true)
    }

    const handleMouseUp = () => {
      setIsClicked(false)
    }

    // Add hover effect for all interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, .hover-target, h1, h2, h3, p, span, input, .filter-btn, .project-card",
      )

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true))
        el.addEventListener("mouseleave", () => setIsHovering(false))
      })
    }

    // Only initialize on desktop
    if (window.innerWidth >= 1024) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mousedown", handleMouseDown)
      document.addEventListener("mouseup", handleMouseUp)

      // Start animation frame loop
      rafId.current = requestAnimationFrame(updateCursorPosition)

      // Use MutationObserver to detect DOM changes and re-attach hover listeners
      const observer = new MutationObserver(() => {
        setTimeout(addHoverListeners, 100)
      })
      
      observer.observe(document.body, { 
        childList: true, 
        subtree: true 
      })
      
      // Initial setup
      addHoverListeners()
      
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mousedown", handleMouseDown)
        document.removeEventListener("mouseup", handleMouseUp)
        
        // Cancel animation frame on cleanup
        if (rafId.current) {
          cancelAnimationFrame(rafId.current)
        }
        
        // Disconnect observer
        observer.disconnect()
      }
    }
  }, [])

  // Default size values
  const normalSize = 24
  const hoverSize = 44
  const clickedSize = 14
  
  // Calculate current size based on state
  const size = isClicked ? clickedSize : (isHovering ? hoverSize : normalSize)

  return (
    <svg 
      className="cursor-dot"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        mixBlendMode: "difference"
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <circle 
        cx="50" 
        cy="50" 
        r="50" 
        fill="white" 
      />
    </svg>
  )
}