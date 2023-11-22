import styled from 'styled-components'
import Badge from '../Badge'
import Text from '../Text'
import useScreenSize from '../../hooks/useScreenSize'

const FeaturesSectionStyled = styled.div`
    /* padding: 0 112px; */
    /* margin-left: -112px; */
    /* width: calc(100% + 224px); */
    /* position: relative; */
    /* border: 2px white solid; */
    max-width: 1216px;
    margin: 0 auto;
    margin-bottom: 160px;
    /* @media (max-width: 1024px) {
        margin-left: -64px;
        width: calc(100% + 128px);
        padding: 0 64px;
    }

    @media (max-width: 767px) {
        padding: 160px 24px 0 24px;
        margin-left: -24px;
        width: calc(100% + 48px);
    } */

    @media (max-width: 767px) {
        margin-bottom: 0;
        width: 100%;
        padding-top: 80px;
    }
`

const FeaturesSectionHero = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 60px;
    margin: 0 auto;
    margin-bottom: 64px;

    @media (max-width: 920px) {
        flex-direction: column;
        justify-content: center;
    }
`

const FeaturesSectionHeroTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 700px;

    @media (max-width: 920px) {
        max-width: 100%;
    }
`

const FeaturesSectionHeroDescription = styled.div`
    margin-top: 128px;
    max-width: 30%;

    @media (max-width: 920px) {
        max-width: 100%;
        margin-top: 0;
    }
`

const FeaturesSectionHeading = () => {
    const { isScreenExtraSmall } = useScreenSize()

    const heroTitleFontSize = isScreenExtraSmall ? 28 : 56
    const heroDescriptionFontSize = isScreenExtraSmall ? 14 : 16

    return (
        <FeaturesSectionStyled>
            <FeaturesSectionHero>
                <FeaturesSectionHeroTitle>
                    <Badge>Features</Badge>
                    <Text
                        lineHeight={130}
                        fontSize={heroTitleFontSize}
                        fontWeight="bold"
                        align="left"
                    >
                        Unleash the Power of Automated Portfolio <br />
                        Management
                    </Text>
                </FeaturesSectionHeroTitle>
                <FeaturesSectionHeroDescription>
                    <Text
                        lineHeight={160}
                        fontSize={heroDescriptionFontSize}
                        fontWeight="light"
                        align="left"
                    >
                        Emeth brings to you a meticulously crafted suite of
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
        </FeaturesSectionStyled>
    )
}

export default FeaturesSectionHeading
