import React, { useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useIntersectionObserver } from '@uidotdev/usehooks'
import styled from 'styled-components'
import TestFeature from './TestFeature'
import features from '../../utils/features'

const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border: 2px red solid;
`

const Test = () => {
    const [imgSrc, setImgSrc] = useState<string>('Feature1.png')

    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: '0px',
    })

    const [ref2, entry2] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: '-300px',
    })

    const [ref3, entry3] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: '-300px',
    })

    useEffect(() => {
        if (entry?.isIntersecting) {
            setImgSrc('Feature1.png')
        }

        if (entry2?.isIntersecting) {
            setImgSrc('Feature2.png')
        }

        if (entry3?.isIntersecting) {
            setImgSrc('Feature3.png')
        }
    }, [entry, entry2, entry3])

    return (
        <div>
            <Background />

            <Parallax pages={5}>
                {features.map((feature) => (
                    <TestFeature
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                        imageUrl={feature.imageUrl}
                        gradientUrl={feature.gradientUrl}
                        icon={feature.icon}
                        offset={feature.offset}
                        refValue={(() => {
                            switch (feature.offset) {
                                case 1:
                                    return ref
                                case 2:
                                    return ref2
                                case 3:
                                    return ref3
                                default:
                                    return null
                            }
                        })()}
                    />
                ))}

                <ParallaxLayer sticky={{ start: 1, end: 3.5 }}>
                    <FeatureImage src={imgSrc} alt="s" />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Test

const FeatureImage = styled.img`
    width: 25%;
    margin: 0 auto;
`
