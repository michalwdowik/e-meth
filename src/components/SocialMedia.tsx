import styled from 'styled-components'
import TwitterIcon from './Icons/TwitterIcon'
import DiscordIcon from './Icons/DiscordIcon'
import TelegramIcon from './Icons/TelegramIcon'

const SocialMediaStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 76px;
`

const SocialMedia = () => {
    return (
        <SocialMediaStyled>
            <a href="https://twitter.com">
                <TwitterIcon />
            </a>
            <a href="https://discord.com">
                <DiscordIcon />
            </a>
            <a href="https://telegram.org">
                <TelegramIcon />
            </a>
        </SocialMediaStyled>
    )
}

export default SocialMedia
