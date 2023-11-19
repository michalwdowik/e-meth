import styled from 'styled-components'
import Text from '../Text'
import GradientText from '../GradientText'
import useScreenSize from '../../hooks/useScreenSize'

const IntroSectionContent = () => {
    const { isScreenSmall } = useScreenSize()

    return (
        <IntroSectionContentWrapper>
            <IntroSectionImg src="IntroducingEmethPicture.png" alt="Emeth" />
            <IntroSectionDescriptionStyled>
                <Text
                    fontSize={isScreenSmall ? 20 : 24}
                    fontWeight="bold"
                    align="left"
                >
                    Your Strategic Ally <br /> in Digital Asset Management
                </Text>
                <Text
                    fontSize={16}
                    fontWeight="light"
                    color="grey"
                    align="left"
                >
                    In a realm where decentralization meets finance, Emeth
                    stands out as the beacon of intelligent
                    <GradientText> DeFi portfolio management</GradientText>,
                    dedicated to empowering businesses, startups, and crypto
                    investors in navigating the vibrant, yet complex, digital
                    asset universe. <br /> <br /> At Emeth, we align the finesse
                    of financial automations strategies with the disruptive
                    power of decentralization, creating a symbiosis that propels
                    your business into the new era of asset management.
                </Text>
            </IntroSectionDescriptionStyled>
        </IntroSectionContentWrapper>
    )
}

export default IntroSectionContent

const IntroSectionDescriptionStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    gap: 64px;
    flex: 1;
    margin-left: -90px;

    @media (max-width: 991px) {
        margin-left: 0;
        margin-top: 0;
    }
`

const IntroSectionImg = styled.img`
    width: 95%;
    flex: 0;
    flex-shrink: 0;
    margin-left: -20%;
    z-index: 3;

    @media (max-width: 991px) {
        width: 150%;
        margin-left: 45%;
    }
`

const IntroSectionContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;

    @media (max-width: 991px) {
        flex-direction: column;
        align-items: center;
    }
`
