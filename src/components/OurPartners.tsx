import styled from 'styled-components'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'
import axelar from '../assets/partners/axelar.png'
import golem from '../assets/partners/golem.png'
import robohero from '../assets/partners/robohero.png'
import thorstarter from '../assets/partners/thorstarter.png'
import tubbly from '../assets/partners/tubbly.png'
import atlo from '../assets/partners/atlo.png'

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

    @media (max-width: 870px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 64px;
        place-items: center;
    }

    @media (max-width: 350px) {
        grid-gap: 20px;
        align-items: center;
    }
`

const PartnerImage = styled.img`
    width: 100px;
    height: auto;

    @media (max-width: 350px) {
        width: 65px;
    }
`

const Divider = styled.div`
    width: 100%;
    margin: 32px 0;
    border: 1px rgba(255, 255, 255, 0.2) solid;
`

const partnerImages = [axelar, thorstarter, golem, robohero, atlo, tubbly]

const OurPartners = () => {
    const { isScreenSmallerThan767 } = useScreenSize()

    return (
        <OurPartnersSection>
            <Text fontSize={isScreenSmallerThan767 ? 28 : 56}>
                Our Partners
            </Text>
            <Divider />
            <OurPartnersDiv>
                {partnerImages.map((image) => (
                    <PartnerImage
                        key={image}
                        src={image}
                        alt={`${image} logo`}
                    />
                ))}
            </OurPartnersDiv>
        </OurPartnersSection>
    )
}

export default OurPartners
