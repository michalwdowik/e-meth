import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLogo = styled(Link)`
    width: 111px;
    height: 24px;
    z-index: 3;

    @media (max-width: 300px) {
        width: 90px;
    }
`

const Logo = () => {
    return (
        <StyledLogo to="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="111"
                height="24"
                viewBox="0 0 111 24"
                fill="none"
            >
                <path
                    d="M4.73446 19.372V21.6857L9.6311 24L24 24V19.372L4.73446 19.372Z"
                    fill="url(#paint0_linear_1002_10721)"
                />
                <path
                    d="M4.72761 19.3736L4.72761 14.1822L19.2726 14.1822L24 9.55421L4.72792 9.55421L4.7276 4.62785L19.1038 4.62785L24 2.31416V0L4.7276 1.68485e-06L0 4.62785L4.30677e-07 9.55421H4.72792L8.35269e-07 14.1822L1.28911e-06 19.3736H4.72761Z"
                    fill="url(#paint1_linear_1002_10721)"
                />
                <path
                    d="M32 24V0H35.0857L40.5714 11.4171L46.0571 0H49.1429V24H46.3314V5.55429L41.6686 15.2571H39.4743L34.8114 5.58857V24H32Z"
                    fill="white"
                />
                <path
                    d="M53.7923 24V0H68.7752V2.60572H56.6723V10.5943H67.7466V13.2H56.6723V21.3943H68.7752V24H53.7923Z"
                    fill="white"
                />
                <path
                    d="M80.2475 24V2.60572H73.8018V0H89.5732V2.60572H83.1275V24H80.2475Z"
                    fill="white"
                />
                <path
                    d="M93.5712 24V0H96.4512V10.3543H108.074V0H110.954V24H108.074V12.96H96.4512V24H93.5712Z"
                    fill="white"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_1002_10721"
                        x1="-3.30515e-07"
                        y1="0.127295"
                        x2="25.7739"
                        y2="21.9001"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#DA301F" />
                        <stop offset="0.182292" stopColor="#F48946" />
                        <stop offset="0.354167" stopColor="#EE3560" />
                        <stop offset="0.515625" stopColor="#FA4784" />
                        <stop offset="0.666667" stopColor="#FF48C0" />
                        <stop offset="0.817708" stopColor="#8E38B5" />
                        <stop offset="0.890625" stopColor="#5542BB" />
                        <stop offset="1" stopColor="#0051C4" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_1002_10721"
                        x1="-3.30515e-07"
                        y1="0.127295"
                        x2="25.7739"
                        y2="21.9001"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#DA301F" />
                        <stop offset="0.182292" stopColor="#F48946" />
                        <stop offset="0.354167" stopColor="#EE3560" />
                        <stop offset="0.515625" stopColor="#FA4784" />
                        <stop offset="0.666667" stopColor="#FF48C0" />
                        <stop offset="0.817708" stopColor="#8E38B5" />
                        <stop offset="0.890625" stopColor="#5542BB" />
                        <stop offset="1" stopColor="#0051C4" />
                    </linearGradient>
                </defs>
            </svg>
        </StyledLogo>
    )
}

export default Logo
