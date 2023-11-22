import React, { ReactNode } from 'react'
import styled from 'styled-components'
import BeforePseudoElement from '../utils/beforePseudoElement'
import useOnEnterSubmit from '../hooks/useOnEnterSubmit'

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
        /* border: 2px solid transparent; */
        ${BeforePseudoElement}
    }

    &:hover {
        transform: scale(1.03);
        filter: brightness(170%);
    }
`

interface SignUpButtonProps {
    children: ReactNode
}

const SignUpButton: React.FC<SignUpButtonProps> = ({ children }) => {
    useOnEnterSubmit('signUpButton')

    return <StyledSignUpButton id="signUpButton">{children}</StyledSignUpButton>
}

export default SignUpButton
