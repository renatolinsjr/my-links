import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import media from 'styled-media-query'

import { LinkProps } from '.'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  highlight: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    background-color: ${theme.colors.highlightDark};
    box-shadow: 0px 8px ${theme.colors.highlightDarkShadow};
    margin-bottom: ${theme.spacings.large};
    transform: translate(10px, 0);
    animation: ${FadeInAnimation} 0.5s forwards ease-in;

    &:hover {
      transform: translate(0px, -4px);
      box-shadow: 0px 14px ${theme.colors.highlightDarkShadow};
    }
  `
}

export const Wrapper = styled.a<LinkProps>`
  ${({ theme, color, size, backgroundColor, highlight }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors[color!]};
    background-color: ${theme.colors[backgroundColor!]};
    text-align: center;
    letter-spacing: ${theme.font.letterSpacing};
    margin-bottom: ${theme.spacings.medium};
    padding: ${theme.spacings.xsmall};
    text-decoration: none;
    font-weight: bold;
    transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
    box-shadow: 0px 6px ${theme.colors.primaryShadow};
    border-radius: ${theme.border.radius};
    max-width: 675px;
    animation: ${FadeInAnimation} 0.5s ease-in;
    &:hover {
      transform: translate(0px, -2px);
      box-shadow: 0px 10px ${theme.colors.primaryShadow};
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${highlight && wrapperModifiers.highlight(theme)};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

const FadeInAnimation = keyframes`  
  from { opacity: 0; transform: translate(0, 10px)}
  to { opacity: 1; transform: translate(0, 0)}
`
