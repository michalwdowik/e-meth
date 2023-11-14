import styled from 'styled-components'
import { Text } from './Text'
import ArrowRight from './Icons/ArrowRight'
import useScreenSize from '../hooks/useScreenSize'

const FeatureContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    gap: 40px;

    @media (max-width: 766px) {
        flex-direction: column;
        align-items: stretch;
    }
`

const TextSection = styled.div`
    max-width: 35%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 766px) {
        max-width: 100%;
        gap: 16px;
    }
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
    @media (max-width: 766px) {
        max-width: 100%;
    }
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

const FeatureTitle = styled.div`
    width: 100%;
    @media (max-width: 766px) {
        width: 50%;
    }
`

const FeatureDescription = styled.div`
    width: 100%;
`

const Feature = ({
    title,
    description,
    imageUrl,
    lightImageUrl,
    iconUrl,
    gradientUrl,
}: FeatureProps) => {
    const { isScreenSmallerThan767 } = useScreenSize()
    return (
        <FeatureContainer>
            {isScreenSmallerThan767 ? (
                <>
                    <FeatureImage
                        src={`../src/assets/${lightImageUrl}`}
                        alt={title}
                    />
                    <TextSection>
                        <FeatureIcon
                            src={`../src/assets/${iconUrl}`}
                            alt={title}
                        />
                        <FeatureTitle>
                            <Text fontSize={20} fontWeight="bold" align="left">
                                {title}
                            </Text>
                        </FeatureTitle>
                        <FeatureDescription>
                            <Text fontSize={14} align="left" fontWeight="light">
                                {description}
                            </Text>
                        </FeatureDescription>
                        <LearnMoreButton />
                    </TextSection>
                </>
            ) : (
                <>
                    <TextSection>
                        <FeatureIcon
                            src={`../src/assets/${iconUrl}`}
                            alt={title}
                        />
                        <FeatureTitle>
                            <Text fontSize={32} fontWeight="bold" align="left">
                                {title}
                            </Text>
                        </FeatureTitle>
                        <FeatureDescription>
                            <Text fontSize={16} align="left" fontWeight="light">
                                {description}
                            </Text>
                        </FeatureDescription>
                        <LearnMoreButton />
                    </TextSection>
                    <FeatureImage
                        src={`../src/assets/${imageUrl}`}
                        alt={title}
                    />
                </>
            )}
        </FeatureContainer>
    )
}

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
