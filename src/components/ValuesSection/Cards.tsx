import styled from 'styled-components'
import { motion } from 'framer-motion'
import { cardDataRow1, cardDataRow2 } from '../../utils/cardData'
import BeforePseudoElement from '../../utils/beforePseudoElement'
import { greyGradient } from '../../utils/gradient'
import webkitMask from '../../utils/webkitMask'

interface CardProps {
    title: string
    description: string
    icon: () => JSX.Element
}

interface RowProps {
    justify: 'start' | 'end'
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    gap: 32px;

    @media (max-width: 560px) {
        margin-top: -32px;
    }
`

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid transparent;
    max-width: 384px;
    height: 384px;
    width: 100%;
    border-radius: 16px;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    background: rgba(255, 255, 255, 0.05);
    overflow: hidden;

    &::before {
        border-radius: 16px;
        padding: 1px;
        ${BeforePseudoElement}
        background: ${greyGradient};
        ${webkitMask}
    }

    @media (max-width: 768px) {
        max-width: 768px;
        height: 300px;
    }

    @media (max-width: 567px) {
        height: 384px;
    }
`

const CardIcon = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

const CardTitle = styled.div`
    margin: 16px 0;
    font-size: 24px;
    font-weight: bold;
`

const CardDescription = styled.div`
    width: 80%;
    font-size: 16px;
    text-align: center;
    color: #fff;
    font-family: Sora;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
`

const Row = styled.div<RowProps>`
    display: flex;
    gap: 2rem;
    justify-content: ${(props) => props.justify};

    @media (max-width: 1445px) {
        justify-content: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const Card = ({ title, description, icon }: CardProps) => (
    <StyledCard>
        <CardIcon>{icon()}</CardIcon>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </StyledCard>
)

const Cards = () => (
    <CardContainer>
        <Row justify="start">
            {cardDataRow1.map((cardData) => (
                <motion.div
                    key={cardData.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card
                        key={cardData.id}
                        title={cardData.title}
                        description={cardData.description}
                        icon={cardData.icon}
                    />
                </motion.div>
            ))}
        </Row>
        <Row justify="end">
            {cardDataRow2.map((cardData) => (
                <Card
                    key={cardData.id}
                    title={cardData.title}
                    description={cardData.description}
                    icon={cardData.icon}
                />
            ))}
        </Row>
    </CardContainer>
)

export default Cards
