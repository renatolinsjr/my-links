import styled, { css, DefaultTheme } from 'styled-components'

import { LinkProps } from '.'

export const wrapperModifiers = {
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,

  xxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,

  highlight: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    background-color: ${theme.colors.highlight};
    box-shadow: 0px 8px ${theme.colors.highlightDark};
  `
}

export const Wrapper = styled.a<LinkProps>`
  ${({ theme, color, size, backgroundColor, highlight }) => css`
    display: block;
    color: ${theme.colors[color!]};
    background-color: ${theme.colors[backgroundColor!]};
    text-align: center;
    margin-bottom: ${theme.spacings.small};
    padding: ${theme.spacings.xsmall};
    text-decoration: none;
    font-weight: bold;
    transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
    box-shadow: 0px 6px ${theme.colors.primaryDark};
    border-radius: ${theme.border.radius};
    ${!!size && wrapperModifiers[size](theme)};
    ${highlight && wrapperModifiers.highlight(theme)};
  `}
`
