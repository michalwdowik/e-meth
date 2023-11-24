import styled from 'styled-components'
import useScreenSize from '../../hooks/useScreenSize'
import Badge from '../Badge'
import Text from '../Text'
import Cards from './Cards'

const ValuesSectionStyled = styled.div`
    margin-top: 206px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: -112px;
    width: calc(100% + 224px);
    padding: 0 112px;
    overflow: hidden;
    padding-top: 32px;

    @media (max-width: 767px) {
        background: none;
        margin-left: 0;
        width: calc(100% + 32px);
        margin-left: -16px;
        padding: 0 16px;
        margin-top: 129px;
    }
`

const Heading = styled.div`
    text-align: start;
    max-width: 1216px;
    width: 100%;
    padding-left: ${(props) => props.theme.margins.medium};
    color: #fff;
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 767px) {
        padding-left: 0;
        margin-bottom: 100px;
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
    }

    @media (max-width: 650px) {
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

    @media (max-width: 450px) {
        bottom: 0px;
        width: 90%;
    }
`

const ValuesSection = () => {
    const { isScreenExtraSmall, isScreenSmall } = useScreenSize()

    return (
        <ValuesSectionStyled id="DCA">
            {isScreenSmall && (
                <GradientMobileUpper src="FeaturesGradientMobileUpper.png" />
            )}
            {isScreenSmall && (
                <GradientMobileLower src="FeaturesGradientMobileLower.png" />
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
                        lineHeight={160}
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
        </ValuesSectionStyled>
    )
}

export default ValuesSection
