import axelar from '../../assets/partners/axelar.png'
import golem from '../../assets/partners/golem.png'
import robohero from '../../assets/partners/robohero.png'
import thorstarter from '../../assets/partners/thorstarter.png'
import tubbly from '../../assets/partners/tubbly.png'
import atlo from '../../assets/partners/atlo.png'

import './our-partners.css'
import { Text } from '../Text/Text'

const OurPartners = () => {
    const partnerImages = [atlo, axelar, golem, robohero, thorstarter, tubbly]

    return (
        <div className="our-partners-section">
            <Text fontSize={56}>Our Partners</Text>
            <div className="divider" />
            <div className="our-partners">
                {partnerImages.map((image, index) => (
                    <img key={index} src={image} alt={`Partner ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}

export default OurPartners
