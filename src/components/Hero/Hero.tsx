import styled from 'styled-components'
import { Text } from '../Text/Text'
import Button from '../Button/Button'

const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: url('src/assets/HeroGradient-NoVideo.png') no-repeat center;
    background-size: cover;
    height: 600px;
    /* background-position: center 20%; */
`

const Hero = () => {
    return (
        <StyledHero>
            <Text fontSize={64}>
                Struggling with Volatile
                <br />
                Crypto Markets?
            </Text>
            <Text fontSize={16} fontWeight="light">
                The crypto market’s inherent volatility can turn strategic
                dreams into sleepless nights.
            </Text>
            <Button size="big">Join Now</Button>
        </StyledHero>
    )
}

export default Hero
