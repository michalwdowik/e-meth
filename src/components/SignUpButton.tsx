import styled from 'styled-components'
import linearGradient from '../utils/gradient'

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

interface SignUpButtonProps {
    children: React.ReactNode
}

const SignUpButton = ({ children }: SignUpButtonProps) => {
    return <StyledSignUpButton>{children}</StyledSignUpButton>
}

export default SignUpButton
