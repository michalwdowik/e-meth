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

const SocialMedia = () => {
    return (
        <SocialMediaWrapper>
            <a href="https://twitter.com">
                <TwitterIcon />
            </a>
            <a href="https://discord.com">
                <DiscordIcon />
            </a>
            <a href="https://telegram.org">
                <TelegramIcon />
            </a>
        </SocialMediaWrapper>
    )
}

export default SocialMedia
