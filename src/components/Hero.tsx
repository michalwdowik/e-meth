import styled from 'styled-components'
import { Text } from './Text'
import Button from './Button'
import useScreenSize from '../hooks/useScreenSize'
import VideoPlayer from './Video'

interface StyledHeroProps {
    video?: boolean
}

const StyledHero = styled.div<StyledHeroProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    /* border: 2px red solid; */
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
    }
`

const GradientBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 0;
`

interface HeroProps {
    video?: boolean
}

const Hero = ({ video }: HeroProps) => {
    const { isScreenSmallerThan767 } = useScreenSize()

    return (
        <StyledHero video={video}>
            <GradientBackground
                src={
                    isScreenSmallerThan767
                        ? 'src/assets/HeroGradient.png'
                        : 'src/assets/HeroGradient-NoVideo.png'
                }
            />
            <Text fontSize={isScreenSmallerThan767 ? 40 : 64}>
                Struggling with Volatile
                <br />
                Crypto Markets?
            </Text>
            <Text
                fontSize={isScreenSmallerThan767 ? 14 : 16}
                fontWeight="light"
            >
                The crypto market’s inherent volatility can turn strategic
                dreams into sleepless nights.
            </Text>

            {isScreenSmallerThan767 ? (
                <VideoPlayer />
            ) : (
                <Button size="big">Join Now</Button>
            )}
        </StyledHero>
    )
}

export default Hero
