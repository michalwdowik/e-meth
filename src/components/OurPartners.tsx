import styled from 'styled-components'
import axelar from '../assets/partners/axelar.png'
import golem from '../assets/partners/golem.png'
import robohero from '../assets/partners/robohero.png'
import thorstarter from '../assets/partners/thorstarter.png'
import tubbly from '../assets/partners/tubbly.png'
import atlo from '../assets/partners/atlo.png'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'

const OurPartnersSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const OurPartnersDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 40px;
        place-items: center;
    }
`

const PartnerImage = styled.img``

const Divider = styled.div`
    width: 80%;
    border: 1px rgba(255, 255, 255, 0.2) solid;
`

const OurPartners = () => {
    const partnerImages = [axelar, thorstarter, golem, robohero, atlo, tubbly]
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
