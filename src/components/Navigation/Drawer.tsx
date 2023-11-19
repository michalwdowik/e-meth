import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import SocialMedia from '../SocialMedia'
import hoverStyles from '../../utils/hoverStyles'

interface DrawerProps {
    sections: string[]
    isOpen: boolean
    hideDrawer: () => void
}

const Drawer: React.FC<DrawerProps> = ({ sections, isOpen, hideDrawer }) => {
    const drawerItems = sections.map((section) => (
        <DrawerItem key={section} onClick={hideDrawer}>
            {section}
        </DrawerItem>
    ))

    return (
        <DrawerMenu isOpen={isOpen}>
            <CloseButton onClick={hideDrawer}>
                Close
                <CloseIcon
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
                </CloseIcon>
            </CloseButton>
            <DrawerItems>{drawerItems}</DrawerItems>
            <Button>Try Emeth Now!</Button>
            <DrawerFooter>
                <SocialMedia />
                <Copyright>© 2023 Emeth. All rights reserved.</Copyright>
            </DrawerFooter>
        </DrawerMenu>
    )
}

const DrawerMenu = styled.div<{ isOpen: boolean }>`
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
    transition: opacity 0.15s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    z-index: 4;
    padding-bottom: 48px;
    padding-left: 16px;
    padding-right: 16px;

    @media (max-width: 768px) {
        padding-top: 20%;
    }

    @media (max-width: 566px) {
        padding-top: 30%;
    }

    @media (max-width: 300px) {
        padding-top: 50%;
    }
`

const DrawerItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 26px;
    margin-bottom: 24px;
`

const DrawerItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    transition: color 0.15s ease-in-out;

    &:hover {
        ${hoverStyles}
    }
`

const CloseButton = styled.div`
    position: absolute;
    top: 40px;
    right: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 8px;
    transition: opacity 0.15s ease-in-out;

    &:hover {
        opacity: 0.6;
    }
`

const CloseIcon = styled.svg``

const DrawerFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
`

const Copyright = styled.div`
    color: #aaa;
    font-size: 14px;
    text-align: center;
`

export default Drawer
