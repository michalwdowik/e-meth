import { useState, useRef } from 'react'
import styled from 'styled-components'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'
import BeforePseudoElement from '../utils/beforePseudoElement'

const ModalOverlay = styled.div<{ showModal: boolean }>`
    display: ${({ showModal }) => (showModal ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 3;
    cursor: pointer;
`

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
`

const VideoPlayerContainer = styled.div`
    z-index: 3;
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

const PlaceholderImage = styled.img<{ playing: boolean }>`
    width: 100%;
    display: ${({ playing }) => (playing ? 'none' : 'block')};
`

const PlayButton = styled.button<{ playing: boolean }>`
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
`

const Video = styled.video<{ playing: boolean }>`
    z-index: 4;
    width: 100%;
    height: 100%;
    display: ${({ playing }) => (playing ? 'block' : 'none')};
    object-fit: cover;
`

const PlayIconStyled = styled.button<{ isScreenSmallerThan767: boolean }>`
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
        border-radius: 50%;
        border: 2px solid transparent;
        ${BeforePseudoElement}
    }
`

interface VideoPlayerProps {}

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
    const [playing, setPlaying] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const { isScreenSmallerThan767 } = useScreenSize()

    const handlePlay = () => {
        setPlaying(true)
        setShowModal(true)
        if (videoRef.current) {
            videoRef.current.play()
        }
    }

    const closeModal = () => {
        setShowModal(false)
        if (videoRef.current) {
            videoRef.current.pause()
        }
    }

    return (
        <>
            <VideoPlayerContainer>
                <PlaceholderImage
                    src="../src/assets/VideoPlaceholder.png"
                    alt="Video Placeholder"
                    playing={playing}
                />
                <PlayButton onClick={handlePlay} playing={playing}>
                    <PlayIconStyled
                        isScreenSmallerThan767={isScreenSmallerThan767}
                    >
                        <img
                            src="../src/assets/play-icon.svg"
                            alt="Play Icon"
                        />
                    </PlayIconStyled>
                    <Text fontSize={isScreenSmallerThan767 ? 14 : 16}>
                        Watch Video Now!
                    </Text>
                </PlayButton>
            </VideoPlayerContainer>

            <ModalOverlay showModal={showModal} onClick={closeModal}>
                <Modal onClick={(e) => e.stopPropagation()}>
                    <Video ref={videoRef} controls playing={playing}>
                        <source src="path-to-your-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                </Modal>
            </ModalOverlay>
        </>
    )
}

export default VideoPlayer
