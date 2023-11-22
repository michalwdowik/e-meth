import styled from 'styled-components'
import Text from '../Text'
import VideoPlayer from '../Video'
import Button from '../Button'

interface HeroContentProps {
    isSmallScreen: boolean
    video: boolean
}
interface HeroContentStyledProps {
    video: boolean
}

const HeroContentStyled = styled.div<HeroContentStyledProps>`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${(props) => (props.video ? '120px' : '64px')};
    /* max-width: 786px; */
    /* width: 80%; */

    @media (max-width: 767px) {
        gap: 48px;
    }
`

const HeroTextStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
    /* border: 2px blue solid; */
    text-align: justify;
    width: 100%;
    /* max-width: 786px; */

    @media (max-width: 1024px) {
        /* width: calc(100% + 128px); */
    }

    @media (max-width: 767px) {
        /* max-width: 600px; */
        /* width: calc(100% + 30px); */
        gap: 48px;
    }
`

const HeroSubtitleStyled = styled.div`
    width: 75%;

    @media (max-width: 864px) {
        width: 100%;
    }

    @media (max-width: 767px) {
        width: 75%;
    }

    @media (max-width: 520px) {
        width: 100%;
    }
`

const HeroContent = ({ isSmallScreen, video }: HeroContentProps) => {
    return (
        <HeroContentStyled video={video}>
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
            {video ? (
                <VideoPlayer />
            ) : (
                <Button fontSize={18} size="big">
                    Join Now
                </Button>
            )}
        </HeroContentStyled>
    )
}

export default HeroContent
