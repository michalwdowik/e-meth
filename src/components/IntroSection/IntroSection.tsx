import styled from 'styled-components'
import Badge from '../Badge/Badge'
import { Text } from '../Text/Text'
import './intro-section.css'

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
const IntroSection = () => {
    return (
        <>
            <IntroSectionHeadingStyled className="intro-section">
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
                        stands out as the beacon of intelligent{' '}
                        <span className="gradient-text">
                            DeFi portfolio management
                        </span>
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
