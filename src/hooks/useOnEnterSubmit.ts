import { useEffect } from 'react'

const useOnEnterSubmit = (buttonId: string) => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                const button = document.getElementById(buttonId)
                if (button) {
                    button.click()
                }
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [buttonId])
}

export default useOnEnterSubmit
