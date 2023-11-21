import styled from 'styled-components'
import Text from './Text'
import useScreenSize from '../hooks/useScreenSize'
import AxelarLogo from './Icons/AxelarLogo'
import ThorstarterLogo from './Icons/ThorstarterLogo'
import GolemLogo from './Icons/GolemLogo'
import RoboheroLogo from './Icons/RoboheroLogo'
import AtloLogo from './Icons/AtloLogo'
import TubblyLogo from './Icons/TubblyLogo'

const OurPartnersSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 1;
    margin: 64px 0;
`

const OurPartnersDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    padding: 0 16px;

    @media (max-width: 870px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 64px;
        place-items: center;
    }

    @media (max-width: 350px) {
        grid-gap: 40px;
        align-items: center;
        grid-template-columns: repeat(1, 1fr);
    }
`

const Divider = styled.div`
    width: 100%;
    margin: 32px 0;
    border: 1px rgba(255, 255, 255, 0.2) solid;
`

const OurPartners = () => {
    const { isScreenSmall } = useScreenSize()

    return (
        <OurPartnersSection id="Partners">
            <Text lineHeight={130} fontSize={isScreenSmall ? 28 : 56}>
                Our Partners
            </Text>
            <Divider />
            <OurPartnersDiv>
                <AxelarLogo />
                <ThorstarterLogo />
                <GolemLogo />
                <RoboheroLogo />
                <AtloLogo />
                <TubblyLogo />
            </OurPartnersDiv>
        </OurPartnersSection>
    )
}

export default OurPartners
