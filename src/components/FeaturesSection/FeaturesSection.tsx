import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import features from '../../utils/features'
import Feature from './Feature'
import useScreenSize from '../../hooks/useScreenSize'
import FeaturesSectionHeading from './FeaturesSectionHeading'

const FeaturesWrapper = styled.div`
    position: relative;
    padding: 0 112px;
    margin-left: -112px;
    width: calc(100% + 224px);

    @media (max-width: 767px) {
        margin-left: -16px;
        width: calc(100% + 32px);
        padding: 0 16px;
    }
`

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
    padding-top: 50px;
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
    width: 110%;
    z-index: 1;

    @media (min-width: 1500px) {
        margin-left: 30px;
    }
`

const FeaturesSection = () => {
    const { isScreenSmall } = useScreenSize()
    const imageRef = useRef(null)

    const imageContainers = [
        useInView({ threshold: 0.5 }),
        useInView({ threshold: 0.5 }),
        useInView({ threshold: 0.1 }),
    ]

    const getInViewImageIndex = () => {
        for (let i = 0; i < imageContainers.length; i++) {
            if (imageContainers[i].inView) {
                return i
            }
        }
        return 0
    }

    return (
        <FeaturesWrapper id="Features">
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
                                alt="feature"
                                ref={imageRef}
                            />
                        </ImageWrapper>
                    </motion.div>
                )}
                <FeaturesStyled>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0 }}
                            animate={
                                index === getInViewImageIndex()
                                    ? { opacity: 1 }
                                    : { opacity: 0 }
                            }
                            transition={{
                                duration: 0.4,
                                ease: 'easeInOut',
                            }}
                            ref={imageContainers[index].ref}
                        >
                            <Feature
                                key={feature.id}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                refValue={imageContainers[index].ref}
                                imageUrlMobile={feature.imageUrlMobile}
                                featureId={feature.id}
                            />
                        </motion.div>
                    ))}
                </FeaturesStyled>
            </FeaturesSectionContent>
        </FeaturesWrapper>
    )
}

export default FeaturesSection
