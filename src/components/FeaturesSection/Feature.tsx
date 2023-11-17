import styled from 'styled-components'
import { Text } from '../Text'
import ArrowRight from '../Icons/ArrowRight'
import useScreenSize from '../../hooks/useScreenSize'

interface FeatureProps {
    title: string
    description: string
    imageUrl: string
    gradientUrl: string
    icon: () => JSX.Element
}

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

const FeatureImage = styled.img`
    width: 100%;
`

const FeatureTitle = styled.div`
    width: 100%;

    @media (max-width: 766px) {
        width: 70%;
    }

    @media (max-width: 560px) {
        width: 100%;
    }
`

const FeatureDescription = styled.div`
    width: 100%;
`

const LearnMoreButtonStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    position: relative;
    &:hover {
        background: linear-gradient(
            160deg,
            #da301f 0%,
            #f48946 18.229%,
            #ee3560 35.417%,
            #fa4784 51.563%,
            #ff48c0 66.667%,
            #8e38b5 81.771%,
            #5542bb 89.063%,
            #ffffff 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: white;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
        background-position: -100%;
        background-size: 200% 100%;
        animation: slideIn 0.3s linear forwards;
    }

    @keyframes slideIn {
        0% {
            background-position: -100%;
        }
        100% {
            background-position: 100%;
        }
    }
`

const LearnMoreButton = () => {
    return (
        <LearnMoreButtonStyled>
            Learn More
            <ArrowRight />
        </LearnMoreButtonStyled>
    )
}

const ImagesWrapper = styled.div`
    position: relative;
    max-width: 60%;
    height: auto;
    z-index: 1;

    @media (max-width: 766px) {
        max-width: 100%;
    }
`

const FeatureImageGradient = styled.img`
    position: absolute;
    top: 20%;
    right: -15%;
    width: 40%;
    height: auto;
    z-index: -1;
`

const Feature = ({
    title,
    description,
    imageUrl,
    gradientUrl,
    icon,
}: FeatureProps) => {
    const { isScreenSmallerThan767 } = useScreenSize()

    return (
        <FeatureContainer>
            {isScreenSmallerThan767 ? (
                <>
                    <FeatureImage src={`${imageUrl}`} alt={title} />
                    <TextSection>
                        {icon()}
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
                        {icon()}
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
                    <ImagesWrapper>
                        <FeatureImage src={`${imageUrl}`} alt={title} />
                        <FeatureImageGradient
                            src={`${gradientUrl}`}
                            alt="gradient"
                        />
                    </ImagesWrapper>
                </>
            )}
        </FeatureContainer>
    )
}

export default Feature
