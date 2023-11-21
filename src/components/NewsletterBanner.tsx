import styled from 'styled-components'
import Button from './Button'
import Text from './Text'
import useScreenSize from '../hooks/useScreenSize'
import { greyGradient } from '../utils/gradient'
import webkitMask from '../utils/webkitMask'
import BeforePseudoElement from '../utils/beforePseudoElement'

const NewsletterSectionWrapper = styled.div`
    max-width: 1414px;
    margin: 0 auto;
    margin-top: 79px;
    border: 2px red solid;
    width: 100%;
    padding-left: ${(props) => props.theme.margins.medium};
    padding-right: ${(props) => props.theme.margins.medium};
    @media (max-width: 767px) {
        padding: 0;
    }
`

const NewsletterSectionStyled = styled.div`
    background: url('NewsletterGradient.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 870px;
    display: flex;
    align-items: center;
    border: 2px green solid;
    /* width: 1008px; */
    margin: 0 auto;

    @media (max-width: 767px) {
        height: 600px;
    }

    @media (max-width: 576px) {
        background: url('NewsletterGradientMobile.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center right;
        height: 550px;
        margin-left: -16px;
        width: calc(100% + 32px);
    }
`

const NewsletterGlassyBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    border: 1px solid transparent;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    gap: 40px;
    border-color: transparent;
    padding: 218px 76px 154px 76px;
    border-radius: 32px;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    background: rgba(255, 255, 255, 0.05);
    overflow: hidden;
    width: 100%;

    @media (max-width: 1224px) {
        height: auto;
    }
    &::before {
        border-radius: 32px;
        padding: 1px;
        ${BeforePseudoElement}
        background: ${greyGradient};
        ${webkitMask}
    }

    @media (max-width: 1167px) {
        padding: 156px 76px 130px 76px;
    }

    @media (max-width: 991px) {
        padding: 96px 76px 48px 76px;
    }

    @media (max-width: 870px) {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    @media (max-width: 767px) {
        padding: 80px 76px 36px 76px;
        gap: 32px;
    }

    @media (max-width: 767px) {
        padding: 48px;
        gap: 32px;
    }

    @media screen and (max-width: 576px) {
        margin: 24px;
    }
`

const NewsletterBanner = () => {
    const { isScreenExtraSmall } = useScreenSize()
    return (
        <NewsletterSectionWrapper>
            <NewsletterSectionStyled>
                <NewsletterGlassyBanner>
                    <Text
                        lineHeight={130}
                        fontSize={isScreenExtraSmall ? 24 : 40}
                    >
                        Join us on a journey to redefine what&apos;s <br />{' '}
                        possible in the DeFi space.
                    </Text>
                    <Button
                        fontSize={isScreenExtraSmall ? 14 : 18}
                        size={isScreenExtraSmall ? 'normal' : 'big'}
                    >
                        Join Now!
                    </Button>
                </NewsletterGlassyBanner>
            </NewsletterSectionStyled>
        </NewsletterSectionWrapper>
    )
}

export default NewsletterBanner
