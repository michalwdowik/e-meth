import styled from 'styled-components'
import { Text } from './Text'
import ArrowRight from './Icons/ArrowRight'

const FeatureContainer = styled.div`
    position: relative; // Added to ensure absolute positioning is relative to this container
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 64px 112px 134px 112px;
    background: transparent;
`

const TextSection = styled.div`
    max-width: 30%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const GradientOverlay = styled.img`
    position: absolute;
    top: 50%;
    right: -7%;
    transform: translateY(-50%);
    z-index: 0;
`

const FeatureImage = styled.img`
    position: relative;
    max-width: 60%;
    height: auto;
    z-index: 1;
`
const FeatureIcon = styled.img`
    width: 64px;
    height: 64px;
`
interface FeatureProps {
    title: string
    description: string
    imageUrl: string
    iconUrl: string
    gradientUrl: string
}

const Feature = ({
    title,
    description,
    imageUrl,
    iconUrl,
    gradientUrl,
}: FeatureProps) => (
    <FeatureContainer>
        <GradientOverlay src={`../src/assets/${gradientUrl}`} />
        <TextSection>
            <FeatureIcon src={`../src/assets/${iconUrl}`} alt={title} />
            <Text fontSize={32} fontWeight="bold" align="left">
                {title}
            </Text>
            <Text fontSize={16} align="left" fontWeight="light" color="grey">
                {description}
            </Text>
            <LearnMoreButton />
        </TextSection>
        <FeatureImage src={`../src/assets/${imageUrl}`} alt={title} />
    </FeatureContainer>
)

export default Feature

const LearnMoreButtonStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`
const LearnMoreButton = () => {
    return (
        <LearnMoreButtonStyled>
            Learn More
            <ArrowRight />
        </LearnMoreButtonStyled>
    )
}
