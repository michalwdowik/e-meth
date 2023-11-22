/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import useScreenSize from '../../hooks/useScreenSize'
import HeroContent from './HeroContent'

interface StyledHeroProps {
    video: boolean
}

const StyledHero = styled.div<StyledHeroProps>`
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding-top: ${(props) => (props.video ? '80px' : '100px')};
    /* margin-left: -112px; */
    /* width: calc(100% + 224px); */
    /* position: relative; */
    /* padding: 0 112px; */

    max-width: 786px;
    margin: 0 auto;
    /* border: 1px green solid; */

    @media (max-width: 1024px) {
        width: 100%;
        /* margin-left: -64px;
        width: calc(100% + 128px); */
    }

    @media (max-width: 767px) {
        /* margin-left: -24px;
        width: calc(100% + 48px); */
        padding-top: 56px;
    }
`

// const GradientBackgroundContainer = styled.div<StyledHeroProps>`
//     position: absolute;
//     background-color: black;
//     /* top: -230px; */
//     /* top: ${({ video }) => (video ? '-150px' : '-200px')}; */
//     /* left: ${({ video }) => (video ? '0px' : '30px')}; */
//     width: 100%;
//     height: auto;
//     z-index: 1;
//     flex-shrink: 2;

//     @media (max-width: 991px) {
//         left: 0;
//         top: -120px;
//     }

//     @media (max-width: 766px) {
//         top: ${({ video }) => (video ? '-55px' : '-100px')};
//         left: 0;
//     }

//     @media (max-width: 500px) {
//         width: ${({ video }) => (video ? '100%' : '120%')};
//         left: ${({ video }) => (video ? '0' : '-70px')};
//     }

//     @media (max-width: 400px) {
//         left: ${({ video }) => (video ? '0' : '-40px')};
//     }
// `
interface GradientBackgroundProps {
    video: boolean
}
const GradientBackground = styled.img<GradientBackgroundProps>`
    /* width: 108%; */
    height: auto;
    z-index: 1;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    width: 100%;
    /* border: 2px red solid; */
    position: absolute;
    top: ${({ video }) => (video ? '-80px' : '-150px')};
    left: 0;
    /* max-width: ${({ video }) => (video ? '1350px' : '1300px')}; */
    /* left: ${({ video }) => (video ? '0' : '-20px')}; */

    right: 0;

    @media (max-width: 1440px) {
        width: 100%;
    }
    @media (max-width: 1200px) {
        top: 50px;
    }
    @media (max-width: 991px) {
        top: 120px;
        width: 100%;
    }

    @media (max-width: 767px) {
        top: -40px;
    }

    @media (max-width: 560px) {
        top: 50px;
    }

    @media (max-width: 450px) {
        top: 150px;
    }
`

const Wrapper = styled.div`
    width: 100%;
    /* border: 2px yellow solid; */
    padding: 0 208px;
    position: relative;

    @media (max-width: 1200px) {
        padding: 0 104px;
    }

    @media (max-width: 991px) {
        padding: 0;
    }

    @media (max-width: 767px) {
        width: calc(100% + 32px);
        padding: 0 16px;
        margin-left: -16px;
    }
`

interface HeroProps {
    video: boolean
}

const Hero = ({ video }: HeroProps) => {
    const { isScreenSmall } = useScreenSize()

    return (
        <Wrapper>
            {/* <Parallax className="parallax-hero" speed={-10}> */}
            <GradientBackground
                video={video}
                src={
                    video
                        ? isScreenSmall
                            ? 'MobileHeroGradient.png'
                            : 'HeroGradient.png'
                        : 'HeroGradient-NoVideo.png'
                }
            />
            {/* </Parallax> */}
            <StyledHero video={video}>
                <HeroContent video={video} isSmallScreen={isScreenSmall} />
            </StyledHero>
        </Wrapper>
    )
}

export default Hero
