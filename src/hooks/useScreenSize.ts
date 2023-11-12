import { useEffect, useState } from 'react'

// CUSTOM HOOK TO DYNAMICALLY CHECK WHAT WIDTH SIZE IS TO DO RWD OPERATIONS

const useScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState({
        dynamicWidth: window.innerWidth,
    })

    const setDimension = () => {
        setScreenWidth({ dynamicWidth: window.innerWidth })
    }

    const isScreenExtraSmall = screenWidth.dynamicWidth <= 575
    const isScreenSmall =
        screenWidth.dynamicWidth >= 576 && screenWidth.dynamicWidth <= 767
    const isScreenMedium =
        screenWidth.dynamicWidth >= 768 && screenWidth.dynamicWidth <= 991
    const isScreenLarge =
        screenWidth.dynamicWidth >= 992 && screenWidth.dynamicWidth <= 1199
    const isScreenExtraLarge = screenWidth.dynamicWidth >= 120
    const showDrawer = screenWidth.dynamicWidth <= 1050
    const isScreenSmallerThan767 = screenWidth.dynamicWidth < 767

    useEffect(() => {
        window.addEventListener('resize', setDimension)
        return () => {
            window.removeEventListener('resize', setDimension)
        }
    }, [screenWidth])

    return {
        isScreenSmallerThan767,
        showDrawer,
        isScreenExtraSmall,
        isScreenSmall,
        isScreenMedium,
        isScreenLarge,
        isScreenExtraLarge,
    }
}

export default useScreenSize
