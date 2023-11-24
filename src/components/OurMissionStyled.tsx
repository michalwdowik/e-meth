import styled from 'styled-components'
import { OurMissionStyledProps } from './OurMissionBanner'

export const OurMissionStyled = styled.div<OurMissionStyledProps>`
    /* border: 2px red solid; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 4;
    gap: 32px;
    background: ${(props) =>
        `url(${
            props.isScreenSmall ? 'OurMissionMobile.png' : 'OurMission.png'
        }) no-repeat right`};
    background-size: contain;
    padding: 80px 112px;
    margin-left: -112px;
    margin-top: 130px;
    width: calc(100% + 224px);
    /* margin-top: -260px; */
    margin-bottom: 120px;
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

    @media (max-width: 1440px) {
        margin-top: 50px;
    }

    @media (max-width: 1024px) {
        margin-left: -112px;
        width: calc(100% + 224px);
        padding: 80px 112px;
        background-size: cover;
    }

    @media (max-width: 767px) {
        padding: 80px 16px;
        margin-left: -16px;
        width: calc(100% + 32px);
        height: auto;
        background-size: contain;
    }

    @media (max-width: 400px) {
        background-size: cover;
    }
`
