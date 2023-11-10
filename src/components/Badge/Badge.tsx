import styled from 'styled-components'

const StyledBadge = styled.div`
    position: relative;
    font-weight: 600;
    color: #fff;
    background: transparent;
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 8px;
    width: max-content;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit; // Inherit border-radius from parent
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

const Badge = ({ children }) => {
    return <StyledBadge>{children}</StyledBadge>
}

export default Badge
