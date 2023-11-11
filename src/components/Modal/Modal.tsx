import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { createPortal } from 'react-dom'
import { Text } from '../Text/Text'
import Button from '../Button/Button'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

interface OverlayProps {
    isVisible: boolean
}

const Overlay = styled.div<OverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
    animation: ${({ isVisible }) =>
        isVisible
            ? css`
                  ${fadeIn} 0.3s ease-in-out both
              `
            : css`
                  ${fadeOut} 0.3s ease-in-out both
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
    padding: 48px;
    z-index: 4;
    animation: ${({ isVisible }) =>
        isVisible
            ? css`
                  ${fadeIn} 0.3s ease-in-out both
              `
            : css`
                  ${fadeOut} 0.3s ease-in-out both
              `};
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 16px;
        border: 2px solid transparent;
        background: linear-gradient(
                160deg,
                #da301f 0%,
                #f48946 18.229%,
                #ee3560 35.417%,
                #fa4784 51.563%,
                #ff48c0 66.667%,
                #8e38b5 81.771%,
                #5542bb 89.063%,
                #0051c4 100%
            )
            border-box;
        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
    }
`

const InputButtonContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 20px;
`

const StyledInput = styled.input`
    width: calc(
        100% - 120px
    ); // Adjust the subtracted value based on the button width
    padding: 12px;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: text;
    border-radius: 56px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
    ::placeholder {
        color: #555;
    }
    :focus {
        outline: none;
        border-color: #da301f;
    }
`

const PositionedButton = styled(Button)`
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 56px;
    height: 100%;
`

interface ModalProps {
    isVisible: boolean
    onClose: () => void
}
const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const modalContent = isVisible ? (
        <>
            <Overlay isVisible={isVisible} onClick={onClose} />
            <StyledModal isVisible={isVisible} onClick={stopPropagation}>
                <Text fontSize={32}>Join the Emeth Revolution Early!</Text>
                <Text align="left" fontSize={16} fontWeight="light">
                    Emeth is under construction, and we&apos;re excited to share
                    our journey with you. Be among the first to experience the
                    future of on-chain digital asset management.
                    <br />
                    <br />
                    By signing up for our waitlist, you&apos;ll receive
                    exclusive updates, behind-the-scenes glimpses, and the
                    chance to be a part of our beta testing phase. Emeth is more
                    than just a platform; it&apos;s the next step in DeFi
                    operations and portfolio management.
                    <br />
                    <br />
                    Don&apos;t miss out!
                </Text>
                <InputButtonContainer placeholder="Enter your e-mail address...">
                    <StyledInput placeholder="Enter your e-mail address..." />
                    <PositionedButton>
                        Sign Up for Early Access
                    </PositionedButton>
                </InputButtonContainer>
            </StyledModal>
        </>
    ) : null

    return createPortal(
        modalContent,
        document.getElementById('modal-root') as HTMLElement // This element should exist in your HTML
    )
}

export default Modal