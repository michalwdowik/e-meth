import { useEffect, useState } from 'react'

const useAllowScroll = (ref) => {
    const [allowScroll, setAllowScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return

            const elementRect = ref.current.getBoundingClientRect()
            const isElementAboveViewport = elementRect.top <= 100

            setAllowScroll(isElementAboveViewport)
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        console.log(allowScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [ref, allowScroll])

    return allowScroll
}

export default useAllowScroll
