import { css } from 'styled-components'
import linearGradient from './gradient'

const BeforePseudoElement = css`
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${linearGradient} border-box;
    -webkit-mask:
        linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
`

export default BeforePseudoElement
