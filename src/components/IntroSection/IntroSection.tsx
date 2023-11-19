import styled from 'styled-components'
import Badge from '../Badge'
import Text from '../Text'
import useScreenSize from '../../hooks/useScreenSize'
import IntroSectionContent from './IntroSectionContent'

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
            <IntroSectionContent />
        </IntroSectionStyled>
    )
}

export default IntroSection
