/* eslint-disable react/jsx-props-no-spreading */
import { styled } from 'styled-components'

export interface TextProps {
    fontSize?: number
    fontWeight?: 'bold' | 'normal' | 'light'
    lineHeight?: number
    opacity?: number
    children: React.ReactNode
}

const weight = {
    bold: 800,
    normal: 600,
    light: 400,
}

export const Text = ({
    fontSize = 14,
    fontWeight,
    lineHeight = 100,
    opacity = 1,
    children,
    ...props
}: TextProps) => (
    <ContentContainer
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        opacity={opacity}
        {...props}
    >
        {children}
    </ContentContainer>
)

const ContentContainer = styled.div<TextProps>`
    display: inline-block;
    line-height: ${(props) => props.lineHeight}%;
    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => weight[props.fontWeight || 'normal']};
    font-family: Sora, sans-serif;
    color: white;
    text-align: center;
    opacity: ${(props) => props.opacity};
`
