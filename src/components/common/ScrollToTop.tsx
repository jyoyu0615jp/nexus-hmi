import { useEffect } from 'react'
import { useLocation } from 'react-router'

interface ScrollToTopProps {
  container: React.RefObject<HTMLElement | null>
}

function ScrollToTop({
  container,
}: ScrollToTopProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    container.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [pathname, container])

  return null
}

export default ScrollToTop