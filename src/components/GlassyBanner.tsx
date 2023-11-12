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
    background-color: #070709;
    height: 800px;
    display: flex;
    align-items: center;
`

interface GlassyBannerContainerProps {
    isScreenExtraSmall: boolean
}
const GlassyBannerContainer = styled.div<GlassyBannerContainerProps>`
    height: ${({ isScreenExtraSmall }) =>
        isScreenExtraSmall ? '353px' : '800px'};
    padding: ${({ isScreenExtraSmall }) =>
        isScreenExtraSmall ? '48px' : '218px 76px 154px 76px'};
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    margin: 2rem auto;
    width: max-content;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    position: relative;
    border-width: 1px;
    border-style: solid;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(50px);
    height: max-content;
    gap: 40px;
    border-color: transparent;
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
`

const StyledButton = styled(Button)`
    background-color: #ff4081;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
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
                    JOIN NOW
                </StyledButton>
            </GlassyBannerContainer>
        </NewsletterSection>
    )
}

export default GlassyBanner
