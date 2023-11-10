import styled from 'styled-components'

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
        border: 3px solid transparent;
        background: linear-gradient(
                160deg,
                #da301f 0%,
                #f48946 18.229%,
                #ee3560 35.417%,
                #fa4784 51.563%,
                #ff48c0 66.667%,
                #8e38b5 81.771%,
                #5542bb 89.063%,
                #0051c4 100%
            )
            border-box;
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
    return <StyledButton size={size}>{children}</StyledButton>
}

export default Button
