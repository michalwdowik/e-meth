import { css } from 'styled-components'

const hoverStyles = css`
    background: linear-gradient(
        160deg,
        #da301f 0%,
        #f48946 18.229%,
        #ee3560 35.417%,
        #fa4784 51.563%,
        #ff48c0 66.667%,
        #8e38b5 81.771%,
        #5542bb 89.063%,
        #ffffff 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: white;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    background-position: -100%;
    background-size: 200% 100%;
    animation: slideIn 0.3s linear forwards;
`

export default hoverStyles
