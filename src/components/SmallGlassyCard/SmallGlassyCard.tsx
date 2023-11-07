/* eslint-disable react/no-array-index-key */
import './small-glassy-card.css'

const cardData = [
    {
        title: 'Efficiency',
        description:
            'Automated operations that significantly reduce the time and costs associated with managing digital assets.',
        icon: '/assets/efficiency-icon.png',
    },
    {
        title: 'Transparency',
        description:
            'A decentralized approach ensures every transaction and operation is transparent, auditable, and secure.',
        icon: '/assets/transparency-icon.png',
    },
    {
        title: 'Adaptability',
        description:
            'Tailor your asset management strategy with a suite of advanced, user-friendly tools, ensuring alignment with your business objectives.',
        icon: '/assets/adaptability-icon.png',
    },
    {
        title: 'Innovation',
        description:
            "Be at the forefront of DeFi evolution with a platform that's constantly adapting, innovating, and optimizing for your success.",
        icon: '/assets/innovation-icon.png',
    },
]
interface CardProps {
    title: string
    description: string
    icon: string
}

const Card = ({ title, description, icon }: CardProps) => (
    <div className="card">
        <div className="card-icon">
            <img src={icon} alt={title} />
        </div>
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
    </div>
)

const App = () => (
    <div className="App">
        <div className="card-container">
            {cardData.map((data, index) => (
                <Card
                    key={index}
                    title={data.title}
                    description={data.description}
                    icon={data.icon}
                />
            ))}
        </div>
    </div>
)

export default App
