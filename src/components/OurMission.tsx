import styled from 'styled-components'
import Badge from './Badge'
import Button from './Button'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'

const OurMissionStyled = styled.div`
    /* height: 559px; */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Aligns children vertically in the center */
    align-items: center;
    gap: 32px;
    background: ${(props) =>
        `url(${
            props.isScreenSmallerThan767
                ? 'src/assets/OurMissionMobile.png'
                : 'src/assets/OurMission.png'
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
        padding: 80px 24px 80px 24px;
        margin-left: -24px;
        width: calc(100% + 48px);
    }
`

const OurMission = () => {
    const { isScreenSmall, isScreenSmallerThan767 } = useScreenSize()
    return (
        <OurMissionStyled isScreenSmallerThan767={isScreenSmallerThan767}>
            <Badge>OUR MISSION</Badge>
            <Text fontWeight="bold" fontSize={isScreenSmallerThan767 ? 24 : 40}>
                To streamline and automate DeFi operations, delivering <br />
                unprecedented efficiency, cost-effectiveness, and <br />
                transparency in managing digital assets.
            </Text>
            <Button size={isScreenSmall ? 'normal' : 'big'}>JOIN NOW</Button>
        </OurMissionStyled>
    )
}

export default OurMission
