import styled, { css, DefaultTheme } from 'styled-components'
import { IconProps } from '.'

import { Facebook } from '@styled-icons/entypo-social'
import { Github } from '@styled-icons/fa-brands'
import { PersonCircle, Linkedin } from '@styled-icons/bootstrap'

export const iconModifiers = {
  small: (theme: DefaultTheme) => css`
    width: ${theme.font.sizes.medium};
    height: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    width: ${theme.font.sizes.large};
    height: ${theme.font.sizes.large};
  `,

  large: (theme: DefaultTheme) => css`
    width: ${theme.font.sizes.xlarge};
    height: ${theme.font.sizes.xlarge};
  `
}

export const FacebookIcon = styled(Facebook)<IconProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.colors[color!]};
    margin-right: ${theme.spacings.xxsmall};
    ${!!size && iconModifiers[size](theme)};
  `}
`

export const GithubIcon = styled(Github)<IconProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.colors[color!]};
    margin-right: ${theme.spacings.xxsmall};
    ${!!size && iconModifiers[size](theme)};
  `}
`

export const LinkedinIcon = styled(Linkedin)<IconProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.colors[color!]};
    margin-right: ${theme.spacings.xxsmall};
    ${!!size && iconModifiers[size](theme)};
  `}
`

export const SiteIcon = styled(PersonCircle)<IconProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.colors[color!]};
    margin-right: ${theme.spacings.xxsmall};
    ${!!size && iconModifiers[size](theme)};
  `}
`
