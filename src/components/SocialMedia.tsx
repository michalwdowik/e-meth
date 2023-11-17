import styled from 'styled-components'
import TwitterIcon from './Icons/TwitterIcon'
import DiscordIcon from './Icons/DiscordIcon'
import TelegramIcon from './Icons/TelegramIcon'

const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 76px;
`

const SocialMediaSmallButton = styled.div`
    transition: all 0.2s ease-in-out;
    &:hover {
        scale: 1.03;
        filter: brightness(170%);
    }
`
const SocialMedia = () => {
    return (
        <SocialMediaWrapper>
            <SocialMediaSmallButton>
                <a href="https://twitter.com">
                    <TwitterIcon />
                </a>
            </SocialMediaSmallButton>
            <SocialMediaSmallButton>
                <a href="https://discord.com">
                    <DiscordIcon />
                </a>
            </SocialMediaSmallButton>
            <SocialMediaSmallButton>
                <a href="https://telegram.org">
                    <TelegramIcon />
                </a>
            </SocialMediaSmallButton>
        </SocialMediaWrapper>
    )
}

export default SocialMedia
