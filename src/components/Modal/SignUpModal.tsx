import styled from 'styled-components'
import useScreenSize from '../../hooks/useScreenSize'
import Text from '../Text'
import SignUpButton from '../SignUpButton'

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
    const { isScreenExtraSmall } = useScreenSize()
    return (
        <>
            <Text fontSize={32}>Join the Emeth Revolution Early!</Text>
            <Text
                lineHeight={150}
                align="left"
                fontSize={16}
                fontWeight="light"
            >
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
                    {isScreenExtraSmall ? (
                        <SignUpButton>Sign Up</SignUpButton>
                    ) : (
                        <SignUpButton>Sign Up for Early Access</SignUpButton>
                    )}
                </PositionedButton>
            </InputButtonContainer>
        </>
    )
}

export default SignUpModal

const InputButtonContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 20px;
`

interface StyledInputProps {
    isValid: boolean
}

const StyledInput = styled.input<StyledInputProps>`
    padding: 0 12px 0 24px;
    width: 100%;
    background-color: #000;
    height: 56px;
    color: #fff;
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
