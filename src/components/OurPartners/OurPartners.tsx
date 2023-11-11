import styled from 'styled-components'
import axelar from '../../assets/partners/axelar.png'
import golem from '../../assets/partners/golem.png'
import robohero from '../../assets/partners/robohero.png'
import thorstarter from '../../assets/partners/thorstarter.png'
import tubbly from '../../assets/partners/tubbly.png'
import atlo from '../../assets/partners/atlo.png'
import { Text } from '../Text/Text'

const OurPartnersSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 5rem 10rem;
`

const OurPartnersDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    width: 100%;
`

const PartnerImage = styled.img`
    max-width: 100px;
    margin: 10px;
`

const Divider = styled.div`
    width: 100%;
    border: 1px rgba(255, 255, 255, 0.2) solid;
`

const OurPartners = () => {
    const partnerImages = [axelar, thorstarter, golem, robohero, atlo, tubbly]

    return (
        <OurPartnersSection>
            <Text fontSize={56}>Our Partners</Text>
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
