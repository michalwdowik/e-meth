import styled from 'styled-components'
import FaqAccordion from './components/Faq/FaqAccordion'
import Footer from './components/Footer/Footer'
import GlassyBanner from './components/GlassyBanner/GlassyBanner'
import Hero from './components/Hero/Hero'
import OurMission from './components/OurMission/OurMission'
import OurPartners from './components/OurPartners/OurPartners'
import ValuesSection from './components/SmallGlassyCard/SmallGlassyCard'
import Navbar from './components/Toolbar/Toolbar'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import IntroSection from './components/IntroSection/IntroSection'
import VideoPlayer from './components/Video/Video'

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    justify-content: center;
`

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeStyled>
                <VideoPlayer />
                {/* <Hero /> */}
                <IntroSection />
                <FeaturesSection />
                {/* <ValuesSection />
                <OurPartners />
                <OurMission />
                <FaqAccordion />
                <GlassyBanner />
                <Navbar />
                <Footer /> */}
            </HomeStyled>
        </>
    )
}

export default Home
