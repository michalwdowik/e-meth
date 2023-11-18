import MarketInsightsIcon from '../components/Icons/MarketInsightsIcon'
import StrategicAutomationIcon from '../components/Icons/StrategicAutomationIcon'
import StreamlinePortfolioIcon from '../components/Icons/StreamlinePortfolioIcon'

const features = [
    {
        id: 1,
        title: 'Strategic Automation',
        description:
            'Engage in auto-arbitrage, initiate volume generation, formulate yield farming strategies, and auto-rebalance your portfolio, ensuring optimal performance and risk mitigation.',
        imageUrl: 'Feature1.png',
        gradientUrl: '/Feature1Gradient.png',
        icon: StrategicAutomationIcon,
        offset: 1,
    },
    {
        id: 2,
        title: 'Streamlined Portfolio Management',
        description:
            'With a sophisticated yet intuitive interface, manage your digital assets by setting advanced parameters, defining portfolio structures, and monitoring real-time performance, ensuring strategic alignment with your financial goals.',
        imageUrl: 'Feature2.png',
        gradientUrl: 'Feature2Gradient.png',
        icon: StreamlinePortfolioIcon,
        offset: 2,
    },
    {
        id: 3,
        title: 'In-Depth Dashboards & Market Insights',
        description:
            'Uncover opportunities and gauge market pulse with live data, sentiment analysis, and a consolidated overview of your asset holdings, driving informed and timely decision-making.',
        imageUrl: 'Feature3.png',
        gradientUrl: 'Feature3Gradient.png',
        icon: MarketInsightsIcon,
        offset: 3,
    },
]

export default features
