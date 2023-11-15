import styled from 'styled-components'
import { Text } from './Text'
import Badge from './Badge'
import useScreenSize from '../hooks/useScreenSize'
import { cardDataRow1, cardDataRow2 } from '../utils/cardData'

interface CardProps {
    title: string
    description: string
    icon: string
}

interface RowProps {
    justify: string
}

const ValuesSectionContainer = styled.div`
    background: url('/src/assets/GlassyBannerGradient.png');
    background-repeat: no-repeat;
    background-position: right;
    position: relative;
    background-position: calc(100%) calc(100% - 60px);
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: -112px;
    width: calc(100% + 224px);
    padding: 0 112px;

    @media (max-width: 768px) {
        background: none;
    }
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    gap: 32px;
`

const StyledCard = styled.div`
    position: relative;
    display: flex;
    max-width: 384px;
    height: 384px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-radius: 16px;
    border-color: transparent;
    backdrop-filter: blur(50px);
    background: rgba(255, 255, 255, 0.05);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 16px;
        padding: 1px;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.377),
            rgba(255, 0, 0, 0)
        );
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }

    @media (max-width: 768px) {
        max-width: 768px;
        height: 300px;
    }

    @media (max-width: 567px) {
        height: 384px;
    }
`

const CardIcon = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

const CardTitle = styled.div`
    margin: 16px 0;
    font-size: 24px;
    font-weight: bold;
`

const CardDescription = styled.div`
    width: 80%;
    font-size: 16px;
    text-align: center;
    color: #fff;
    text-align: center;
    font-family: Sora;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
`

const Row = styled.div<RowProps>`
    display: flex;
    gap: 2rem;
    justify-content: ${(props) => props.justify};

    @media (max-width: 1445px) {
        justify-content: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const SectionHeading = styled.div`
    text-align: start;
    color: #fff;
    margin-bottom: 80px;
    margin-left: 106px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 1445px) {
        margin-left: 0;
    }
`

const Card = ({ title, description, icon }: CardProps) => (
    <StyledCard>
        <CardIcon>
            <img src={icon} alt={title} />
        </CardIcon>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </StyledCard>
)

const SectionHeadingDescription = styled.div`
    width: 50%;
    z-index: 1;

    @media (max-width: 991px) {
        width: 100%;
    }
`

const FeaturesGradientMobileUpper = styled.img`
    position: absolute;
    width: 100%;
    z-index: 0;
    position: top;

    @media (max-width: 768px) {
        top: 100px;
        width: 85%;
    }

    @media (max-width: 650px) {
        width: 80%;
        top: 300px;
    }

    @media (max-width: 560px) {
        top: 350px;
    }
`

const FeaturesGradientMobileLower = styled.img`
    position: absolute;
    z-index: 0;
    position: bottom;
    bottom: 100px;
    width: 70%;
    left: 0;

    @media (max-width: 768px) {
        bottom: -300px;
        width: 60%;
    }

    @media (max-width: 650px) {
        bottom: -150px;
        width: 60%;
    }

    @media (max-width: 560px) {
        bottom: 100px;
        width: 70%;
    }

    @media (max-width: 440px) {
        bottom: 100px;
    }
`

const ValuesSection = () => {
    const { isScreenExtraSmall, isScreenSmallerThan767 } = useScreenSize()
    return (
        <ValuesSectionContainer>
            {isScreenSmallerThan767 && (
                <FeaturesGradientMobileUpper src="/src/assets/FeaturesGradientMobileUpper.png" />
            )}
            {isScreenSmallerThan767 && (
                <FeaturesGradientMobileLower src="/src/assets/FeaturesGradientMobileLower.png" />
            )}
            <SectionHeading>
                <Badge>VALUES</Badge>
                <Text
                    align="left"
                    fontSize={isScreenExtraSmall ? 28 : 56}
                    fontWeight="bold"
                >
                    Anchored in Values, <br /> Driven by Innovation
                </Text>
                <SectionHeadingDescription>
                    <Text
                        align="left"
                        fontSize={isScreenExtraSmall ? 14 : 20}
                        fontWeight="light"
                    >
                        At the heart of Emeth lies a steadfast commitment to a
                        set of guiding principles that shape every facet of our
                        platform and influence every decision we undertake.
                    </Text>
                </SectionHeadingDescription>
            </SectionHeading>

            <CardContainer>
                <Row justify="start">
                    {cardDataRow1.map((data) => (
                        <Card
                            key={data.id}
                            title={data.title}
                            description={data.description}
                            icon={data.icon}
                        />
                    ))}
                </Row>
                <Row justify="end">
                    {cardDataRow2.map((data) => (
                        <Card
                            key={data.id}
                            title={data.title}
                            description={data.description}
                            icon={data.icon}
                        />
                    ))}
                </Row>
            </CardContainer>
        </ValuesSectionContainer>
    )
}

export default ValuesSection
