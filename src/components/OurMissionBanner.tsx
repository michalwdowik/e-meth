import styled from 'styled-components'
import Badge from './Badge'
import Button from './Button'
import useScreenSize from '../hooks/useScreenSize'
import Text from './Text'

interface OurMissionStyledProps {
    isScreenSmall: boolean
}

const OurMissionStyled = styled.div<OurMissionStyledProps>`
    /* border: 2px red solid; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background: ${(props) =>
        `url(${
            props.isScreenSmall ? 'OurMissionMobile.png' : 'OurMission.png'
        }) no-repeat right`};
    background-size: contain;
    padding: 80px 112px;
    margin-left: -112px;
    width: calc(100% + 224px);
    /* margin-top: -260px; */
    margin-bottom: 80px;
    overflow-x: hidden;
    /* height: 559px; */

    /* @media (max-width: 1230px) {
        margin-top: -160px;
    }

    @media (max-width: 1150px) {
        margin-top: -100px;
    }

    @media (max-width: 1150px) {
        margin-top: -50px;
    } */
    @media (max-width: 1024px) {
        margin-left: -112px;
        width: calc(100% + 224px);
        padding: 80px 112px;
        background-size: cover;
    }

    @media (max-width: 767px) {
        padding: 80px 24px;
        margin-left: -24px;
        width: calc(100% + 48px);
        height: auto;
        background-size: contain;
    }

    @media (max-width: 400px) {
        background-size: cover;
    }
`

const OurMissionBanner = () => {
    const { isScreenSmall } = useScreenSize()
    const fontSize = isScreenSmall ? 24 : 40

    return (
        <OurMissionStyled id="About" isScreenSmall={isScreenSmall}>
            <Badge>OUR MISSION</Badge>
            <Text lineHeight={130} fontWeight="bold" fontSize={fontSize}>
                To streamline and automate DeFi operations, delivering <br />
                unprecedented efficiency, cost-effectiveness, and <br />
                transparency in managing digital assets.
            </Text>
            <Button size={isScreenSmall ? 'normal' : 'big'}>JOIN NOW</Button>
        </OurMissionStyled>
    )
}

export default OurMissionBanner
