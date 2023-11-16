import React from 'react'
import styled, { css } from 'styled-components'
import PlusIcon from '../Icons/PlusIcon'
import MinusIcon from '../Icons/MinusIcon'
import { colorGradient } from '../../utils/gradient'

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
                content: '';
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                position: absolute;
                z-index: 1;
                border: 1px solid transparent;
                border-left: none;
                border-right: none;
                background: ${colorGradient} border-box;
                -webkit-mask:
                    linear-gradient(#fff 0 0) padding-box,
                    linear-gradient(#fff 0 0);
                -webkit-mask-composite: destination-out;
                mask-composite: exclude;
            }
        `}
`

const AccordionTitle = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    padding: 32px 0px 32px 0px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    position: relative;
    z-index: 1;
`

interface AccordionBodyProps {
    active: boolean
    bodyHeight: number
}

const AccordionBody = styled.div<AccordionBodyProps>`
    display: block;
    position: relative;
    padding: 0;
    margin: 0;
    height: 0;
    overflow: hidden;
    font-size: 16px;
    font-weight: 300;
    transition: height 0.3s;

    ${({ active, bodyHeight }) =>
        active &&
        css`
            height: ${bodyHeight}px;
        `}
`

const AccordionContent = styled.p`
    margin-bottom: 32px;
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
