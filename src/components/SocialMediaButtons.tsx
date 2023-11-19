import styled from 'styled-components'
import FacebookIcon from './Icons/FacebookIcon'
import LinkedInIcon from './Icons/LinkedInIcon'
import TwitterIcon2 from './Icons/TwitterIcon2'
import useScreenSize from '../hooks/useScreenSize'

const SocialMediaStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const SocialMediaButton = styled.button`
    display: flex;
    height: 40px;
    padding: 0px 24px;
    color: white;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    z-index: 4;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`

const SocialMediaButtons = () => {
    const { isScreenSmallerThan991 } = useScreenSize()

    return (
        <SocialMediaStyled>
            <SocialMediaButton as="a" href="https://twitter.com">
                <TwitterIcon2 />
                {!isScreenSmallerThan991 && 'Share on Twitter'}
            </SocialMediaButton>
            <SocialMediaButton as="a" href="https://facebook.com">
                <FacebookIcon />
                {!isScreenSmallerThan991 && 'Share on Facebook'}
            </SocialMediaButton>
            <SocialMediaButton as="a" href="https://linkedIn.com">
                <LinkedInIcon />
                {!isScreenSmallerThan991 && 'Share on LinkedIn'}
            </SocialMediaButton>
        </SocialMediaStyled>
    )
}

export default SocialMediaButtons
