/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import useScreenSize from '../../hooks/useScreenSize'
import HeroContent from './HeroContent'

interface StyledHeroProps {
    video: boolean
}

const StyledHero = styled.div<StyledHeroProps>`
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-top: ${(props) => (props.video ? '20px' : '64px')};
    margin-left: -112px;
    width: calc(100% + 224px);
    position: relative;

    @media (max-width: 1024px) {
        margin-left: -64px;
        width: calc(100% + 128px);
    }

    @media (max-width: 767px) {
        margin-left: -24px;
        width: calc(100% + 48px);
    }
`

const GradientBackgroundContainer = styled.div<StyledHeroProps>`
    position: absolute;
    background-color: black;
    /* top: -230px; */
    top: ${({ video }) => (video ? '-150px' : '-200px')};
    left: ${({ video }) => (video ? '0px' : '30px')};
    width: 100%;
    height: auto;
    z-index: 1;
    flex-shrink: 2;

    @media (max-width: 991px) {
        left: 0;
        top: -120px;
    }

    @media (max-width: 766px) {
        top: ${({ video }) => (video ? '-55px' : '-100px')};
        left: 0;
    }

    @media (max-width: 500px) {
        width: ${({ video }) => (video ? '100%' : '120%')};
        left: ${({ video }) => (video ? '0' : '-70px')};
    }

    @media (max-width: 400px) {
        left: ${({ video }) => (video ? '0' : '-40px')};
    }
`

const GradientBackground = styled.img`
    left: 0;
    width: 100%;
    height: auto;
    z-index: 1;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
`

interface HeroProps {
    video: boolean
}

const Hero = ({ video }: HeroProps) => {
    const { isScreenSmall } = useScreenSize()

    return (
        <StyledHero video={video}>
            <GradientBackgroundContainer video={video}>
                <Parallax style={{ zIndex: 1, width: '100%' }} speed={-10}>
                    <GradientBackground
                        src={
                            video
                                ? isScreenSmall
                                    ? 'MobileHeroGradient.png'
                                    : 'HeroGradient.png'
                                : 'HeroGradient-NoVideo.png'
                        }
                    />
                </Parallax>
            </GradientBackgroundContainer>
            <HeroContent video={video} isSmallScreen={isScreenSmall} />
        </StyledHero>
    )
}

export default Hero
