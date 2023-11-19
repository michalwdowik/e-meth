import React from 'react'
import styled, { css } from 'styled-components'
import PlusIcon from '../Icons/PlusIcon'
import MinusIcon from '../Icons/MinusIcon'
import BeforePseudoElement from '../../utils/beforePseudoElement'

interface AccordionItemProps {
    isActive: boolean
}

const AccordionItem = styled.div<AccordionItemProps>`
    position: relative;
    background: transparent;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    border-left: none;
    border-right: none;

    ${({ isActive }) =>
        isActive &&
        css`
            border-top: none;
            border-bottom: none;
            &::before {
                border: 1px solid transparent;
                ${BeforePseudoElement}
                border-left: none;
                border-right: none;
            }
        `}
`

const AccordionTitle = styled.p`
    padding: 32px 0px 32px 0px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

interface AccordionBodyProps {
    active: boolean
    bodyHeight: number
}

const AccordionBody = styled.div<AccordionBodyProps>`
    height: 0;
    overflow: hidden;
    font-weight: 300;
    transition: height 0.3s ease-in-out;

    ${({ active, bodyHeight }) =>
        active &&
        css`
            height: ${bodyHeight}px;
        `}
`

const AccordionContent = styled.p`
    padding: 0 0 32px 0;
    height: auto;
`

interface AccordionItemsProps {
    accordionContent: {
        title: string
        content: string
    }[]
    refs: React.RefObject<HTMLDivElement>[]
    currentAccordion: number
    setCurrentAccordion: React.Dispatch<React.SetStateAction<number>>
    setBodyHeight: React.Dispatch<React.SetStateAction<number>>
    bodyHeight: number
}

const AccordionItems: React.FC<AccordionItemsProps> = ({
    accordionContent,
    refs,
    currentAccordion,
    setCurrentAccordion,
    setBodyHeight,
    bodyHeight,
}) => (
    <>
        {accordionContent.map(({ title, content }, i) => (
            <AccordionItem
                key={`accordion-item-${title}`}
                isActive={currentAccordion === i}
            >
                <AccordionTitle
                    onClick={() => {
                        if (currentAccordion === i) {
                            setCurrentAccordion(-1)
                            setBodyHeight(0)
                        } else {
                            setCurrentAccordion(i)
                            setBodyHeight(refs[i].current?.clientHeight || 0)
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
        ))}
    </>
)

export default AccordionItems
