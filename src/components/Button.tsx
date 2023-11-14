import styled from 'styled-components'
import { useState } from 'react'
import Modal from './Modal'
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
    color: #fff;
    background: transparent;
    cursor: pointer;
    border: none;
    ${({ size }) =>
        size === 'normal'
            ? `
        padding: 0px 24px;
        height: 40px;
    `
            : `padding: 0px 40px; 
            height: 60px;
            border-radius: 64px;
`}

    &::before {
        ${({ size }) =>
            size === 'normal'
                ? 'border: 2px solid transparent; border-radius: 40px;'
                : 'border:  3px solid transparent; border-radius: 64px;'}
        ${BeforePseudoElement};
    }
`

const Button = ({ children, size = 'normal' }: ButtonProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const toggleModal = (event: React.MouseEvent) => {
        event.stopPropagation()
        setIsModalVisible(!isModalVisible)
    }

    return (
        <>
            <StyledButton onClick={toggleModal} size={size}>
                {children}
            </StyledButton>
            {isModalVisible && (
                <Modal isVisible={isModalVisible} onClose={toggleModal} />
            )}
        </>
    )
}

export default Button
