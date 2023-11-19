import styled from 'styled-components'
import ArrowRight from '../Icons/ArrowRight'
import { Text } from '../Text'
import useScreenSize from '../../hooks/useScreenSize'
import hoverStyles from '../../utils/hoverStyles'

interface FeatureProps {
    title: string
    description: string
    icon: () => JSX.Element
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    refValue: any
    imageUrl: string
}

const Feature = ({
    title,
    description,
    icon,
    refValue,
    imageUrl,
}: FeatureProps) => {
    const { isScreenSmall } = useScreenSize()

    return (
        <>
            {isScreenSmall && <FeatureImage src={imageUrl} alt={title} />}
            <TextSection ref={refValue}>
                {icon()}
                <FeatureTitle>
                    <Text
                        fontSize={isScreenSmall ? 20 : 32}
                        fontWeight="bold"
                        align="left"
                    >
                        {title}
                    </Text>
                </FeatureTitle>
                <FeatureDescription>
                    <Text
                        fontSize={isScreenSmall ? 14 : 16}
                        align="left"
                        fontWeight="light"
                    >
                        {description}
                    </Text>
                </FeatureDescription>
                <LearnMoreButton />
            </TextSection>
        </>
    )
}

export default Feature

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
        ${hoverStyles}
    }
`

const FeatureImage = styled.img`
    width: 100%;
    margin-bottom: 40px;
`
