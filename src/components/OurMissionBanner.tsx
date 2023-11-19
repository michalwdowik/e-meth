import styled from 'styled-components'
import Badge from './Badge'
import Button from './Button'
import useScreenSize from '../hooks/useScreenSize'
import Text from './Text'

interface OurMissionStyledProps {
    isScreenSmall: boolean
}

const OurMissionStyled = styled.div<OurMissionStyledProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: ${(props) =>
        `url(${
            props.isScreenSmall ? 'OurMissionMobile.png' : 'OurMission.png'
        }) no-repeat right`};
    background-size: cover;
    padding: 80px 112px;
    margin-left: -112px;
    width: calc(100% + 224px);
    margin-top: -260px;
    margin-bottom: 80px;
    overflow-x: hidden;

    @media (max-width: 1230px) {
        margin-top: -160px;
    }

    @media (max-width: 1150px) {
        margin-top: -100px;
    }

    @media (max-width: 1150px) {
        margin-top: -50px;
    }
    @media (max-width: 1024px) {
        margin-left: -64px;
        width: calc(100% + 128px);
        padding: 80px 64px;
    }

    @media (max-width: 991px) {
        margin-top: 0px;
    }

    @media (max-width: 767px) {
        padding: 80px 24px;
        margin-left: -24px;
        width: calc(100% + 48px);
        margin-bottom: 0;
    }
`

const OurMissionBanner = () => {
    const { isScreenSmall } = useScreenSize()
    const fontSize = isScreenSmall ? 24 : 40

    return (
        <OurMissionStyled isScreenSmall={isScreenSmall}>
            <Badge>OUR MISSION</Badge>
            <Text fontWeight="bold" fontSize={fontSize}>
                To streamline and automate DeFi operations, delivering <br />
                unprecedented efficiency, cost-effectiveness, and <br />
                transparency in managing digital assets.
            </Text>
            <Button size={isScreenSmall ? 'normal' : 'big'}>JOIN NOW</Button>
        </OurMissionStyled>
    )
}

export default OurMissionBanner
