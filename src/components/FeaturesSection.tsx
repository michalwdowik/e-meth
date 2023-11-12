import styled from 'styled-components'
import Badge from './Badge'
import { Text } from './Text'
import Feature from './Feature'
import useScreenSize from '../hooks/useScreenSize'

const features = [
    {
        id: 1,
        title: 'Strategic Automation',
        description:
            'Engage in auto-arbitrage, initiate volume generation, formulate yield farming strategies, and auto-rebalance your portfolio, ensuring optimal performance and risk mitigation.',
        imageUrl: 'Feature1.png',
        lightImageUrl: 'Feature1Light.png',
        iconUrl: 'StrategicAutomationIcon.png',
        gradientUrl: 'Feature1Gradient.png',
    },
    {
        id: 2,
        title: 'Streamlined Portfolio Management',
        description:
            'With a sophisticated yet intuitive interface, manage your digital assets by setting advanced parameters, defining portfolio structures, and monitoring real-time performance, ensuring strategic alignment with your financial goals.',
        imageUrl: 'Feature2.png',
        lightImageUrl: 'Feature2Light.png',
        iconUrl: 'StreamlinePortfolioIcon.png',
        gradientUrl: 'Feature2Gradient.png',
    },
    {
        id: 3,
        title: 'In-Depth Dashboards & Market Insights',
        description:
            'Uncover opportunities and gauge market pulse with live data, sentiment analysis, and a consolidated overview of your asset holdings, driving informed and timely decision-making.',
        imageUrl: 'Feature3.png',
        lightImageUrl: 'Feature3Light.png',
        iconUrl: 'MarketInsightsIcon.png',
        gradientUrl: 'Feature3Gradient.png',
    },
]

const FeaturesSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 56px;
    background-color: transparent;
    position: relative; // This makes it the positioning context for absolutely positioned children
    overflow: hidden; // This ensures that the gradient doesn't flow outside the component
`

const FeaturesSectionHero = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        gap: 40px;
    }
`

const FeaturesSectionHeroTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 50%;
    @media (max-width: 768px) {
        max-width: 100%;
    }
`

const FeaturesSectionHeroDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 128px;
    max-width: 30%;

    @media (max-width: 768px) {
        max-width: 100%;
        margin-top: 0;
    }
`

const GradientOverlay = styled.img`
    position: absolute;
    top: -168px;
    left: 0;
    z-index: -1;
`
const FeaturesSection = () => {
    const { isScreenExtraSmall } = useScreenSize()
    return (
        <FeaturesSectionStyled>
            <GradientOverlay src="../src/assets/FeaturesSectionGradient.png" />
            <FeaturesSectionHero>
                <FeaturesSectionHeroTitle>
                    <Badge>Features</Badge>
                    <Text
                        fontSize={isScreenExtraSmall ? 28 : 56}
                        fontWeight="bold"
                        align="left"
                    >
                        Unleash the Power of <br /> Automated Portfolio <br />
                        Management
                    </Text>
                </FeaturesSectionHeroTitle>
                <FeaturesSectionHeroDescription>
                    <Text
                        fontSize={isScreenExtraSmall ? 14 : 16}
                        fontWeight="light"
                        align="left"
                        color="grey"
                    >
                        Emeth bring to you a meticulously crafted suite of
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
                    lightImageUrl={feature.lightImageUrl}
                    iconUrl={feature.iconUrl}
                    gradientUrl={feature.gradientUrl}
                />
            ))}
        </FeaturesSectionStyled>
    )
}

export default FeaturesSection
