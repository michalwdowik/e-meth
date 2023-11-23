import styled from 'styled-components'
import CloseIcon from '../Icons/CloseIcon'

const StyledCloseIcon = styled.button`
    cursor: pointer;
    z-index: 1;
    background-color: transparent;
`
interface CloseButtonProps {
    onClose: (event: React.MouseEvent) => void
}

const CloseButton = ({ onClose }: CloseButtonProps) => {
    return (
        <StyledCloseIcon onClick={onClose}>
            <CloseIcon />
        </StyledCloseIcon>
    )
}

export default CloseButton
