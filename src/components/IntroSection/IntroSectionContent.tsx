import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import Text from '../Text'
import GradientText from '../GradientText'
import useScreenSize from '../../hooks/useScreenSize'

const IntroSectionContent = () => {
    const { isScreenSmall } = useScreenSize()

    return (
        <IntroSectionContentWrapper>
            {/* <Parallax translateX={[0, 10]}> */}
            <IntroSectionImg src="IntroducingEmethPicture.png" alt="Emeth" />
            {/* </Parallax> */}
            <IntroSectionDescriptionStyled>
                <Text
                    lineHeight={130}
                    fontSize={isScreenSmall ? 20 : 24}
                    fontWeight="bold"
                    align="left"
                >
                    Your Strategic Ally <br /> in Digital Asset Management
                </Text>
                <Text
                    lineHeight={160}
                    fontSize={16}
                    fontWeight="light"
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
    margin-top: 128px;
    gap: 64px;
    /* flex: 1; */
    margin-left: -90px;

    @media (max-width: 991px) {
        margin-left: 0;
        margin-top: -100px;
    }

    @media (max-width: 767px) {
        margin-top: -30px;
    }
`

const IntroSectionImg = styled.img`
    width: 100%;
    /* flex: 0; */
    /* flex-shrink: 0; */
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
    padding: 0 112px;
    width: calc(100% + 112px);

    @media (max-width: 1024px) {
    }

    @media (max-width: 991px) {
        margin-left: -64px;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 767px) {
        padding: 0 24px;
        padding-bottom: 48px;
    }
`
