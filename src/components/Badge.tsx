import styled, { css } from 'styled-components'
import linearGradient from '../utils/gradient'

const StyledBadge = styled.div`
    position: relative;
    font-weight: normal;
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
        border-radius: inherit;
        border: 1px solid transparent;
        background: ${linearGradient} border-box;
        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
    }

    @media (max-width: 768px) {
        font-size: 10px;
        padding: 6px 12px;
    }
`

interface BadgeProps {
    children: React.ReactNode
}

const Badge = ({ children }: BadgeProps) => {
    return <StyledBadge>{children}</StyledBadge>
}

export default Badge
