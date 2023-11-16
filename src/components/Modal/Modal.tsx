import { useState } from 'react'
import styled, { css } from 'styled-components'
import { createPortal } from 'react-dom'
import { Text } from '../Text'
import SocialMediaButtons from '../SocialMediaButtons'
import CloseIcon from '../Icons/CloseIcon'
import validateEmail from '../../utils/validateEmail'
import SignUpButton from '../SignUpButton'
import { fadeIn, fadeOut } from '../../utils/animations'
import BeforePseudoElement from '../../utils/beforePseudoElement'

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
    width: 100%;
    max-width: 768px;
    margin: 0 16px;
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
    align-items: flex-start;
    &::before {
        border: 2px solid transparent;
        border-radius: 16px;
        ${BeforePseudoElement};
    }
`

const InputButtonContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 20px;
    font-size: 16px;
`

interface StyledInputProps {
    isValid: boolean
}

const StyledInput = styled.input<StyledInputProps>`
    padding: 12px;
    width: 100%;
    border: none;
    background-color: #000;
    height: 56px;
    color: #fff;
    cursor: text;
    position: relative;
    border-radius: 56px;
    border: 1px solid
        ${({ isValid }) => (isValid ? 'rgba(255, 255, 255, 0.5)' : 'red')};
    :focus {
        outline: none;
        border-color: ${({ isValid }) => (isValid ? '#da301f' : 'red')};
    }
    background: rgba(255, 255, 255, 0.1);
    ::placeholder {
        color: #555;
    }
    :focus {
        outline: none;
        border-color: #da301f;
    }
`

const PositionedButton = styled.div`
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(calc(-50%));
`

const Divider = styled.div`
    width: 100%;
    border-top: 1px solid grey;
`

const StyledCloseIcon = styled.button`
    cursor: pointer;
    z-index: 1;
    background-color: transparent;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

interface ModalProps {
    isVisible: boolean
    onClose: (event: React.MouseEvent) => void
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

    const modalContent = isVisible ? (
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
    ) : null

    return createPortal(
        modalContent,
        document.getElementById('modal-root') as HTMLElement
    )
}

interface SuccessModalProps {
    onClose: (event: React.MouseEvent) => void
}

const SuccessModal = ({ onClose }: SuccessModalProps) => {
    return (
        <>
            <HeaderContainer>
                <Text fontSize={32}>Success! You&apos;re on the List!</Text>
                <StyledCloseIcon onClick={onClose}>
                    <CloseIcon />
                </StyledCloseIcon>
            </HeaderContainer>
            <Text align="left" fontSize={16} fontWeight="light">
                Thank you for signing up for early access to Emeth! Your
                enthusiasm fuels our passion to deliver the best on-chain
                digital asset management experience.
                <br /> <br />
                As a part of our exclusive waitlist, you&apos;ll be among the
                first to receive updates, sneak peeks, and invitations to our
                beta testing phase. <br /> <br />
                We appreciate your trust and can&apos;t wait to embark on this
                revolutionary journey with you. Stay tuned, and get ready to
                redefine DeFi operations with Emeth!
            </Text>
            <Divider />
            <Text fontSize={16} fontWeight="light" align="left">
                Excited about Emeth? Share the news with your network and let
                them know you&apos;ve secured your spot on the waitlist!
            </Text>
            <SocialMediaButtons />
        </>
    )
}

interface SignUpModalProps {
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isValidEmail: boolean
    handleSignUp: () => void
}

const SignUpModal = ({
    handleEmailChange,
    isValidEmail,
    handleSignUp,
}: SignUpModalProps) => {
    return (
        <>
            <Text fontSize={32}>Join the Emeth Revolution Early!</Text>
            <Text align="left" fontSize={16} fontWeight="light">
                Emeth is under construction, and we&apos;re excited to share our
                journey with you. Be among the first to experience the future of
                on-chain digital asset management.
                <br />
                <br />
                By signing up for our waitlist, you&apos;ll receive exclusive
                updates, behind-the-scenes glimpses, and the chance to be a part
                of our beta testing phase. Emeth is more than just a platform;
                it&apos;s the next step in DeFi operations and portfolio
                management.
                <br />
                <br />
                Don&apos;t miss out!
            </Text>
            <InputButtonContainer>
                <StyledInput
                    placeholder="Enter your e-mail address..."
                    onChange={handleEmailChange}
                    isValid={isValidEmail}
                />
                <PositionedButton onClick={handleSignUp}>
                    <SignUpButton>Sign Up for Early Access</SignUpButton>
                </PositionedButton>
            </InputButtonContainer>
        </>
    )
}

export default Modal
