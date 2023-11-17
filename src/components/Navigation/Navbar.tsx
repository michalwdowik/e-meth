import { useState } from 'react'
import styled from 'styled-components'
import Drawer from './Drawer'
import useScreenSize from '../../hooks/useScreenSize'
import Button from '../Button'
import Logo from '../Logo'
import useBodyOverflow from '../../hooks/useBodyOverflow'

const sections = ['DCA', 'About', 'Features', 'Partners', 'FAQ']

const NavbarContainer = styled.nav<{ type: 'upper' | 'lower' }>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: ${({ type }) => (type === 'upper' ? '40px 80px' : '0')};
    background: black;
    color: #fff;

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
        font-size: 14px;
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

const ItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
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

const NavItem = styled.li`
    transition: color 0.15s ease-in-out;
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
interface NavbarProps {
    type: 'upper' | 'lower'
}

const Navbar = ({ type }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const { isScreenSmallerThan767 } = useScreenSize()

    const navItems = sections.map((section) => (
        <NavItem key={section}>{section}</NavItem>
    ))

    useBodyOverflow(isOpen)

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    const hideDrawer = () => {
        setIsOpen(false)
    }

    let buttonElement
    if (!isScreenSmallerThan767) {
        buttonElement =
            type === 'upper' ? (
                <Button>Try Emeth Now!</Button>
            ) : (
                <Button>Join Now!</Button>
            )
    }

    return (
        <>
            <NavbarContainer type={type}>
                <Logo />
                <ItemsWrapper>
                    <NavItems>{navItems}</NavItems>
                    {buttonElement}
                </ItemsWrapper>
                <Wrapper>
                    {isScreenSmallerThan767 ? <Button>Try Now</Button> : null}
                    <MobileMenuIcon onClick={toggleDrawer}>☰</MobileMenuIcon>
                </Wrapper>
            </NavbarContainer>
            <Drawer
                sections={sections}
                isOpen={isOpen}
                hideDrawer={hideDrawer}
            />
        </>
    )
}

export default Navbar
