/* eslint-disable react/no-array-index-key */
import Badge from '../Badge/Badge'
import { Text } from '../Text/Text'
import './small-glassy-card.css'

const cardDataRow1 = [
    {
        title: 'Efficiency',
        description:
            'Automated operations that significantly reduce the time and costs associated with managing digital assets.',
        icon: 'src/assets/efficiency-icon.png',
    },
    {
        title: 'Transparency',
        description:
            'A decentralized approach ensures every transaction and operation is transparent, auditable, and secure.',
        icon: 'src/assets/transparency-icon.png',
    },
]

const cardDataRow2 = [
    {
        title: 'Adaptability',
        description:
            'Tailor your asset management strategy with a suite of advanced, user-friendly tools, ensuring alignment with your business objectives.',
        icon: 'src/assets/adaptability-icon.png',
    },
    {
        title: 'Innovation',
        description:
            "Be at the forefront of DeFi evolution with a platform that's constantly adapting, innovating, and optimizing for your success.",
        icon: 'src/assets/innovation-icon.png',
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

const ValuesSection = () => (
    <div className="values-section">
        <div className="section-heading">
            <Badge>VALUES</Badge>
            <Text align="left" fontSize={56} fontWeight="bold">
                Anchored in Values
                <br />
                Driven by Innovation
            </Text>
            <Text align="left" fontSize={20} fontWeight="light">
                At the heart of Emeth lies a steadfast commitment to a set of
                guiding principles that shape every facet of our platform and
                influence every decision we undertake.
            </Text>
        </div>

        <div className="card-container">
            <div className="first-row">
                {cardDataRow1.map((data, index) => (
                    <Card
                        key={index}
                        title={data.title}
                        description={data.description}
                        icon={data.icon}
                    />
                ))}
            </div>
            <div className="second-row">
                {cardDataRow2.map((data, index) => (
                    <Card
                        key={index}
                        title={data.title}
                        description={data.description}
                        icon={data.icon}
                    />
                ))}
            </div>
        </div>
    </div>
)

export default ValuesSection
