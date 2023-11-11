import styled from 'styled-components'
import { useState } from 'react'
import linearGradient from '../../utils/gradient'
import Modal from '../Modal/Modal'

type ButtonSize = 'normal' | 'big'
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
`}

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 40px;
        border: 2px solid transparent;
        background: ${linearGradient} border-box;
        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
    }
`

interface ButtonProps {
    children: React.ReactNode
    size?: ButtonSize
}

const Button = ({ children, size = 'normal' }: ButtonProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const toggleModal = (event) => {
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
