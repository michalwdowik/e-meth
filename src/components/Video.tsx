import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { createPortal } from 'react-dom'
import useScreenSize from '../hooks/useScreenSize'
import useBodyOverflow from '../hooks/useBodyOverflow'
import BeforePseudoElement from '../utils/beforePseudoElement'
import PlayIcon from './Icons/PlayIcon'
import Text from './Text'

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
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
    /* @media (max-width: 1024px) {
        width: calc(100% + 144px);
    } */

    @media (max-width: 767px) {
        width: calc(100% + 48px);
        margin-top: 0px;
    }
`

const PlaceholderImage = styled.img`
    width: 100%;
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

const PlayIconStyled = styled.button<{ isScreenSmall: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
    background: transparent;
    cursor: pointer;
    padding: ${({ isScreenSmall }) => (isScreenSmall ? '10px' : '16px')};
    border: none;

    &::before {
        border-radius: 50%;
        border: 2px solid transparent;
        ${BeforePseudoElement}
    }
`

const VideoPlayer = () => {
    const [showModal, setShowModal] = useState(false)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef<ReactPlayer | null>(null)
    const { isScreenSmall } = useScreenSize()
    useBodyOverflow(showModal)

    const handlePlay = () => {
        setIsVideoPlaying(true)
        setShowModal(true)
    }

    const closeModal = () => {
        setIsVideoPlaying(false)
        setShowModal(false)
    }

    const modalContent = showModal && (
        <ModalOverlay showModal={showModal} onClick={closeModal}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <ReactPlayer
                    ref={videoRef}
                    url="https://www.youtube.com/watch?v=Dji7czwpwGI"
                    playing={isVideoPlaying}
                    controls
                    play
                    width="100vw"
                    volume={0}
                />
            </Modal>
        </ModalOverlay>
    )

    return (
        <>
            <VideoPlayerContainer>
                <PlaceholderImage
                    src="VideoPlaceholder.png"
                    alt="Video Placeholder"
                />
                <PlayButton onClick={handlePlay} playing={isVideoPlaying}>
                    <PlayIconStyled isScreenSmall={isScreenSmall}>
                        <PlayIcon />
                    </PlayIconStyled>
                    <Text lineHeight={130} fontSize={isScreenSmall ? 14 : 16}>
                        Watch Video Now!
                    </Text>
                </PlayButton>
            </VideoPlayerContainer>

            {createPortal(
                modalContent,
                document.getElementById('modal-root') as HTMLElement
            )}
        </>
    )
}

export default VideoPlayer
