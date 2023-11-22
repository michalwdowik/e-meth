import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import Text from '../Text'
import GradientText from '../GradientText'
import useScreenSize from '../../hooks/useScreenSize'

const IntroSectionContent = () => {
    const { isScreenSmall, isScreenMedium } = useScreenSize()

    return (
        <C>
            {!isScreenMedium ? (
                <Parallax
                    className="parallax-tablet"
                    speed={5}
                    translateX={['-250px', '0px']}
                >
                    <IntroSectionImg
                        src="IntroducingEmethPicture.png"
                        alt="Emeth"
                    />
                </Parallax>
            ) : null}
            <IntroSectionContentWrapper>
                <IntroSectionDescriptionStyled>
                    <Text
                        fontSize={isScreenSmall ? 20 : 24}
                        fontWeight="bold"
                        align="left"
                    >
                        Your Strategic Ally <br /> in Digital Asset Management
                    </Text>
                    <Text fontSize={16} fontWeight="light" align="left">
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
        </C>
    )
}

export default IntroSectionContent

const IntroSectionDescriptionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    width: 31%;
    margin-top: 30px;
    /* border: 2px blue solid; */

    @media (max-width: 991px) {
        width: 100%;
        margin-top: 0;
        gap: 32px;
    }
`

const IntroSectionImg = styled.img`
    flex: 0;
    flex-shrink: 0;
    /* left: -120px; */
    /* margin-left: -90px; */
    z-index: 6;
    /* border: 2px green solid; */
    /* top: 212px; */
    /* width: 75%; */
    width: 100%;
    /* max-width: 1200px; */
    position: absolute;

    @media (max-width: 991px) {
        position: static;
        /* margin-left: -50px; */
        /* left: 0; */

        /* width: 170%; */
        /* width: 150%; */
        /* margin-left: 45%; */
    }
`

const IntroSectionContentWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    max-width: 1216px;
    width: 100%;
    margin: 0 auto;
    /* border: 2px red solid; */
    position: relative;

    @media (max-width: 991px) {
        /* flex-direction: column; */
        width: 100%;
        margin: 0;
        padding: 0;
    }

    @media (max-width: 767px) {
        /* padding: 0 24px; */
        padding-bottom: 48px;
    }
`

const C = styled.div`
    width: 100%;
`
