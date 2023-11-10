import Button from '../Button/Button'
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
                <Button size="big">JOIN NOW</Button>
            </div>
        </div>
    )
}

export default GlassyBanner
