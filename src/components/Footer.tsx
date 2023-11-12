import styled from 'styled-components'
import SocialMedia from './SocialMedia'
import ArrowRight from './Icons/ArrowRight'
import useScreenSize from '../hooks/useScreenSize'
import Logo from './Logo'

const navList = ['Terms & Conditions', 'Privacy Policy']

const FooterStyled = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 20px;
    @media (max-width: 768px) {
        align-items: center;
        left: 50%;
        transform: translateX(-50%);
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
    const { isScreenSmallerThan767 } = useScreenSize()

    return (
        <FooterStyled>
            {isScreenSmallerThan767 && (
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
                    {navList.map((item) => {
                        return (
                            <FooterButtonStyled key={item}>
                                {item}
                                <ArrowRight />
                            </FooterButtonStyled>
                        )
                    })}
                </FooterNavStyled>
            </FooterInfoStyled>
        </FooterStyled>
    )
}

export default Footer
