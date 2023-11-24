/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import { ScrollParallax } from 'react-just-parallax'
import useScreenSize from '../../hooks/useScreenSize'
import HeroContent from './HeroContent'

const HeroWrapper = styled.div`
    width: 100%;
    padding: 0 208px;
    width: 100%;
    position: relative;

    @media (max-width: 1200px) {
        padding: 0 104px;
    }

    @media (max-width: 991px) {
        padding: 0;
    }

    @media (max-width: 767px) {
        width: calc(100% + 32px);
        padding: 0 16px;
        margin-left: -16px;
    }
`

interface StyledHeroProps {
    video: boolean
}

const StyledHero = styled.div<StyledHeroProps>`
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding-top: ${(props) => (props.video ? '80px' : '100px')};

    max-width: 786px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 767px) {
        padding-top: 56px;
    }
`

interface GradientBackgroundProps {
    video: boolean
}
const GradientBackground = styled.img<GradientBackgroundProps>`
    height: auto;
    z-index: 1;
    max-width: 1250px;
    margin: 0 auto;
    display: flex;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: ${({ video }) => (video ? '-20px' : '-100px')};

    right: 0;

    @media (max-width: 1440px) {
        width: 100%;
    }
    @media (max-width: 1200px) {
        top: 50px;
    }
    @media (max-width: 991px) {
        top: 120px;
        width: 100%;
    }

    @media (max-width: 767px) {
        top: -40px;
        left: ${({ video }) => (video ? '0' : '-70px')};
    }

    @media (max-width: 560px) {
        top: 50px;
        left: ${({ video }) => (video ? '0' : '-40px')};
    }

    @media (max-width: 450px) {
        top: ${({ video }) => (video ? '370px' : '270px')};

        left: ${({ video }) => (video ? '0' : '-20px')};
        margin-top: -250px;
    }
`

interface HeroProps {
    video: boolean
}

const Hero = ({ video }: HeroProps) => {
    const { isScreenSmall } = useScreenSize()

    return (
        <HeroWrapper>
            <ScrollParallax isAbsolutelyPositioned>
                <GradientBackground
                    video={video}
                    src={
                        video
                            ? isScreenSmall
                                ? 'MobileHeroGradient.png'
                                : 'HeroGradient.png'
                            : 'HeroGradient-NoVideo.png'
                    }
                />
            </ScrollParallax>
            <StyledHero video={video}>
                <HeroContent video={video} isSmallScreen={isScreenSmall} />
            </StyledHero>
        </HeroWrapper>
    )
}

export default Hero
