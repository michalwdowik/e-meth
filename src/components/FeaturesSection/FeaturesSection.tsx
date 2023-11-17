import styled from 'styled-components'
import Badge from '../Badge'
import { Text } from '../Text'
import Feature from './Feature'
import useScreenSize from '../../hooks/useScreenSize'
import features from '../../utils/features'

const FeaturesSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    gap: 56px;
    background-color: transparent;
    /* position: relative; */
    padding: 0 112px;
    margin-left: -112px;
    width: calc(100% + 224px);

    @media (max-width: 1024px) {
        margin-left: -64px;
        width: calc(100% + 128px);
        padding: 0 64px;
    }

    @media (max-width: 767px) {
        padding: 24px;
        margin-left: -24px;
        width: calc(100% + 48px);
    }
`

const FeaturesSectionHero = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 920px) {
        flex-direction: column;
        justify-content: center;
        gap: 40px;
    }
`

const FeaturesSectionHeroTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 60%;
    max-width: 700px;

    @media (max-width: 920px) {
        max-width: 100%;
    }
`

const FeaturesSectionHeroDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 128px;
    max-width: 30%;

    @media (max-width: 920px) {
        max-width: 100%;
        margin-top: 0;
    }
`

const GradientOverlay = styled.img`
    position: absolute;
    top: -232px;
    left: 0;
    z-index: -1;

    @media (max-width: 576px) {
        top: -350px;
        object-fit: cover;
        width: 100%;
        left: 0;
    }
`

const FeaturesSection = () => {
    const { isScreenExtraSmall } = useScreenSize()

    return (
        <FeaturesSectionStyled>
            <GradientOverlay
                src={
                    isScreenExtraSmall
                        ? 'FeaturesGradientMobile.png'
                        : 'FeaturesSectionGradient.png'
                }
            />
            <FeaturesSectionHero>
                <FeaturesSectionHeroTitle>
                    <Badge>Features</Badge>
                    <Text
                        fontSize={isScreenExtraSmall ? 28 : 56}
                        fontWeight="bold"
                        align="left"
                    >
                        Unleash the Power of Automated Portfolio <br />
                        Management
                    </Text>
                </FeaturesSectionHeroTitle>
                <FeaturesSectionHeroDescription>
                    <Text
                        fontSize={isScreenExtraSmall ? 14 : 16}
                        fontWeight="light"
                        align="left"
                    >
                        Emeth brings to you a meticulously crafted suite of
                        features designed to elevate your DeFi operations and
                        digital asset management experience. From intuitive
                        portfolio setups to intelligent automation. <br />
                        <br />
                        Explore a universe where every click brings you closer
                        to unparalleled efficiency, insightful decisions, and
                        robust financial management, all unified under one
                        comprehensive platform.
                    </Text>
                </FeaturesSectionHeroDescription>
            </FeaturesSectionHero>
            {features.map((feature) => (
                <Feature
                    key={feature.id}
                    title={feature.title}
                    description={feature.description}
                    imageUrl={feature.imageUrl}
                    icon={feature.icon}
                />
            ))}
        </FeaturesSectionStyled>
    )
}

export default FeaturesSection
