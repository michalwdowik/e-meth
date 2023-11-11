import { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { createPortal } from 'react-dom'
import { Text } from '../Text/Text'
import linearGradient from '../../utils/gradient'
import SocialMediaButtons from '../SocialMedia/SocialMediaButtons'
import CloseIcon from '../Icons/CloseIcon'
import validateEmail from '../../utils/validateEmail'
import SignUpButton from '../Button/SignUpButton'

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
        background: ${linearGradient} border-box;
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
    font-size: 16px;
`

const StyledInput = styled.input`
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
    onClose: () => void
}
const Modal = ({ isVisible, onClose }: ModalProps) => {
    const [isSignedUp, setIsSignedUp] = useState(false)
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setIsValidEmail(true) // Reset validation state when user starts typing
    }

    const handleSignUp = () => {
        if (validateEmail(email)) {
            setIsSignedUp(true)
            setIsValidEmail(true)
        } else {
            setIsValidEmail(false) // Set to false if validation fails
        }
    }

    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const modalContent = isVisible ? (
        <>
            <Overlay isVisible={isVisible} onClick={onClose} />
            <StyledModal isVisible={isVisible} onClick={stopPropagation}>
                {!isSignedUp ? (
                    <>
                        <Text fontSize={32}>
                            Join the Emeth Revolution Early!
                        </Text>
                        <Text align="left" fontSize={16} fontWeight="light">
                            Emeth is under construction, and we&apos;re excited
                            to share our journey with you. Be among the first to
                            experience the future of on-chain digital asset
                            management.
                            <br />
                            <br />
                            By signing up for our waitlist, you&apos;ll receive
                            exclusive updates, behind-the-scenes glimpses, and
                            the chance to be a part of our beta testing phase.
                            Emeth is more than just a platform; it&apos;s the
                            next step in DeFi operations and portfolio
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
                                <SignUpButton>
                                    Sign Up for Early Access
                                </SignUpButton>
                            </PositionedButton>
                        </InputButtonContainer>
                    </>
                ) : (
                    <>
                        <HeaderContainer>
                            <Text fontSize={32}>
                                Success! You&apos;re on the List!
                            </Text>
                            <StyledCloseIcon onClick={onClose}>
                                <CloseIcon />
                            </StyledCloseIcon>
                        </HeaderContainer>
                        <Text align="left" fontSize={16} fontWeight="light">
                            Thank you for signing up for early access to Emeth!
                            Your enthusiasm fuels our passion to deliver the
                            best on-chain digital asset management experience.
                            <br /> <br />
                            As a part of our exclusive waitlist, you&apos;ll be
                            among the first to receive updates, sneak peeks, and
                            invitations to our beta testing phase. <br /> <br />
                            We appreciate your trust and can&apos;t wait to
                            embark on this revolutionary journey with you. Stay
                            tuned, and get ready to redefine DeFi operations
                            with Emeth!
                        </Text>
                        <Divider />
                        <Text fontSize={16} fontWeight="light" align="left">
                            Excited about Emeth? Share the news with your
                            network and let them know you&apos;ve secured your
                            spot on the waitlist!
                        </Text>
                        <SocialMediaButtons />
                    </>
                    // ...
                )}
            </StyledModal>
        </>
    ) : null

    return createPortal(
        modalContent,
        document.getElementById('modal-root') as HTMLElement
    )
}

export default Modal
