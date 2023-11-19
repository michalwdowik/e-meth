import { useEffect, useState } from 'react'

const useScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState({
        dynamicWidth: window.innerWidth,
    })

    const setDimension = () => {
        setScreenWidth({ dynamicWidth: window.innerWidth })
    }

    const isScreenExtraSmall = screenWidth.dynamicWidth <= 575
    const isScreenSmall = screenWidth.dynamicWidth < 767
    const isScreenMedium = screenWidth.dynamicWidth <= 991

    useEffect(() => {
        window.addEventListener('resize', setDimension)
        return () => {
            window.removeEventListener('resize', setDimension)
        }
    }, [screenWidth])

    return {
        isScreenSmall,
        isScreenExtraSmall,
        isScreenMedium,
    }
}

export default useScreenSize
