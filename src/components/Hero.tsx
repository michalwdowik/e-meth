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
    background-color: black;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-top: ${(props) => (props.video ? '20px' : '64px')};
    margin-left: -112px;
    width: calc(100% + 224px);

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
    top: 0;
    width: 100%;
    height: auto;
    z-index: 1;

    @media (max-width: 766px) {
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

const HeroContentStyled = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    max-width: 786px;
    width: 80%;
`

const HeroTextStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    text-align: justify;
    width: 100%;
    max-width: 786px;

    @media (max-width: 1024px) {
        width: calc(100% + 128px);
    }

    @media (max-width: 767px) {
        width: calc(100% + 30px);
    }
`

const HeroSubtitleStyled = styled.div`
    width: 75%;

    @media (max-width: 430px) {
        width: 100%;
    }
`

const HeroContent = ({ isSmallScreen }: HeroContentProps) => {
    return (
        <HeroContentStyled>
            <HeroTextStyled>
                <Text fontSize={isSmallScreen ? 40 : 64}>
                    Struggling with Volatile Crypto Markets?
                </Text>
                <HeroSubtitleStyled>
                    <Text fontSize={isSmallScreen ? 14 : 16} fontWeight="light">
                        The crypto market’s inherent volatility can turn
                        strategic dreams into sleepless nights.
                    </Text>
                </HeroSubtitleStyled>
            </HeroTextStyled>
            {isSmallScreen ? (
                <VideoPlayer />
            ) : (
                <Button size="big">Join Now</Button>
            )}
        </HeroContentStyled>
    )
}

const Hero = ({ video }: HeroProps) => {
    const { isScreenSmallerThan767 } = useScreenSize()

    return (
        <StyledHero video={video}>
            <GradientBackgroundContainer>
                <Parallax style={{ zIndex: 1, width: '100%' }} speed={-10}>
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
