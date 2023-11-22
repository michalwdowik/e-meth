import styled from 'styled-components'
import Badge from '../Badge'
import Text from '../Text'
import useScreenSize from '../../hooks/useScreenSize'
import IntroSectionContent from './IntroSectionContent'

const IntroSectionStyled = styled.div`
    margin-top: 256px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    /* border: 2px blue solid; */
    z-index: 3;
    margin-left: -112px;
    width: calc(100% + 224px);
    padding: 0 112px;
    overflow: hidden;
    position: relative;
    /* height: 1000px; */
    height: 1000px;
    margin-bottom: -120px;

    @media (max-width: 991px) {
        height: auto;
        margin-bottom: 64px;
    }

    @media (max-width: 830px) {
        padding: 80px 64px;
    }

    @media (max-width: 767px) {
        padding: 80px 24px;
        width: calc(100% + 48px);
        margin-left: -24px;
    }
`

const IntroSectionHeadingStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    margin: 0 auto;
    width: 100%;
    /* border: 2px green solid; */
    max-width: 1216px;
    width: 100%;
    padding-left: ${(props) => props.theme.margins.medium};

    @media (max-width: 991px) {
        margin-left: 0;
    }

    @media (max-width: 767px) {
        margin-top: -50px;
        margin-bottom: -50px;
        padding-left: 0;
    }
`

const GradientOverlay = styled.img`
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 0;
    width: 100%;
    height: auto;
    @media (max-width: 767px) {
        top: 40px;
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
                    lineHeight={130}
                    fontSize={isScreenSmall ? 28 : 56}
                    fontWeight="bold"
                    align="left"
                >
                    Next-Gen DeFi <br /> Portfolio Management
                </Text>
            </IntroSectionHeadingStyled>
            <IntroSectionContent />
        </IntroSectionStyled>
    )
}

export default IntroSection
