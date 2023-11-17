import { useEffect, useState } from 'react'

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
    const isScreenSmallerThan650 = screenWidth.dynamicWidth < 650
    const isScreenSmallerThan430 = screenWidth.dynamicWidth < 431
    const isScreenSmallerThan991 = screenWidth.dynamicWidth <= 991

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
        isScreenSmallerThan650,
        isScreenSmallerThan430,
        isScreenSmallerThan991,
    }
}

export default useScreenSize
