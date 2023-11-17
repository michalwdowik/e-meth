import styled from 'styled-components'

import { FC } from 'react'

import BeforePseudoElement from '../utils/beforePseudoElement'

const StyledSignUpButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
    background: transparent;
    cursor: pointer;
    border: none;
    padding: 0px 24px;
    height: 40px;
    transition: all 0.2s ease-in-out;

    &::before {
        border-radius: 40px;
        border: 2px solid transparent;
        ${BeforePseudoElement}
    }
    &:hover {
        scale: 1.03;
        filter: brightness(170%);
    }
`

interface SignUpButtonProps {
    children: React.ReactNode
}

const SignUpButton: FC<SignUpButtonProps> = ({ children }) => (
    <StyledSignUpButton>{children}</StyledSignUpButton>
)

export default SignUpButton
