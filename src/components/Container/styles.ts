import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 675px;
    height: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xsmall} 0;
  `}
`
