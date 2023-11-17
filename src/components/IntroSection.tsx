import styled from 'styled-components'
import Badge from './Badge'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'

const IntroSectionStyled = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    position: relative;
`

const IntroSectionHeadingStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 124px;
    margin-left: 80px;

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

const GradientText = styled.span`
    background: linear-gradient(
        160deg,
        #da301f 0%,
        #f48946 18.229%,
        #ee3560 35.417%,
        #fa4784 51.563%,
        #ff48c0 100%
    );
    font-weight: bold;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline;
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
    top: 80px;
    left: 0;
    width: calc(100% + 48px);
    margin-left: -24px;
    z-index: 1;

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
    const { isScreenSmallerThan767, isScreenSmallerThan991 } = useScreenSize()

    return (
        <IntroSectionStyled>
            {isScreenSmallerThan991 && (
                <GradientOverlay src="IntroducingEmethGradientMobile.png" />
            )}
            <IntroSectionHeadingStyled>
                <Badge>INTRODUCING EMETH</Badge>
                <Text
                    fontSize={isScreenSmallerThan767 ? 28 : 56}
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
                        fontSize={isScreenSmallerThan767 ? 20 : 24}
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
                        <GradientText>DeFi portfolio management</GradientText>,
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
