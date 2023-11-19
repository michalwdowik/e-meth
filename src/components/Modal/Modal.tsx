import { useState } from 'react'
import styled, { css } from 'styled-components'
import { createPortal } from 'react-dom'
import validateEmail from '../../utils/validateEmail'
import { fadeIn, fadeOut } from '../../utils/animations'
import BeforePseudoElement from '../../utils/beforePseudoElement'
import SuccessModal from './SuccessModal'
import SignUpModal from './SignUpModal'

interface OverlayProps {
    isVisible: boolean
}

const Overlay = styled.div<OverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
    animation: ${({ isVisible }) =>
        isVisible
            ? css`
                  ${fadeIn} 0.3s ease-in-out both;
              `
            : css`
                  ${fadeOut} 0.3s ease-in-out both;
              `};
`

interface StyledModalProps {
    isVisible: boolean
}

const StyledModal = styled.div<StyledModalProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #060608;
    width: 90%;
    max-width: 768px;
    padding: 48px;
    z-index: 5;
    animation: ${({ isVisible }) =>
        isVisible
            ? css`
                  ${fadeIn} 0.3s ease-in-out both;
              `
            : css`
                  ${fadeOut} 0.3s ease-in-out both;
              `};
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    flex-direction: column;
    gap: 24px;
    &::before {
        border: 2px solid transparent;
        border-radius: 16px;
        ${BeforePseudoElement};
    }
`

interface ModalProps {
    isVisible: boolean
    onClose: (even: React.MouseEvent) => void
}

const Modal = ({ isVisible, onClose }: ModalProps) => {
    const [isSignedUp, setIsSignedUp] = useState(false)
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        setIsValidEmail(true)
    }

    const handleSignUp = () => {
        if (validateEmail(email)) {
            setIsSignedUp(true)
            setIsValidEmail(true)
        } else {
            setIsValidEmail(false)
        }
    }

    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const modalContent = isVisible && (
        <>
            <Overlay isVisible={isVisible} onClick={onClose} />
            <StyledModal isVisible={isVisible} onClick={stopPropagation}>
                {isSignedUp ? (
                    <SuccessModal onClose={onClose} />
                ) : (
                    <SignUpModal
                        handleEmailChange={handleEmailChange}
                        isValidEmail={isValidEmail}
                        handleSignUp={handleSignUp}
                    />
                )}
            </StyledModal>
        </>
    )

    return createPortal(
        modalContent,
        document.getElementById('modal-root') as HTMLElement
    )
}

export default Modal
