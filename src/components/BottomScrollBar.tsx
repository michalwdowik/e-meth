import { motion, useScroll, useSpring } from 'framer-motion'
import styled from 'styled-components'
import { colorGradient } from '../utils/gradient'

const StyledBottomScrollBar = styled(motion.div)`
    z-index: 1;
    position: fixed;
    left: 0;
    right: 0;
    height: 0.3125rem;
    background: ${colorGradient};
    opacity: 0.7;
    bottom: 0px;
    border-radius: 6.25rem;
`

const BottomScrollBar = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <StyledBottomScrollBar
            style={{
                scaleX,
            }}
        />
    )
}

export default BottomScrollBar
