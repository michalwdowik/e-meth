import styled from 'styled-components'
import Badge from './Badge'
import { Text } from './Text'

// Styled components
const IntroSectionHeadingStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 64px 64px 134px 64px;
`

const IntroSectionStyled = styled.div`
    display: flex;
    align-items: center;
`

const IntroSectionDescriptionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    margin-bottom: 128px;
`

const GradientText = styled.span`
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
    );
    font-weight: bold;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline;
`

const IntroSection = () => {
    return (
        <>
            <IntroSectionHeadingStyled>
                <Badge>INTRODUCING EMETH</Badge>
                <Text fontSize={56} fontWeight="bold" align="left">
                    Next-Gen DeFi <br /> Portfolio Management
                </Text>
            </IntroSectionHeadingStyled>
            <IntroSectionStyled>
                <img
                    style={{ width: '60%' }}
                    src="../src/assets/IntroducingEmethPicture.png"
                    alt="Emeth"
                />
                <IntroSectionDescriptionStyled>
                    <Text fontSize={24} fontWeight="bold" align="left">
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
        </>
    )
}

export default IntroSection
