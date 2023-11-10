import styled from 'styled-components'
import { Text } from '../Text/Text'

const StyledHero = styled.div`
    height: 559px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: url('src/assets/HeroGradient2.png') no-repeat center;
    background-size: contain;
`

const Hero = () => {
    return (
        <StyledHero>
            <Text
                fontSize={64}
            >{`Struggling with Volatile\nCrypto Markets?`}</Text>
            <Text fontSize={16} fontWeight="light">
                The crypto market’s inherent volatility can turn strategic
                dreams into sleepless nights.
            </Text>
        </StyledHero>
    )
}

export default Hero
