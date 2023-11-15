import { useState, useRef } from 'react'
import styled from 'styled-components'
import { Text } from './Text'
import linearGradient from '../utils/gradient'
import useScreenSize from '../hooks/useScreenSize'

const VideoPlayerContainer = styled.div`
    position: relative;
    max-width: 640px;
    height: 360px;
    margin: 64px auto;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PlaceholderImage = styled.img`
    width: 100%;
    display: ${({ playing }) => (playing ? 'none' : 'block')};
`

const PlayButton = styled.button`
    display: ${({ playing }) => (playing ? 'none' : 'flex')};
    border-radius: 84px;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
    color: white;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 24px;
    padding: 8px 24px 8px 8px;
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
`
const Video = styled.video`
    width: 100%;
    height: 100%;
    display: ${({ playing }) => (playing ? 'block' : 'none')};
    object-fit: cover;
`

const PlayIconStyled = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
    background: transparent;
    cursor: pointer;
    padding: ${({ isScreenSmallerThan767 }) =>
        isScreenSmallerThan767 ? '10px' : '16px'};
    border: none;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        border: 2px solid transparent;
        background: ${linearGradient} border-box;
        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
    }
`

const VideoPlayer = () => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const { isScreenSmallerThan767 } = useScreenSize()
    const handlePlay = () => {
        setPlaying(true)
        videoRef.current.play()
    }

    return (
        <VideoPlayerContainer>
            <PlaceholderImage
                src="../src/assets/VideoPlaceholder.png"
                alt="Video Placeholder"
                playing={playing}
            />
            <Video
                ref={videoRef}
                controls
                style={{ display: playing ? 'block' : 'none' }}
            >
                <source src="path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </Video>
            <PlayButton onClick={handlePlay} playing={playing}>
                <PlayIconStyled isScreenSmallerThan767={isScreenSmallerThan767}>
                    <img src="../src/assets/play-icon.svg" alt="Play Icon" />
                </PlayIconStyled>
                <Text fontSize={isScreenSmallerThan767 ? 14 : 16}>
                    Watch Video Now!
                </Text>
            </PlayButton>
        </VideoPlayerContainer>
    )
}

export default VideoPlayer
