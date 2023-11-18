import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import features from '../../utils/features'
import ArrowRight from '../Icons/ArrowRight'
import { Text } from '../Text'
import useScreenSize from '../../hooks/useScreenSize'

const Wrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ImageWrapper = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    width: 50%;
`

const Image = styled.img`
    position: sticky;
    top: 50px;
    width: 100%;
    z-index: 1;
`

const ScrollableComponent = () => {
    const imageRef = useRef(null)

    const { ref: firstContainer, inView: firstInView } = useInView({
        threshold: 0,
    })

    const { ref: secondContainer, inView: secondInView } = useInView({
        threshold: 0,
    })

    const { ref: thirdContainer, inView: thirdInView } = useInView({
        threshold: 0,
    })

    const getImage = () => {
        if (firstInView) return 'Feature1.png'
        if (secondInView) return 'Feature2.png'
        if (thirdInView) return 'Feature3.png'
        return 'Feature1.png'
    }

    const getContainer = (id: number) => {
        switch (id) {
            case 1:
                return firstContainer
            case 2:
                return secondContainer
            case 3:
                return thirdContainer
            default:
                return null
        }
    }

    // const { isScreenSmallerThan767 } = useScreenSize()

    return (
        <Wrapper className="App">
            <ImageWrapper>
                <Image src={getImage()} alt="a" ref={imageRef} />
            </ImageWrapper>

            <FeaturesStyled>
                {features.map((feature) => (
                    <Feature
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        refValue={getContainer(feature.id)}
                    />
                ))}
            </FeaturesStyled>
        </Wrapper>
    )
}

export default ScrollableComponent

const FeaturesStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
`

interface FeatureProps {
    title: string
    description: string
    icon: () => JSX.Element
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    refValue: any
}

const Feature = ({ title, description, icon, refValue }: FeatureProps) => {
    return (
        <TextSection ref={refValue}>
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
    )
}

const FeatureDescription = styled.div`
    width: 100%;
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

const FeatureTitle = styled.div`
    width: 100%;

    @media (max-width: 766px) {
        width: 70%;
    }

    @media (max-width: 560px) {
        width: 100%;
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
