import React, { useState } from 'react'
import styled from 'styled-components'
import Badge from '../Badge/Badge'
import { Text } from '../Text/Text'

const faqs = [
    {
        question:
            'What are the different types of pasta shapes, and what dishes are they best suited for?',
        answer: 'Al dente is an Italian term meaning "to the tooth," which means the pasta should be cooked until its tender but still firm when bitten. To check, simply taste the pasta a minute or two before the package’s recommended cooking time ends. It should offer a slight resistance when bitten. Cooking pasta al dente not only provides a better texture but also allows the pasta to better absorb sauces.',
    },
    {
        question: 'Why use React?',
        answer: 'React is declarative, efficient, and flexible.',
    },
    // Add more FAQs here
]

// Styled components here
const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 2px red solid; */
    gap: 32px;
`

const AccordionTitle = styled.button`
    background-color: black;
    border: none;
    color: white;
    outline: none;
    text-align: left;
    padding: 15px;
    font-size: 16px;
    transition: background-color 0.6s ease;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: black;
    }
`

const AccordionContent = styled.div`
    background-color: black;
    overflow: hidden;
    transition: max-height 0.6s ease-in-out;
`

// Accordion component
const FaqAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <AccordionSection>
            <Badge>FAQ</Badge>
            <Text fontSize={40}>Frequently Asked Questions</Text>
            {faqs.map((faq, index) => (
                <div key={index}>
                    <AccordionTitle onClick={() => toggleAccordion(index)}>
                        {faq.question}
                    </AccordionTitle>
                    <AccordionContent
                        style={{
                            maxHeight: activeIndex === index ? '1000px' : '0',
                            padding: activeIndex === index ? '15px' : '0 15px',
                        }}
                    >
                        {faq.answer}
                    </AccordionContent>
                </div>
            ))}
        </AccordionSection>
    )
}

export default FaqAccordion
