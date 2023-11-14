/* eslint-disable no-nested-ternary */
import { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'
import SocialMedia from './SocialMedia'
import useScreenSize from '../hooks/useScreenSize'

const sections = ['DCA', 'About', 'Features', 'Partners', 'FAQ']

const NavbarContainer = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: ${({ type }) => (type === 'upper' ? '40px 80px' : '0')};
    background: black;
    color: #fff;
    /* z-index: 3; */

    @media (max-width: 768px) {
        padding: ${({ type }) => (type === 'upper' ? '40px 16px' : '0')};
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        padding: ${({ type }) => (type === 'upper' ? '40px 20px' : '0')};
    }
`

const NavItems = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    z-index: 2;

    @media (max-width: 766px) {
        display: none;
    }

    li {
        padding: 0 15px;
        cursor: pointer;
    }
`

const MobileMenuIcon = styled.div`
    display: none;
    z-index: 2;
    @media (max-width: 766px) {
        display: block;
        font-size: 24px;
        cursor: pointer;
    }
`
interface DrawerMenuProps {
    isOpen: boolean
}

const DrawerMenu = styled.div<DrawerMenuProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
    transition: transform 0.4s ease-in-out;
    transform: ${({ isOpen }) =>
        isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    z-index: 4;
`

const DrawerItem = styled.div`
    font-size: 24px;
    padding: 10px 0;
    cursor: pointer;
`

const CloseButton = styled.div`
    position: absolute;
    top: 40px;
    right: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #fff;
    gap: 8px;
`

const CopyrightInfo = styled.div`
    color: #aaa;
    font-size: 14px;
    text-align: center;
`

const ItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`
interface NavbarProps {
    type: 'upper' | 'lower'
}

const DrawerItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

    @media (min-width: 767px) {
        display: none;
    }

    @media (max-width: 320px) {
        gap: 16px;
    }
`

const Navbar = ({ type }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const { isScreenSmallerThan767 } = useScreenSize()

    const navItems = sections.map((section) => (
        <li style={{ fontSize: '14px' }} key={section}>
            {section}
        </li>
    ))
    const drawerItems = sections.map((section) => (
        <DrawerItem key={section} onClick={() => setIsOpen(false)}>
            {section}
        </DrawerItem>
    ))

    return (
        <>
            <NavbarContainer type={type}>
                <Logo />
                <ItemsWrapper>
                    <NavItems>{navItems}</NavItems>
                    {!isScreenSmallerThan767 &&
                        (type === 'upper' ? (
                            <Button>Try Emeth Now!</Button>
                        ) : (
                            <Button>Join Now!</Button>
                        ))}
                </ItemsWrapper>
                <Wrapper>
                    {isScreenSmallerThan767 && <Button>Try Now</Button>}
                    <MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
                        ☰
                    </MobileMenuIcon>
                </Wrapper>
            </NavbarContainer>
            <DrawerMenu isOpen={isOpen}>
                <CloseButton onClick={() => setIsOpen(false)}>
                    Close
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                    >
                        <path
                            d="M8.53341 25.3332L6.66675 23.4665L14.1334 15.9998L6.66675 8.53317L8.53341 6.6665L16.0001 14.1332L23.4667 6.6665L25.3334 8.53317L17.8667 15.9998L25.3334 23.4665L23.4667 25.3332L16.0001 17.8665L8.53341 25.3332Z"
                            fill="white"
                        />
                    </svg>
                </CloseButton>
                <DrawerItems>{drawerItems}</DrawerItems>
                <Button>Try Emeth Now!</Button>
                <SocialMedia />
                <CopyrightInfo>
                    © 2023 Emeth. All rights reserved.
                </CopyrightInfo>
            </DrawerMenu>
        </>
    )
}

export default Navbar
