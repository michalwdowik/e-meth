import styled from 'styled-components'
import Badge from './Badge'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'

const IntroSectionHeadingStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px red solid;
    margin-top: 96px;
`

const IntroSectionStyled = styled.div`
    display: flex;
    align-items: center;
    background-color: black;

    @media (max-width: 991px) {
        flex-direction: column;
    }
`

const IntroSectionDescriptionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    flex: 1;
    margin-left: -50px;

    @media (max-width: 991px) {
        margin-left: 0;
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
    width: 70%;
    flex: 0;
    flex-shrink: 0;
    margin-left: -180px;

    @media (max-width: 991px) {
        margin-left: 0;
        width: 130%;
        margin-right: -300px;
    }
`

const IntroSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
`

const GradientOverlay = styled.img`
    position: absolute;
    width: 100%;
    top: -168px;
    z-index: -1;
`

const IntroSection = () => {
    const { isScreenSmallerThan767 } = useScreenSize()
    return (
        <IntroSectionContainer>
            {/* {isScreenSmall && (
                <GradientOverlay src="../src/assets/IntroducingEmethGradientMobile.png" />
            )} */}

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
            <IntroSectionStyled>
                <IntroSectionImg
                    src="../src/assets/IntroducingEmethPicture.png"
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
                        <GradientText>DeFi portfolio management</GradientText>
                        , dedicated to empowering businesses, startups, and
                        crypto investors in navigating the vibrant, yet complex,
                        digital asset universe. <br /> <br /> At Emeth, we align
                        the finesse of financial automations strategies with the
                        disruptive power of decentralization, creating a
                        symbiosis that propels your business into the new era of
                        asset management.
                    </Text>
                </IntroSectionDescriptionStyled>
            </IntroSectionStyled>
        </IntroSectionContainer>
    )
}

export default IntroSection
