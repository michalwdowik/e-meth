import { Text } from '../Text/Text'
import './glassy-banner.css'

const GlassyBanner = () => {
    return (
        <div className="newsletter-section">
            <div className="glassy-banner">
                <Text fontSize={40}>
                    Join us on a journey to redefine what&apos;s possible in the
                    DeFi space.
                </Text>
                <button type="button" className="join-button">
                    Join Now
                </button>
            </div>
        </div>
    )
}

export default GlassyBanner
