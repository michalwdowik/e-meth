import styled from 'styled-components'
import ArrowRight from '../Icons/ArrowRight'
import hoverStyles from '../../utils/hoverStyles'

const LearnMoreButton = () => {
    return (
        <LearnMoreButtonStyled>
            Learn More
            <ArrowRight />
        </LearnMoreButtonStyled>
    )
}

export default LearnMoreButton

const LearnMoreButtonStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    position: relative;
    width: max-content;
    &:hover {
        ${hoverStyles}
    }
`
