import styled from 'styled-components'
import Footer from './components/Footer'
import GlassyBanner from './components/GlassyBanner'
import Hero from './components/Hero'
import OurMission from './components/OurMission'
import OurPartners from './components/OurPartners'
import ValuesSection from './components/ValuesSection'
import Navbar from './components/Toolbar'
import FeaturesSection from './components/FeaturesSection'
import IntroSection from './components/IntroSection'
// import VideoPlayer from './components/Video/Video'
import Faq from './components/Faq'
import useScreenSize from './hooks/useScreenSize'

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 112px;
    justify-content: center;
    gap: 48px;
    margin-bottom: 48px;
    @media (max-width: 1024px) {
        padding: 0 64px;
    }

    @media (max-width: 767px) {
        padding: 0 24px;
    }
`

const Home = () => {
    const { isScreenSmallerThan767 } = useScreenSize()
    return (
        <>
            <Navbar type="upper" />
            <HomeStyled>
                {/* <Hero /> */}
                {/* <IntroSection /> */}
                {/* <OurMission />
                <GlassyBanner />
                <FeaturesSection />
                <OurPartners />
                <ValuesSection />
                <Faq /> */}
                <OurPartners />
                <Faq />
                <GlassyBanner />
                {!isScreenSmallerThan767 && <Navbar type="lower" />}
                <Footer />

                {/* <VideoPlayer /> */}
                {/* <Hero />
                <IntroSection />
                <OurMission />
                <FeaturesSection />
                <ValuesSection />
                <GlassyBanner />
                <Navbar type="lower" />
                <Footer /> */}
            </HomeStyled>
        </>
    )
}

export default Home
