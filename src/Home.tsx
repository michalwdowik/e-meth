import FaqAccordion from './components/Faq/FaqAccordion'
import GlassyBanner from './components/GlassyBanner/GlassyBanner'
import Hero from './components/Hero/Hero'
import OurMission from './components/OurMission/OurMission'
import OurPartners from './components/OurPartners/OurPartners'
import ValuesSection from './components/SmallGlassyCard/SmallGlassyCard'
import Navbar from './components/Toolbar/Toolbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ValuesSection />
            <OurPartners />
            <OurMission />
            <FaqAccordion />
            <GlassyBanner />
        </div>
    )
}

export default Home
