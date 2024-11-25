import { useEffect, useState } from 'react'

type ScreenType = 'pc' | 'mobile'

const useScreen = () => {
  const [screen, setScreen] = useState<ScreenType>(window.innerWidth >= 768 ? 'pc' : 'mobile')

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth >= 768 ? 'pc' : 'mobile')
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screen
}

export default useScreen
