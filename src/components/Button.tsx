import styled from 'styled-components'
import { useState } from 'react'
import Modal from './Modal/Modal'
import BeforePseudoElement from '../utils/beforePseudoElement'

type ButtonSize = 'normal' | 'big'

interface ButtonProps {
    children: React.ReactNode
    size?: ButtonSize
}

const StyledButton = styled.button<ButtonProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    z-index: 3;
    color: #fff;
    background: transparent;
    cursor: pointer;
    border: none;
    padding: ${({ size }) => (size === 'normal' ? '0px 24px' : '0px 40px')};
    height: ${({ size }) => (size === 'normal' ? '40px' : '60px')};
    border-radius: ${({ size }) => (size === 'normal' ? '40px' : '64px')};
    &::before {
        border: ${({ size }) =>
            size === 'normal'
                ? '2px solid transparent'
                : '3px solid transparent'};
        border-radius: ${({ size }) => (size === 'normal' ? '40px' : '64px')};
        ${BeforePseudoElement};
    }
`

const Button = ({ children, size = 'normal' }: ButtonProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const toggleModal = (event: React.MouseEvent) => {
        event.stopPropagation()
        setIsModalVisible((prev) => !prev)
    }

    return (
        <>
            <StyledButton onClick={toggleModal} size={size}>
                {children}
            </StyledButton>
            {isModalVisible && <Modal isVisible onClose={toggleModal} />}
        </>
    )
}

export default Button
