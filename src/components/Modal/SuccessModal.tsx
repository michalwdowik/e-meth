import styled from 'styled-components'
import SocialMediaButtonsModal from '../SocialMediaButtonsModal'
import Text from '../Text'
import useScreenSize from '../../hooks/useScreenSize'
import CloseIcon from '../Icons/CloseIcon'

interface SuccessModalProps {
    onClose: (event: React.MouseEvent) => void
}

const SuccessModal = ({ onClose }: SuccessModalProps) => {
    const { isScreenSmall } = useScreenSize()
    return (
        <>
            <HeaderContainer>
                <Text lineHeight={130} fontSize={isScreenSmall ? 20 : 32}>
                    Success! You&apos;re on the List!
                </Text>
                <StyledCloseIcon onClick={onClose}>
                    <CloseIcon />
                </StyledCloseIcon>
            </HeaderContainer>
            <Text
                lineHeight={150}
                align="left"
                fontSize={isScreenSmall ? 12 : 16}
                fontWeight="light"
            >
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
            <Text
                lineHeight={150}
                fontSize={isScreenSmall ? 12 : 16}
                fontWeight="light"
                align="left"
            >
                Excited about Emeth? Share the news with your network and let
                them know you&apos;ve secured your spot on the waitlist!
            </Text>
            <SocialMediaButtonsModal />
        </>
    )
}

export default SuccessModal

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
