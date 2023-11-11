import { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import faqs from './faqs'
import PlusIcon from '../Icons/PlusIcon'
import MinusIcon from '../Icons/MinusIcon'
import { Text } from '../Text/Text'
import Badge from '../Badge/Badge'
import linearGradient from '../../utils/gradient'

const AccordionItem = styled.div`
    position: relative;
    background: transparent;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333; // Fix the color code
    border-left: none;
    border-right: none;

    ${({ isActive }) =>
        isActive &&
        css`
            border-top: none;
            border-bottom: none;
            &::before {
                content: '';
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                position: absolute;
                z-index: 1; // Ensure this is below the title
                border: 1px solid transparent;
                border-left: none;
                border-right: none;
                background: ${linearGradient} border-box; /* Apply linear gradient */
                -webkit-mask:
                    linear-gradient(#fff 0 0) padding-box,
                    linear-gradient(#fff 0 0);
                -webkit-mask-composite: destination-out;
                mask-composite: exclude;
            }
        `}
`

const AccordionTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    padding: 32px 0px 32px 0px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    position: relative;
    z-index: 2; // Ensure this is above the ::before element
`

const AccordionBody = styled.div`
    display: block;
    position: relative;
    padding: 0;
    margin: 0;
    height: 0;
    overflow: hidden;
    font-size: 16px;
    font-weight: normal;
    transition: height 0.3s;

    ${({ active, bodyHeight }) =>
        active &&
        css`
            height: ${bodyHeight}px;
        `}
`

const AccordionContent = styled.p`
    margin: 0;
    padding: 0 1rem 1rem;
    height: auto;
`

const AccordionItems = ({
    accordionContent,
    refs,
    currentAccordion,
    setCurrentAccordion,
    setBodyHeight,
    bodyHeight,
}) =>
    accordionContent.map(({ title, content }, i) => (
        <AccordionItem
            key={`accordion-item-${i}`}
            isActive={currentAccordion === i}
        >
            {' '}
            <AccordionTitle
                onClick={() => {
                    if (currentAccordion === i) {
                        setCurrentAccordion(-1) // Close the currently open item
                        setBodyHeight(0) // Reset the height to 0
                    } else {
                        setCurrentAccordion(i) // Open the new item
                        setBodyHeight(refs[i].current.clientHeight) // Set the correct height for the new item
                    }
                }}
            >
                {title}
                {currentAccordion === i ? <MinusIcon /> : <PlusIcon />}
            </AccordionTitle>
            <AccordionBody
                active={currentAccordion === i}
                bodyHeight={bodyHeight}
            >
                <AccordionContent ref={refs[i]}>{content}</AccordionContent>
            </AccordionBody>
        </AccordionItem>
    ))

const FaqHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 80px;
`

const FaqStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 24px; */
    margin: 0 168px;
`
const Faq = () => {
    const [currentAccordion, setCurrentAccordion] = useState(-1)
    const [bodyHeight, setBodyHeight] = useState(0)

    const item0 = useRef(null)
    const item1 = useRef(null)
    const item2 = useRef(null)
    const item3 = useRef(null)
    const item4 = useRef(null)
    const item5 = useRef(null)

    const refs = [item0, item1, item2, item3, item4, item5]
    return (
        <FaqStyled>
            <FaqHeading>
                <Badge>FAQ</Badge>
                <Text fontSize={56} fontWeight="bold">
                    Frequently Asked <br /> Questions
                </Text>
            </FaqHeading>
            <AccordionItems
                accordionContent={faqs}
                refs={refs}
                currentAccordion={currentAccordion}
                setCurrentAccordion={setCurrentAccordion}
                setBodyHeight={setBodyHeight}
                bodyHeight={bodyHeight}
            />
        </FaqStyled>
    )
}

export default Faq
