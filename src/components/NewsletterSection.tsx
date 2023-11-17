import styled from 'styled-components'
import Button from './Button'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'
import { greyGradient } from '../utils/gradient'
import webkitMask from '../utils/webkitMask'
import BeforePseudoElement from '../utils/beforePseudoElement'

const NewsletterSectionStyled = styled.div`
    background: url('NewsletterGradient.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 900px;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        height: 600px;
    }
    @media (max-width: 576px) {
        margin-left: -24px;
        width: calc(100% + 48px);
        background: url('NewsletterGradientMobile.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center right;
        height: 550px;
    }
`

const NewsletterGlassyBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
        padding: 132px 76px 48px 76px;
    }

    @media (max-width: 767px) {
        padding: 108px 76px 48px 76px;
        gap: 32px;
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

const JoinNowButton = styled(Button)`
    background-color: #ff4081;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    outline: none;
    margin-top: 1rem;

    &:hover {
        background-color: #e03565;
    }
`

const NewsletterSection = () => {
    const { isScreenExtraSmall } = useScreenSize()
    return (
        <NewsletterSectionStyled>
            <NewsletterGlassyBanner>
                <Text fontSize={isScreenExtraSmall ? 24 : 40}>
                    Join us on a journey to redefine what&apos;s <br /> possible
                    in the DeFi space.
                </Text>
                <JoinNowButton size={isScreenExtraSmall ? 'normal' : 'big'}>
                    Join Now!
                </JoinNowButton>
            </NewsletterGlassyBanner>
        </NewsletterSectionStyled>
    )
}

export default NewsletterSection
