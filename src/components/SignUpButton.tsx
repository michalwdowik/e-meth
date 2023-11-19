import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledSignUpButton = styled.button`
    font-size: 14px;
    color: #fff;
    background: transparent;
    cursor: pointer;
    padding: 0 24px;
    height: 40px;
    transition: all 0.2s ease-in-out;

    &::before {
        border-radius: 40px;
        border: 2px solid transparent;
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
    }

    &:hover {
        transform: scale(1.03);
        filter: brightness(170%);
    }
`

interface SignUpButtonProps {
    children: ReactNode
}

const SignUpButton: React.FC<SignUpButtonProps> = ({ children }) => (
    <StyledSignUpButton>{children}</StyledSignUpButton>
)

export default SignUpButton
