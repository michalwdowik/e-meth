import styled from 'styled-components'
import useScreenSize from '../../hooks/useScreenSize'
import Badge from '../Badge'
import { Text } from '../Text'
import Cards from './Cards'

const Container = styled.div`
    background: url('/src/assets/GlassyBannerGradient.png') no-repeat right
        calc(100% - 60px);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: -112px;
    width: calc(100% + 224px);
    padding: 0 112px;
    margin-top: 64px;

    @media (max-width: 768px) {
        background: none;
    }
`

const Heading = styled.div`
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

const HeadingDescription = styled.div`
    width: 50%;
    z-index: 1;

    @media (max-width: 991px) {
        width: 100%;
    }
`

const GradientMobileUpper = styled.img`
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

const GradientMobileLower = styled.img`
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
        <Container>
            {isScreenSmallerThan767 && (
                <GradientMobileUpper src="/src/assets/FeaturesGradientMobileUpper.png" />
            )}
            {isScreenSmallerThan767 && (
                <GradientMobileLower src="/src/assets/FeaturesGradientMobileLower.png" />
            )}
            <Heading>
                <Badge>VALUES</Badge>
                <Text
                    align="left"
                    fontSize={isScreenExtraSmall ? 28 : 56}
                    fontWeight="bold"
                >
                    Anchored in Values, <br /> Driven by Innovation
                </Text>
                <HeadingDescription>
                    <Text
                        align="left"
                        fontSize={isScreenExtraSmall ? 14 : 20}
                        fontWeight="light"
                    >
                        At the heart of Emeth lies a steadfast commitment to a
                        set of guiding principles that shape every facet of our
                        platform and influence every decision we undertake.
                    </Text>
                </HeadingDescription>
            </Heading>

            <Cards />
        </Container>
    )
}

export default ValuesSection