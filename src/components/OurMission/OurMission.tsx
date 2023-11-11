import styled from 'styled-components'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import { Text } from '../Text/Text'

const OurMissionStyled = styled.div`
    height: 559px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: url('src/assets/OurMission.png') no-repeat right;
    background-color: black;
`

const OurMission = () => {
    return (
        <OurMissionStyled>
            <Badge>OUR MISSION</Badge>
            <Text fontWeight="bold" fontSize={40}>
                To streamline and automate DeFi operations, delivering <br />
                unprecedented efficiency, cost-effectiveness, and <br />
                transparency in managing digital assets.
            </Text>
            <Button size="big">JOIN NOW</Button>
        </OurMissionStyled>
    )
}

export default OurMission
