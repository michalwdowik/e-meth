import styled from 'styled-components'
import Text from '../Text'
import useScreenSize from '../../hooks/useScreenSize'
import LearnMoreButton from './LearnMoreButton'

interface FeatureProps {
    title: string
    description: string
    icon: () => JSX.Element
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    refValue: any
    imageUrlMobile: string
    featureId: number
}

const Feature = ({
    title,
    description,
    icon,
    refValue,
    imageUrlMobile,
    featureId,
}: FeatureProps) => {
    const { isScreenSmall } = useScreenSize()

    return (
        <>
            {isScreenSmall && <FeatureImage src={imageUrlMobile} alt={title} />}
            <TextSection featureId={featureId} ref={refValue}>
                {icon()}
                <FeatureTitle>
                    <Text
                        lineHeight={130}
                        fontSize={isScreenSmall ? 20 : 32}
                        fontWeight="bold"
                        align="left"
                    >
                        {title}
                    </Text>
                </FeatureTitle>
                <FeatureDescription>
                    <Text
                        lineHeight={160}
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
    z-index: 6;
`

interface TextSectionProps {
    featureId: number
}

const TextSection = styled.div<TextSectionProps>`
    max-width: 30%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    /* border: 2px red solid; */
    padding: ${({ featureId }) => (featureId !== 3 ? '0 0 240px 0' : '0')};

    @media (max-width: 766px) {
        max-width: 100%;
        gap: 32px;
        padding: 0;
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

const FeatureImage = styled.img`
    width: 100%;
    margin-bottom: 40px;
`
