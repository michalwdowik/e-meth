import styled from 'styled-components'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'

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

const partnerImages = [
    'partners/axelar.png',
    'partners/thorstarter.png',
    'partners/golem.png',
    'partners/robohero.png',
    'partners/atlo.png',
    'partners/tubbly.png',
]

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
