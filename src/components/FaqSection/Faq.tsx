import React, { useState, useRef, createRef } from 'react'
import styled from 'styled-components'
import Text from '../Text'
import Badge from '../Badge'
import faqs from '../../utils/faqs'
import useScreenSize from '../../hooks/useScreenSize'
import AccordionItems from './AccordionItems'

const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 104px;

    @media (max-width: 1199px) {
        padding: 0;
    }
`

const FaqHeading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 80px;
    align-items: center;

    @media (max-width: 768px) {
        margin-bottom: 40px;
        align-items: flex-start;
    }
`

const Faq = () => {
    const [currentAccordion, setCurrentAccordion] = useState(-1)
    const [bodyHeight, setBodyHeight] = useState(0)
    const itemRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([])

    for (let i = 0; i < 6; i++) {
        itemRefs.current[i] = createRef()
    }

    const { isScreenSmall } = useScreenSize()

    return (
        <FaqContainer id="FAQ">
            <FaqHeading>
                <Badge>FAQ</Badge>
                <Text
                    lineHeight={130}
                    fontSize={isScreenSmall ? 28 : 56}
                    align={isScreenSmall ? 'left' : 'center'}
                    fontWeight="bold"
                >
                    Frequently Asked <br /> Questions
                </Text>
            </FaqHeading>
            <AccordionItems
                accordionContent={faqs}
                refs={itemRefs.current}
                currentAccordion={currentAccordion}
                setCurrentAccordion={setCurrentAccordion}
                setBodyHeight={setBodyHeight}
                bodyHeight={bodyHeight}
            />
        </FaqContainer>
    )
}

export default Faq
