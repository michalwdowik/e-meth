import styled from 'styled-components'
import Footer from './components/Footer'
import GlassyBanner from './components/GlassyBanner'
import Hero from './components/Hero'
import OurMission from './components/OurMission'
import OurPartners from './components/OurPartners'
import ValuesSection from './components/SmallGlassyCard'
import Navbar from './components/Toolbar'
import FeaturesSection from './components/FeaturesSection'
import IntroSection from './components/IntroSection'
// import VideoPlayer from './components/Video/Video'
import Faq from './components/Faq'

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Home = () => {
    return (
        <>
            <Navbar type="upper" />
            <HomeStyled>
                {/* <VideoPlayer /> */}
                {/* <Hero />
                <IntroSection />
                <OurMission />
                <FeaturesSection />
                <ValuesSection />
                <OurPartners />
                <Faq />
                <GlassyBanner />
                <Navbar type="lower" />
                <Footer /> */}
            </HomeStyled>
        </>
    )
}

export default Home
