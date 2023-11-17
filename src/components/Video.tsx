import { useState, useRef } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { Text } from './Text'
import useScreenSize from '../hooks/useScreenSize'
import BeforePseudoElement from '../utils/beforePseudoElement'
import PlayIcon from './Icons/PlayIcon'

const ModalOverlay = styled.div<{ showModal: boolean }>`
    visibility: ${({ showModal }) => (showModal ? 'visible' : 'hidden')};
    opacity: ${({ showModal }) => (showModal ? '1' : '0')};
    transition: opacity 0.15s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 5;
    cursor: pointer;
`

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
`

const VideoPlayerContainer = styled.div`
    z-index: 3;
    position: relative;
    max-width: 640px;
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
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false)
    const videoRef = useRef<ReactPlayer | null>(null)
    const { isScreenSmallerThan767 } = useScreenSize()

    const handlePlay = () => {
        setIsVideoPlaying(true)
        setShowModal(true)
    }

    const closeModal = () => {
        setIsVideoPlaying(false)
        setShowModal(false)
    }

    return (
        <>
            <VideoPlayerContainer>
                <PlaceholderImage
                    src="VideoPlaceholder.png"
                    alt="Video Placeholder"
                    playing={isVideoPlaying}
                />
                <PlayButton onClick={handlePlay} playing={isVideoPlaying}>
                    <PlayIconStyled
                        isScreenSmallerThan767={isScreenSmallerThan767}
                    >
                        <PlayIcon />
                    </PlayIconStyled>
                    <Text fontSize={isScreenSmallerThan767 ? 14 : 16}>
                        Watch Video Now!
                    </Text>
                </PlayButton>
            </VideoPlayerContainer>

            <ModalOverlay showModal={showModal} onClick={closeModal}>
                <Modal onClick={(e) => e.stopPropagation()}>
                    <ReactPlayer
                        ref={videoRef}
                        url="https://www.youtube.com/watch?v=Dji7czwpwGI"
                        playing={isVideoPlaying}
                        controls
                        width="100vw"
                    />
                </Modal>
            </ModalOverlay>
        </>
    )
}

export default VideoPlayer
