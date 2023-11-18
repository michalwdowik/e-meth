import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useIntersectionObserver } from '@uidotdev/usehooks'
import styled from 'styled-components'
import TestFeature from './TestFeature'
import features from '../../utils/features'
import useScreenSize from '../../hooks/useScreenSize'
import { Text } from '../Text'
import Badge from '../Badge'
import useAllowScroll from '../../hooks/useDisableScrollUntilTop'
import NewsletterSection from '../NewsletterSection'

// const Background = styled.div`
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     left: 0;
//     width: (100% + 224px);
//     /* height: 1000px; */
//     border: 2px red solid;
//     padding: 0 112px;
// `

const Test = () => {
    const [imgSrc, setImgSrc] = useState<string>('Feature1.png')
    const { isScreenExtraSmall, isScreenSmallerThan767 } = useScreenSize()

    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: '0px',
    })

    const [ref2, entry2] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: '0px',
    })

    const [ref3, entry3] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: '0px',
    })

    const refTop = useRef<HTMLDivElement>(null)
    const isAtTop = useAllowScroll(refTop)
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
        <FeaturesSectionStyled ref={refTop} disableScrolling={isAtTop}>
            {/* <FeaturesSectionHero>
        <FeaturesSectionHeroTitle>
            <Badge>Features</Badge>
            <Text
                fontSize={isScreenExtraSmall ? 28 : 56}
                fontWeight="bold"
                align="left"
            >
                Unleash the Power of Automated Portfolio <br />
                Management
            </Text>
        </FeaturesSectionHeroTitle>
        <FeaturesSectionHeroDescription>
            <Text
                fontSize={isScreenExtraSmall ? 14 : 16}
                fontWeight="light"
                align="left"
            >
                Emeth brings to you a meticulously crafted suite of
                features designed to elevate your DeFi operations and
                digital asset management experience. From intuitive
                portfolio setups to intelligent automation. <br />
                <br />
                Explore a universe where every click brings you closer
                to unparalleled efficiency, insightful decisions, and
                robust financial management, all unified under one
                comprehensive platform.
            </Text>
        </FeaturesSectionHeroDescription>
    </FeaturesSectionHero> */}
            <Parallax
                className="parallax-container"
                pages={4}
                style={{
                    border: '2px red solid',
                    width: '100vw',
                    marginLeft: '-112px',
                    display: 'flex',
                    // height: '500px',
                    // marginTop: '-45%',
                    position: 'static',
                    overflow: isAtTop ? 'scroll' : 'hidden',
                }}
            >
                <ParallaxLayer>
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
                </ParallaxLayer>
                <ParallaxLayer
                    style={{
                        border: '2px yellow solid',
                    }}
                    sticky={{ start: 0, end: 3 }}
                >
                    <ImagesWrapper>
                        <FeatureImage src={imgSrc} alt="s" />
                    </ImagesWrapper>
                </ParallaxLayer>
            </Parallax>
        </FeaturesSectionStyled>
    )
}

export default Test

interface FeaturesSectionStyledProps {
    disableScrolling: boolean
}

const FeaturesSectionStyled = styled.div<FeaturesSectionStyledProps>`
    border: ${({ disableScrolling }) =>
        disableScrolling ? '2px green solid' : '2px red solid'};
    overflow: ${({ disableScrolling }) =>
        disableScrolling ? 'scroll' : 'hidden'};
    display: flex;
    flex-direction: column;
    gap: 56px;
    background-color: transparent;
    height: 900px;
    /* height: 700px; */
    padding: 0 112px;
    margin-left: -112px;
    width: calc(100% + 224px);
    /* position: relative; */
    margin-top: -32px;
    /* border: 2px blue solid; */
    /* z-index: 5; */
    margin-bottom: 24rem;
    @media (max-width: 1024px) {
        margin-left: -64px;
        width: calc(100% + 128px);
        padding: 0 64px;
    }

    @media (max-width: 767px) {
        padding: 160px 24px 0 24px;
        margin-left: -24px;
        width: calc(100% + 48px);
    }
`

const FeaturesSectionHero = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 920px) {
        flex-direction: column;
        justify-content: center;
        gap: 40px;
    }
`

const FeaturesSectionHeroTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 60%;
    max-width: 700px;

    @media (max-width: 920px) {
        max-width: 100%;
    }
`

const FeaturesSectionHeroDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 128px;
    max-width: 30%;

    @media (max-width: 920px) {
        max-width: 100%;
        margin-top: 0;
    }
`

const FeatureImage = styled.img`
    width: 100%;
    margin: 0 auto;
`

const ImagesWrapper = styled.div`
    position: absolute;
    right: 5%;
    /* top: 100px; */
    /* max-width: 50%; */
    height: auto;
    z-index: 0;
    /* margin: 0 auto; */
    /* width: 500px; */
    @media (max-width: 766px) {
        max-width: 100%;
    }
`

const GradientOverlay = styled.img`
    position: absolute;
    top: 70px;
    left: 0;
    z-index: 0;
    width: 50%;
    @media (max-width: 767px) {
        width: 100%;
    }

    @media (max-width: 360px) {
        width: 100%;
    }
`
