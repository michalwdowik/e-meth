import { useEffect, useState } from 'react'

const useScreenSize = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768)

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return isSmallScreen
}

export default useScreenSize
