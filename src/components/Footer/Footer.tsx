import styled from 'styled-components'
import SocialMedia from '../SocialMedia/SocialMedia'
import ArrowRight from '../Icons/ArrowRight'

const navList = ['Terms & Conditions', 'Privacy Policy']

const FooterStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 20px;
    margin: 64px 32px 16px 32px;
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
`

const FooterNavStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`

const Footer = () => {
    return (
        <FooterStyled>
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
