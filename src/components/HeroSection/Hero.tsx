import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import useScreenSize from '../../hooks/useScreenSize'
import HeroContent from './HeroContent'

interface StyledHeroProps {
    video?: boolean
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
        margin-top: 20px;
    }

    @media (max-width: 767px) {
        margin-left: -24px;
        width: calc(100% + 48px);
    }
`

const GradientBackgroundContainer = styled.div`
    position: absolute;
    background-color: black;
    top: -200px;
    width: 100%;
    height: auto;
    z-index: 1;

    @media (max-width: 991px) {
        top: -120px;
    }

    @media (max-width: 766px) {
        top: 65px;
    }
`

const GradientBackground = styled.img`
    left: 0;
    width: 100%;
    height: auto;
    z-index: 1;
`

interface HeroProps {
    video?: boolean
}

const Hero = ({ video }: HeroProps) => {
    const { isScreenSmall } = useScreenSize()

    return (
        <StyledHero video={video}>
            <GradientBackgroundContainer>
                <Parallax style={{ zIndex: 1, width: '100%' }} speed={-10}>
                    <GradientBackground
                        src={
                            isScreenSmall
                                ? 'MobileHeroGradient.png'
                                : 'HeroGradient-NoVideo.png'
                        }
                    />
                </Parallax>
            </GradientBackgroundContainer>
            <HeroContent isSmallScreen={isScreenSmall} />
        </StyledHero>
    )
}

export default Hero
