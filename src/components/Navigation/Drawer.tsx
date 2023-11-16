import styled from 'styled-components'
import Button from '../Button'
import SocialMedia from '../SocialMedia'

const DrawerItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
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

interface DrawerProps {
    sections: string[]
    isOpen: boolean
    hideDrawer: () => void
}

const Drawer = ({ sections, isOpen, hideDrawer }: DrawerProps) => {
    const drawerItems = sections.map((section) => (
        <DrawerItem key={section} onClick={hideDrawer}>
            {section}
        </DrawerItem>
    ))

    return (
        <DrawerMenu isOpen={isOpen}>
            <CloseButton onClick={hideDrawer}>
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
            <CopyrightInfo>© 2023 Emeth. All rights reserved.</CopyrightInfo>
        </DrawerMenu>
    )
}

export default Drawer
