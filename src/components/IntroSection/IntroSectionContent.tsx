import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import Text from '../Text'
import GradientText from '../GradientText'
import useScreenSize from '../../hooks/useScreenSize'

const IntroSectionContentContainer = styled.div`
    width: 100%;
`

const IntroSectionContent = () => {
    const { isScreenSmall, isScreenMedium } = useScreenSize()

    return (
        <IntroSectionContentContainer>
            <IntroSectionContentWrapper>
                {!isScreenMedium ? (
                    <Parallax
                        className="parallax-tablet"
                        speed={0}
                        translateX={['-250px', '-50px']}
                    >
                        <IntroSectionImg
                            src="IntroducingEmethPicture.png"
                            alt="Emeth"
                        />
                    </Parallax>
                ) : null}
                <IntroSectionDescriptionStyled>
                    <Text
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
                        investors in navigating the vibrant, yet complex,
                        digital asset universe. <br /> <br /> At Emeth, we align
                        the finesse of financial automations strategies with the
                        disruptive power of decentralization, creating a
                        symbiosis that propels your business into the new era of
                        asset management.
                    </Text>
                </IntroSectionDescriptionStyled>
            </IntroSectionContentWrapper>
        </IntroSectionContentContainer>
    )
}

export default IntroSectionContent

const IntroSectionDescriptionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    width: 31%;
    margin-top: 30px;

    @media (max-width: 991px) {
        width: 100%;
        margin-top: 0;
        gap: 32px;
    }
`

const IntroSectionImg = styled.img`
    width: 70%;
    z-index: 6;
`

const IntroSectionContentWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    max-width: 1216px;
    width: 100%;
    gap: 64px;
    margin: 0 auto;
    position: relative;

    @media (max-width: 991px) {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    @media (max-width: 767px) {
        padding-bottom: 48px;
    }
`
