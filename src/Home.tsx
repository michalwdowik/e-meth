import styled from 'styled-components'
import Footer from './components/Footer'
import Hero from './components/Hero'
import OurMission from './components/OurMission'
import OurPartners from './components/OurPartners'
import IntroSection from './components/IntroSection'
import Faq from './components/FaqSection/Faq'
import useScreenSize from './hooks/useScreenSize'
import isMobileDevice from './utils/isMobileDevice'
import NewsletterSection from './components/NewsletterSection'
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
    margin: 0 auto;
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
    const video = isMobileDevice()
    return (
        <>
            <Navbar type="upper" />
            <HomeStyled>
                <Hero video={video} />
                <IntroSection />
                <OurMission />
                <FeaturesSection />
                <ValuesSection />
                <OurPartners />
                <Faq />
                <NewsletterSection />
                {!isScreenSmall && <Navbar type="lower" />}
                <Footer />
            </HomeStyled>
        </>
    )
}

export default Home
