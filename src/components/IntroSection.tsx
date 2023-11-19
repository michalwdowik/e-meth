import styled from 'styled-components'
import Badge from './Badge'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'
import GradientText from './GradientText'

const IntroSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    position: relative;
    overflow-x: hidden;
    margin-left: -112px;
    width: calc(100% + 224px);
    padding: 0 112px 0 0;
    @media (max-width: 991px) {
        margin-top: 50px;
        margin-left: -64px;
        width: calc(100% + 128px);
        padding: 80px 64px;
    }

    @media (max-width: 830px) {
        margin-top: -50px;
    }

    @media (max-width: 767px) {
        margin-top: 350px;
    }

    @media (max-width: 700px) {
        margin-top: 250px;
    }

    @media (max-width: 600px) {
        margin-top: 150px;
    }

    @media (max-width: 500px) {
        margin-top: 20px;
    }
`

const IntroSectionHeadingStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 124px;
    margin-left: 80px;
    overflow: hidden;

    @media (min-width: 1445px), (max-width: 991px) {
        margin-left: 0;
    }

    @media (max-width: 767px) {
        margin-top: 0;
    }
`

const IntroSectionContent = styled.div`
    display: flex;
    align-items: flex-start;

    @media (max-width: 991px) {
        flex-direction: column;
        align-items: center;
    }
`

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

const GradientOverlay = styled.img`
    position: absolute;
    top: 150px;
    left: 0;
    width: calc(100% + 48px);
    margin-left: -24px;
    z-index: 0;

    @media (max-width: 991px) {
        width: calc(100% + 128px);
        margin-left: -64px;
    }

    @media (max-width: 767px) {
        width: calc(100% + 48px);
        margin-left: -24px;
    }
`
const IntroSection = () => {
    const { isScreenSmall, isScreenMedium } = useScreenSize()

    return (
        <IntroSectionStyled>
            {isScreenMedium && (
                <GradientOverlay src="IntroducingEmethGradientMobile.png" />
            )}
            <IntroSectionHeadingStyled>
                <Badge>INTRODUCING EMETH</Badge>
                <Text
                    fontSize={isScreenSmall ? 28 : 56}
                    fontWeight="bold"
                    align="left"
                >
                    Next-Gen DeFi <br /> Portfolio Management
                </Text>
            </IntroSectionHeadingStyled>
            <IntroSectionContent>
                <IntroSectionImg
                    src="IntroducingEmethPicture.png"
                    alt="Emeth"
                />
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
                        investors in navigating the vibrant, yet complex,
                        digital asset universe. <br /> <br /> At Emeth, we align
                        the finesse of financial automations strategies with the
                        disruptive power of decentralization, creating a
                        symbiosis that propels your business into the new era of
                        asset management.
                    </Text>
                </IntroSectionDescriptionStyled>
            </IntroSectionContent>
        </IntroSectionStyled>
    )
}

export default IntroSection
