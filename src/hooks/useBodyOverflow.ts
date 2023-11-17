import { useEffect } from 'react'

const useBodyOverflow = (isOpen: boolean) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])
}

export default useBodyOverflow
