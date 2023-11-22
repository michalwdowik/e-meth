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
`

const FeaturesStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const ImageWrapper = styled.div`
    position: absolute;
    height: 100%;
    top: -50px;
    right: -30px;
    width: 65%;
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
    top: 20%;
    width: 100%;
    z-index: 1;
`

const ImageGradient = styled.img`
    position: sticky;
    top: 200px;
    max-width: 250px;
    width: 60%;
    z-index: 0;
    margin-top: 90px;
    margin-left: -180px;
    animation: ${floatAnimation} 7s ease-in-out infinite;

    @media (max-width: 1100px) {
        top: 159px;
        margin-top: 70px;
        width: 50%;
        margin-left: -170px;
    }

    @media (max-width: 980px) {
        top: 120px;
        margin-left: -170px;
    }

    @media (max-width: 860px) {
        top: 110px;
        margin-left: -140px;
    }
`

const GradientOverlay = styled.img`
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 0;
    width: 50%;
    max-width: 550px;

    @media (max-width: 767px) {
        width: 100%;
        top: 0px;
        max-width: 100%;
    }
`

const FeaturesSection = () => {
    const { isScreenSmall } = useScreenSize()
    const imageRef = useRef(null)

    // Use useInView for the image containers
    const imageContainers = [
        useInView({ threshold: 0.5 }),
        useInView({ threshold: 0.5 }),
        useInView({ threshold: 0.1 }),
    ]

    // Function to get the index of the currently in-view image container
    const getInViewImageIndex = () => {
        for (let i = 0; i < imageContainers.length; i++) {
            if (imageContainers[i].inView) {
                return i
            }
        }
        return 0 // Default to the first image if none are in view
    }

    const gradientOverlaySrc = isScreenSmall
        ? 'FeaturesGradientMobile.png'
        : 'FeaturesSectionGradient.png'

    return (
        <FeaturesWrapper id="Features">
            <GradientOverlay src={gradientOverlaySrc} />

            <FeaturesSectionHeading />
            <FeaturesSectionContent>
                {!isScreenSmall && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeOut',
                        }}
                    >
                        <ImageWrapper>
                            <Image
                                src={`Feature${getInViewImageIndex() + 1}.png`}
                                alt="change it"
                                ref={imageRef}
                            />
                            <ImageGradient
                                src={`Feature${
                                    getInViewImageIndex() + 1
                                }Gradient.png`}
                                alt="gradient"
                            />
                        </ImageWrapper>
                    </motion.div>
                )}
                <FeaturesStyled>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={
                                index === getInViewImageIndex()
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0 }
                            }
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                                // delay: 0.2,
                            }}
                            ref={imageContainers[index].ref}
                        >
                            <Feature
                                key={feature.id}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                refValue={imageContainers[index].ref} // Use the corresponding image container ref
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
    /* overflow: hidden; */
    padding: 0 112px;
    margin-left: -112px;
    width: calc(100% + 224px);

    @media (max-width: 767px) {
        margin-left: -16px;
        width: calc(100% + 32px);
        padding: 0 16px;
    }
`
