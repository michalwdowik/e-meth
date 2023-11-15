import styled from 'styled-components'
import Button from './Button'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'

interface NewsletterSectionProps {
    isScreenExtraSmall: boolean
}

const getBackgroundUrl = (isScreenExtraSmall: boolean) =>
    isScreenExtraSmall
        ? '/src/assets/NewsletterGradientMobile.png'
        : '/src/assets/NewsletterGradient.png'

const NewsletterSection = styled.div<NewsletterSectionProps>`
    background: url(${(props) => getBackgroundUrl(props.isScreenExtraSmall)});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: black;
    height: 900px;
    display: flex;
    align-items: center;
    /* border: 2px red solid; */

    @media (max-width: 576px) {
        margin-left: -24px;
        width: calc(100% + 48px);
    }
`

interface GlassyBannerContainerProps {
    isScreenExtraSmall: boolean
}
const GlassyBannerContainer = styled.div<GlassyBannerContainerProps>`
    z-index: 0;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    /* margin: 2rem auto; */
    margin: 0 auto;
    /* width: max-content; */
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    /* position: relative; */
    border-width: 1px;
    border-style: solid;
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(50px);
    /* height: max-content; */
    gap: 40px;
    border-color: transparent;
    /* overflow: hidden; */
    /* width: 100%; */
    /* max-width: 856px; */
    padding: 218px 76px 154px 76px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 32px;
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

const StyledButton = styled(Button)`
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

const GlassyBanner = () => {
    const { isScreenExtraSmall } = useScreenSize()
    return (
        <NewsletterSection isScreenExtraSmall={isScreenExtraSmall}>
            <GlassyBannerContainer isScreenExtraSmall={isScreenExtraSmall}>
                <Text fontSize={isScreenExtraSmall ? 24 : 40}>
                    Join us on a journey to redefine what&apos;s <br /> possible
                    in the DeFi space.
                </Text>
                <StyledButton size={isScreenExtraSmall ? 'normal' : 'big'}>
                    Join Now!
                </StyledButton>
            </GlassyBannerContainer>
        </NewsletterSection>
    )
}

export default GlassyBanner
