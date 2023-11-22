import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import Badge from '../Badge'
import Text from '../Text'
import useScreenSize from '../../hooks/useScreenSize'
import IntroSectionContent from './IntroSectionContent'

interface IntroSectionStyledProps {
    video: boolean
}

const IntroSectionStyled = styled.div<IntroSectionStyledProps>`
    margin-top: 256px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    /* border: 2px blue solid; */
    z-index: 3;
    margin-left: -112px;
    width: calc(100% + 224px);
    padding: 0 112px;
    position: relative;
    /* height: 1000px; */
    height: 1000px;
    margin-bottom: -80px;
    /* border: 2px d solid; */
    margin-top: ${(props) => (props.video ? '250px' : '100px')};
    @media (max-width: 991px) {
        height: auto;
        margin-bottom: 150px;
        /* overflow: hidden; */
    }

    @media (max-width: 830px) {
        padding: 80px 64px;
    }

    @media (max-width: 767px) {
        padding: 80px 16px 0 16px;
        width: calc(100% + 32px);
        margin-left: -16px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    @media (max-width: 500px) {
        margin-bottom: -50px;
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
    padding-bottom: 32px;
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
    /* left: 0; */
    z-index: -1;
    width: 100%;
    height: auto;
    /* width: calc(100% + 112px); */
    margin-left: -112px;

    @media (max-width: 830px) {
        margin-left: -64px;
    }

    @media (max-width: 767px) {
        top: 80px;
        /* border: 2px red solid;
        width: calc(100% + 32px);
        margin-left: -16px; */
        margin-left: -16px;
    }
`
interface IntroSectionProps {
    video: boolean
}

const IntroSection = ({ video }: IntroSectionProps) => {
    const { isScreenSmall, isScreenMedium } = useScreenSize()

    return (
        <IntroSectionStyled video={video}>
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
            <Parallax
                className="parallax-tablet-small"
                speed={5}
                translateX={['150px', '0px']}
            >
                <IntroSectionImgSmall
                    src="IntroducingEmethPictureMobile.png"
                    alt="Emeth"
                />
            </Parallax>
            <IntroSectionContent />
        </IntroSectionStyled>
    )
}

export default IntroSection

const IntroSectionImgSmall = styled.img`
    overflow: hidden;
    width: calc(100% + 112px);
    display: none;
    /* margin-left: 112px; */
    /* width: 100%; */
    /* border: 2px red solid; */

    @media (max-width: 991px) {
        display: flex;
        /* margin-left: 112px; */
    }

    @media (max-width: 830px) {
        width: calc(100% + 64px);
    }

    @media (max-width: 767px) {
        width: calc(100% + 16px);
        /* margin-left: 16px; */
    }
`
