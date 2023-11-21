import styled from 'styled-components'
import Text from '../Text'
import VideoPlayer from '../Video'
import Button from '../Button'

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
                <Text lineHeight={120} fontSize={isSmallScreen ? 40 : 64}>
                    Struggling with Volatile Crypto Markets?
                </Text>
                <HeroSubtitleStyled>
                    <Text
                        lineHeight={160}
                        fontSize={isSmallScreen ? 14 : 16}
                        fontWeight="light"
                    >
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

export default HeroContent
