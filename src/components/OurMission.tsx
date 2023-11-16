import styled from 'styled-components'
import Badge from './Badge'
import Button from './Button'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'

interface OurMissionStyledProps {
    isScreenSmallerThan767: boolean
}

const OurMissionStyled = styled.div<OurMissionStyledProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: ${(props) =>
        `url(${
            props.isScreenSmallerThan767
                ? 'OurMissionMobile.png'
                : 'OurMission.png'
        }) no-repeat right`};
    background-color: black;
    background-size: cover;
    padding: 80px 112px;
    margin-left: -112px;
    width: calc(100% + 224px);

    @media (max-width: 1024px) {
        margin-left: -64px;
        width: calc(100% + 128px);
        padding: 80px 64px;
    }

    @media (max-width: 767px) {
        padding: 80px 24px;
        margin-left: -24px;
        width: calc(100% + 48px);
    }
`

const OurMission = () => {
    const { isScreenSmallerThan767 } = useScreenSize()
    const fontSize = isScreenSmallerThan767 ? 24 : 40

    return (
        <OurMissionStyled isScreenSmallerThan767={isScreenSmallerThan767}>
            <Badge>OUR MISSION</Badge>
            <Text fontWeight="bold" fontSize={fontSize}>
                To streamline and automate DeFi operations, delivering <br />
                unprecedented efficiency, cost-effectiveness, and <br />
                transparency in managing digital assets.
            </Text>
            <Button size={isScreenSmallerThan767 ? 'normal' : 'big'}>
                JOIN NOW
            </Button>
        </OurMissionStyled>
    )
}

export default OurMission
