import styled from 'styled-components'
import Footer from './components/Footer'
import Hero from './components/HeroSection/Hero'
import OurMissionBanner from './components/OurMissionBanner'
import OurPartners from './components/OurPartners'
import IntroSection from './components/IntroSection/IntroSection'
import Faq from './components/FaqSection/Faq'
import useScreenSize from './hooks/useScreenSize'
// import isMobileDevice from './utils/isMobileDevice'
import NewsletterBanner from './components/NewsletterBanner'
import Navbar from './components/Navigation/Navbar'
import ValuesSection from './components/ValuesSection/ValuesSection'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 112px;
    padding-bottom: 48px;
    justify-content: center;
    gap: 48px;
    margin: 0 auto; /* Center the content horizontally */
    max-width: 1600px; /* Set a maximum width */
    background-color: black;

    @media (max-width: 1024px) {
        padding: 0 64px;
        padding-bottom: 48px;
    }

    @media (max-width: 767px) {
        padding: 0 24px;
        padding-bottom: 48px;
    }
`

const Home = () => {
    const { isScreenSmall } = useScreenSize()
    // const video = isMobileDevice() - use for checking if mobile device instead of isScreenSmall
    return (
        <>
            <Navbar type="upper" />
            <HomeStyled>
                <Hero video={isScreenSmall} />
                <IntroSection />
                <OurMissionBanner />
                <FeaturesSection />
                <ValuesSection />
                <OurPartners />
                <Faq />
                <NewsletterBanner />
                {!isScreenSmall && <Navbar type="lower" />}
                <Footer />
            </HomeStyled>
        </>
    )
}

export default Home
