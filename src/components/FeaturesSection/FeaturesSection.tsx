import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import features from '../../utils/features'
import Feature from './Feature'
import useScreenSize from '../../hooks/useScreenSize'
import FeaturesSectionHeading from './FeaturesSectionHeading'
import { floatAnimation } from '../../utils/animations'

const FeaturesSectionContent = styled.div`
    position: relative;
    max-width: 1216px;
    margin: 0 auto;
    padding-bottom: 40px;
    border: 2px red solid;
`

const FeaturesStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
`

const ImageWrapper = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media (max-width: 766px) {
        position: static;
        width: 100%;
        margin-bottom: 40px;
    }
`

const Image = styled.img`
    position: sticky;
    top: 70px;
    width: 100%;
    z-index: 1;
`

const ImageGradient = styled.img`
    position: sticky;
    top: 200px;
    width: 230px;
    z-index: 0;
    margin-top: 50px;
    margin-left: -170px;
    animation: ${floatAnimation} 7s ease-in-out infinite;
`

const GradientOverlay = styled.img`
    position: absolute;
    top: 180px;
    left: 0;
    width: 50%;

    @media (max-width: 767px) {
        width: 100%;
        top: 0px;
    }
`

const FeaturesSection = () => {
    const { isScreenSmall } = useScreenSize()
    const imageRef = useRef(null)

    const containers = [
        useInView({ threshold: 0 }),
        useInView({ threshold: 0 }),
        useInView({ threshold: 0 }),
    ]

    const getImage = () => {
        for (let i = 0; i < containers.length; i++) {
            if (containers[i].inView) {
                return `Feature${i + 1}.png`
            }
        }
        return 'Feature1.png'
    }

    const getGradient = () => {
        for (let i = 0; i < containers.length; i++) {
            if (containers[i].inView) {
                return `Feature${i + 1}Gradient.png`
            }
        }
        return 'Feature1Gradient.png'
    }

    const getContainer = (id: number) => containers[id - 1].ref

    const gradientOverlaySrc = isScreenSmall
        ? 'FeaturesGradientMobile.png'
        : 'FeaturesSectionGradient.png'
    return (
        <FeaturesWrapper id="Features">
            <GradientOverlay src={gradientOverlaySrc} />

            <FeaturesSectionHeading />
            <FeaturesSectionContent>
                {!isScreenSmall && (
                    <ImageWrapper>
                        <Image
                            src={getImage()}
                            alt="change it"
                            ref={imageRef}
                        />
                        <ImageGradient src={getGradient()} alt="change it" />
                    </ImageWrapper>
                )}
                <FeaturesStyled>
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={
                                containers[feature.id - 1].inView
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0 }
                            }
                            transition={{ duration: 0.2 }}
                        >
                            <Feature
                                key={feature.id}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                refValue={getContainer(feature.id)}
                                imageUrl={feature.imageUrl}
                            />
                        </motion.div>
                    ))}
                </FeaturesStyled>
            </FeaturesSectionContent>
        </FeaturesWrapper>
    )
}

export default FeaturesSection

const FeaturesWrapper = styled.div`
    position: relative;
    border: 2px green solid;
    padding: 0 112px;
    margin-left: -112px;
    width: calc(100% + 224px);

    @media (max-width: 767px) {
        margin-left: -16px;
        width: calc(100% + 32px);
        padding: 0 16px;
    }
`
