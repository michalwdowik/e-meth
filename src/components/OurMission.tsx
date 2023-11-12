import styled from 'styled-components'
import Badge from './Badge'
import Button from './Button'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'

const OurMissionStyled = styled.div`
    height: 559px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: ${(props) =>
        `url(${
            props.isSmallScreen
                ? 'src/assets/OurMissionMobile.png'
                : 'src/assets/OurMission.png'
        }) no-repeat right`};
    background-color: black;
    background-size: cover;
`

const OurMission = () => {
    const isSmallScreen = useScreenSize()
    return (
        <OurMissionStyled isSmallScreen={isSmallScreen}>
            <Badge>OUR MISSION</Badge>
            <Text fontWeight="bold" fontSize={isSmallScreen ? 24 : 40}>
                To streamline and automate DeFi operations, delivering <br />
                unprecedented efficiency, cost-effectiveness, and <br />
                transparency in managing digital assets.
            </Text>
            <Button size={isSmallScreen ? 'normal' : 'big'}>JOIN NOW</Button>
        </OurMissionStyled>
    )
}

export default OurMission
