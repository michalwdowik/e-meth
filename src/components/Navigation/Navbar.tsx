import { useState } from 'react'
import styled from 'styled-components'
import Drawer from './Drawer'
import useScreenSize from '../../hooks/useScreenSize'
import Button from '../Button'
import Logo from '../Logo'
import useBodyOverflow from '../../hooks/useBodyOverflow'
import hoverStyles from '../../utils/hoverStyles'
import scrollToSection from '../../utils/scrollToSection'

const sections = ['DCA', 'About', 'Features', 'Partners', 'FAQ']

const NavbarContainer = styled.nav<{ type: 'upper' | 'lower' }>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: ${({ type }) => (type === 'upper' ? '40px 80px' : '0')};
    color: #fff;

    @media (max-width: 768px) {
        padding: ${({ type }) => (type === 'upper' ? '40px 16px' : '0')};
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        padding: ${({ type }) => (type === 'upper' ? '40px 20px' : '0')};
    }
`

const NavItems = styled.ul`
    display: flex;
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

    transition: opacity 0.15s ease-in-out;
    &:hover {
        opacity: 0.6;
    }

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
        ${hoverStyles}
    }
`

interface NavbarProps {
    type: 'upper' | 'lower'
}

const Navbar = ({ type }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { isScreenSmall } = useScreenSize()

    const handleNavItemClick = (sectionId: string) => {
        scrollToSection(sectionId)
        hideDrawer()
    }

    const navItems = sections.map((section) => (
        <NavItem key={section} onClick={() => handleNavItemClick(section)}>
            {section}
        </NavItem>
    ))

    useBodyOverflow(isOpen)

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    const hideDrawer = () => {
        setIsOpen(false)
    }

    const buttonElement = !isScreenSmall && (
        <Button size="normal">
            {type === 'upper' ? 'Try Emeth Now!' : 'Join Now!'}
        </Button>
    )

    const mobileButtonElement = isScreenSmall && <Button>Try Now</Button>

    return (
        <>
            <NavbarContainer type={type}>
                <Logo />
                <ItemsWrapper>
                    <NavItems>{navItems}</NavItems>
                    {buttonElement}
                </ItemsWrapper>
                <Wrapper>
                    {mobileButtonElement}
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
