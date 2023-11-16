import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import { Text } from './Text'
import Button from './Button'
import useScreenSize from '../hooks/useScreenSize'
import VideoPlayer from './Video'

interface StyledHeroProps {
    video?: boolean
}

const StyledHero = styled.div<StyledHeroProps>`
    display: flex;
    margin-top: -50px;
    background-color: black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 0 16px;
    padding-top: ${(props) => (props.video ? '200px' : '140px')};
    margin-left: -112px;
    width: calc(100% + 224px);

    @media (max-width: 1024px) {
        margin-left: -64px;
        width: calc(100% + 128px);
        padding: 0 64px;
        padding-top: ${(props) => (props.video ? '200px' : '140px')};
    }

    @media (max-width: 767px) {
        padding: 80px 24px 24px 24px;
        margin-left: -24px;
        width: calc(100% + 48px);
        margin-top: -70px;
    }
`

const GradientBackgroundContainer = styled.div`
    position: absolute;
    background-color: black;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 1;

    @media (max-width: 767px) {
        top: 200px;
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

interface HeroContentProps {
    isSmallScreen: boolean
}

const HeroContent = ({ isSmallScreen }: HeroContentProps) => {
    return (
        <>
            <Text fontSize={isSmallScreen ? 40 : 64}>
                Struggling with Volatile Crypto Markets?
            </Text>
            <Text fontSize={isSmallScreen ? 14 : 16} fontWeight="light">
                The crypto market’s inherent volatility can turn strategic
                dreams into sleepless nights.
            </Text>
            {isSmallScreen ? (
                <VideoPlayer />
            ) : (
                <Button size="big">Join Now</Button>
            )}
        </>
    )
}

const Hero = ({ video }: HeroProps) => {
    const { isScreenSmallerThan767 } = useScreenSize()

    return (
        <StyledHero video={video}>
            <GradientBackgroundContainer>
                <Parallax style={{ zIndex: 1, width: '100%' }} speed={-15}>
                    <GradientBackground
                        src={
                            isScreenSmallerThan767
                                ? 'MobileHeroGradient.png'
                                : 'HeroGradient-NoVideo.png'
                        }
                    />
                </Parallax>
            </GradientBackgroundContainer>
            <HeroContent isSmallScreen={isScreenSmallerThan767} />
        </StyledHero>
    )
}

export default Hero
