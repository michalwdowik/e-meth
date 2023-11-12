import styled from 'styled-components'
import { Text } from './Text'
import Button from './Button'
import useScreenSize from '../hooks/useScreenSize'

const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: url('src/assets/HeroGradient-NoVideo.png') no-repeat center;
    background-size: cover;
    height: 600px;
    padding: 0 16px;
`

const Hero = () => {
    const isSmallScreen = useScreenSize()

    return (
        <StyledHero>
            {isSmallScreen ? (
                <>
                    <Text fontSize={40}>
                        Struggling with <br /> Volatile Crypto <br /> Markets?
                    </Text>
                    <Text fontSize={14} fontWeight="light">
                        The crypto market’s inherent volatility can turn
                        strategic dreams into sleepless nights.
                    </Text>
                </>
            ) : (
                <>
                    <Text fontSize={64}>
                        Struggling with Volatile
                        <br />
                        Crypto Markets?
                    </Text>
                    <Text fontSize={16} fontWeight="light">
                        The crypto market’s inherent volatility can turn
                        strategic dreams into sleepless nights.
                    </Text>
                </>
            )}
            <Button size="big">Join Now</Button>
        </StyledHero>
    )
}

export default Hero
