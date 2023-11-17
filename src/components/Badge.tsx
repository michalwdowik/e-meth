import styled from 'styled-components'
import BeforePseudoElement from '../utils/beforePseudoElement'

interface BadgeProps {
    children: React.ReactNode
}

const StyledBadge = styled.div`
    position: relative;
    font-size: 12px;
    padding: 8px 16px;
    width: max-content;
    backdrop-filter: blur(25px);
    z-index: 3;

    &::before {
        border-radius: 8px;
        border: 1px solid transparent;
        ${BeforePseudoElement};
    }

    @media (max-width: 768px) {
        font-size: 10px;
        padding: 6px 12px;
        border-radius: 6px;
    }
`

const Badge = ({ children }: BadgeProps) => {
    return <StyledBadge>{children}</StyledBadge>
}

export default Badge
