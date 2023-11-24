import styled, { ThemeProvider } from 'styled-components'
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
import theme from './utils/theme'

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 112px;
    padding-bottom: 48px;
    justify-content: center;
    /* gap: 48px; */
    margin: 0 auto;
    background-color: black;
    /* border: 2px red solid; */
    @media (max-width: 767px) {
        padding: 0 16px 48px 16px;
    }
`

const Home = () => {
    const { isScreenSmall } = useScreenSize()
    // const video = isMobileDevice() - use for checking if mobile device instead of isScreenSmall
    return (
        <ThemeProvider theme={theme}>
            <Navbar type="upper" />
            <HomeStyled>
                {/* <Hero video />
                <IntroSection video /> */}
                <Hero video={false} />
                <IntroSection video={false} />
                <OurMissionBanner />
                <FeaturesSection />
                <ValuesSection />
                <OurPartners />
                <Faq />
                <NewsletterBanner />
                {!isScreenSmall && <Navbar type="lower" />}
                <Footer />
            </HomeStyled>
        </ThemeProvider>
    )
}

export default Home
