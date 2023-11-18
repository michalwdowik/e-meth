import { ParallaxLayer } from '@react-spring/parallax'
import styled from 'styled-components'

const Card = styled.div`
    width: 25%;
`

interface TestFeatureProps {
    title: string
    description: string
    imageUrl: string
    gradientUrl: string
    icon: () => JSX.Element
    ref: any
    offset: number
}

const TestFeature = ({
    title,
    description,
    imageUrl,
    gradientUrl,
    icon,
    ref,
    offset,
}: TestFeatureProps) => {
    return (
        <ParallaxLayer offset={offset} speed={0.5}>
            <Card ref={ref}>
                <p>{title}</p>
            </Card>
        </ParallaxLayer>
    )
}

export default TestFeature
