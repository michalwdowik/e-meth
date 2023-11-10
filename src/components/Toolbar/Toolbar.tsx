import { useState } from 'react'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import SocialMedia from '../SocialMedia/SocialMedia'
import Modal from '../Modal/Modal'
import useModal from '../../hooks/useModal'

const sections = ['DCA', 'About', 'Features', 'Partners', 'FAQ']

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 80px;
    background: transparent;
    color: #fff;
    z-index: 3;

    @media (max-width: 768px) {
        justify-content: flex-end;
    }
`

const NavItems = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        display: none;
    }

    li {
        padding: 0 15px;
        cursor: pointer;
    }
`

const MobileMenuIcon = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        font-size: 24px;
        cursor: pointer;
    }
`

const DrawerMenu = styled.div`
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
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) =>
        isOpen ? 'translateY(0)' : 'translateY(-100%)'};
`

const DrawerItem = styled.div`
    font-size: 24px;
    padding: 10px 0;
    cursor: pointer;
`

const CloseButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
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
    padding: 20px 0;
`

const ItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: 768px) {
        display: none;
    }
`

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = sections.map((section) => <li key={section}>{section}</li>)
    const drawerItems = sections.map((section) => (
        <DrawerItem key={section} onClick={() => setIsOpen(false)}>
            {section}
        </DrawerItem>
    ))
    const { isVisible, toggleModal } = useModal()

    return (
        <>
            <NavbarContainer>
                <Logo />
                <ItemsWrapper>
                    <NavItems>{navItems}</NavItems>
                    <Button onClick={toggleModal}>Try Emeth Now!</Button>
                    <Modal isVisible={isVisible} onClose={toggleModal} />
                </ItemsWrapper>

                <MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </MobileMenuIcon>
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
                {drawerItems}
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
