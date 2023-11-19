import styled from 'styled-components'
import SocialMedia from './SocialMedia'
import ArrowRight from './Icons/ArrowRight'
import useScreenSize from '../hooks/useScreenSize'
import Logo from './Logo'

const navList = ['Terms & Conditions', 'Privacy Policy']

const FooterStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 768px) {
        align-items: center;
    }
`

const CopyrightInfo = styled.div`
    color: #aaa;
    font-size: 14px;
    text-align: left;
`

const FooterButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 14px;
    cursor: pointer;
    color: #aaa;
    background-color: transparent;
    &:hover {
        background: linear-gradient(
            160deg,
            #da301f 0%,
            #f48946 18.229%,
            #ee3560 35.417%,
            #fa4784 51.563%,
            #ff48c0 66.667%,
            #8e38b5 81.771%,
            #5542bb 89.063%,
            #ffffff 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: white;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
        background-position: -100%;
        background-size: 200% 100%;
        animation: slideIn 0.3s linear forwards;
    }
`

const FooterInfoStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 32px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const FooterNavStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: 768px) {
        gap: 16px;
    }
`

const FooterLogoStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: -40px;
`

const Footer = () => {
    const { isScreenSmall } = useScreenSize()

    return (
        <FooterStyled>
            {isScreenSmall && (
                <FooterLogoStyled>
                    <Logo />
                </FooterLogoStyled>
            )}
            <SocialMedia />
            <FooterInfoStyled>
                <CopyrightInfo>
                    © 2023 eMeth. All rights reserved.
                </CopyrightInfo>
                <FooterNavStyled>
                    {navList.map((item) => (
                        <FooterButtonStyled key={item}>
                            {item}
                            <ArrowRight />
                        </FooterButtonStyled>
                    ))}
                </FooterNavStyled>
            </FooterInfoStyled>
        </FooterStyled>
    )
}

export default Footer
