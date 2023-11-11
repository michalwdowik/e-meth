import styled from 'styled-components'
import Footer from './components/Footer/Footer'
import GlassyBanner from './components/GlassyBanner/GlassyBanner'
import Hero from './components/Hero/Hero'
import OurMission from './components/OurMission/OurMission'
import OurPartners from './components/OurPartners/OurPartners'
import ValuesSection from './components/SmallGlassyCard/SmallGlassyCard'
import Navbar from './components/Toolbar/Toolbar'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import IntroSection from './components/IntroSection/IntroSection'
// import VideoPlayer from './components/Video/Video'
import Faq from './components/Faq/Faq'

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeStyled>
                {/* <VideoPlayer /> */}
                <Hero />
                <IntroSection />
                <OurMission />
                <FeaturesSection />
                <ValuesSection />
                <OurPartners />
                <Faq />
                <GlassyBanner />
                <Navbar />
                <Footer />
            </HomeStyled>
        </>
    )
}

export default Home
