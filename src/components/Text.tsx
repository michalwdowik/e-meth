import React from 'react'
import styled from 'styled-components'

export interface TextProps {
    fontSize?: number
    fontWeight?: 'bold' | 'normal' | 'light'
    align?: 'left' | 'center' | 'right'
    color?: 'white' | 'black' | 'grey'
    children: React.ReactNode
}

const weight = {
    bold: 700,
    normal: 600,
    light: 300,
}

export const Text = ({
    fontSize = 14,
    fontWeight = 'normal',
    color = 'white',
    align = 'center',
    children,
}: TextProps) => (
    <ContentContainer
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        align={align}
    >
        {children}
    </ContentContainer>
)

const ContentContainer = styled.div<TextProps>`
    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => weight[props.fontWeight || 'normal']};
    font-family: Sora, sans-serif;
    color: ${(props) => props.color};
    text-align: ${(props) => props.align};
    z-index: 2;
`