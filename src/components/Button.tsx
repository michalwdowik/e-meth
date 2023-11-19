import React, { useState } from 'react'
import styled from 'styled-components'

import Modal from './Modal/Modal'
import BeforePseudoElement from '../utils/beforePseudoElement'
import useBodyOverflow from '../hooks/useBodyOverflow'

type ButtonSize = 'normal' | 'big'

interface ButtonProps {
    children: React.ReactNode
    size?: ButtonSize
}

const StyledButton = styled.button<ButtonProps>`
    font-size: 14px;
    z-index: 3;
    color: #fff;
    background: transparent;
    backdrop-filter: blur(25px);
    cursor: pointer;
    padding: ${({ size }) => (size === 'normal' ? '0px 24px' : '0px 40px')};
    height: ${({ size }) => (size === 'normal' ? '40px' : '60px')};
    border-radius: ${({ size }) => (size === 'normal' ? '40px' : '64px')};
    transition: all 0.2s ease-in-out;

    &::before {
        border: ${({ size }) =>
            size === 'normal'
                ? '2px solid transparent'
                : '3px solid transparent'};
        border-radius: ${({ size }) => (size === 'normal' ? '40px' : '64px')};
        ${BeforePseudoElement};
    }

    &:hover {
        transform: scale(1.03);
        filter: brightness(170%);
    }
`

const Button: React.FC<ButtonProps> = ({ children, size = 'normal' }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    useBodyOverflow(isModalVisible)

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
