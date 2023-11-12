import { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import PlusIcon from './Icons/PlusIcon'
import MinusIcon from './Icons/MinusIcon'
import { Text } from './Text'
import Badge from './Badge'
import linearGradient from '../utils/gradient'
import faqs from '../utils/faqs'
import useScreenSize from '../hooks/useScreenSize'

interface AccordionItemProps {
    isActive: boolean
}
const AccordionItem = styled.div<AccordionItemProps>`
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
    padding: 0 16px 16px;
    height: auto;
`
interface AccordionItemsProps {
    accordionContent: {
        title: string
        content: string
    }[]
    refs: any[]
    currentAccordion: number
    setCurrentAccordion: React.Dispatch<React.SetStateAction<number>>
    setBodyHeight: React.Dispatch<React.SetStateAction<number>>
    bodyHeight: number
}

const AccordionItems = ({
    accordionContent,
    refs,
    currentAccordion,
    setCurrentAccordion,
    setBodyHeight,
    bodyHeight,
}: AccordionItemsProps) =>
    accordionContent.map(({ title, content }, i) => (
        <AccordionItem
            key={`accordion-item-${title}`}
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
    align-items: ${(props) =>
        props.isScreenExtraSmall ? 'flex-start' : 'center'};
    gap: 24px;
    margin-bottom: 80px;
`
interface FaqStyledProps {
    isScreenExtraSmall: boolean
}

const FaqStyled = styled.div<FaqStyledProps>`
    display: flex;
    flex-direction: column;
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

    const { isScreenExtraSmall } = useScreenSize()

    return (
        <FaqStyled isScreenExtraSmall={isScreenExtraSmall}>
            <FaqHeading isScreenExtraSmall={isScreenExtraSmall}>
                <Badge>FAQ</Badge>
                <Text
                    fontSize={isScreenExtraSmall ? 28 : 56}
                    align={isScreenExtraSmall ? 'left' : 'center'}
                    fontWeight="bold"
                >
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
