import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import LinkBox from '.'

describe('<Link />', () => {
  it('should render the Link', () => {
    renderWithTheme(<LinkBox href="https://www.test.com">Portfólio</LinkBox>)

    expect(screen.getByRole('link', { name: /portfólio/i })).toBeInTheDocument()
  })
  it('should render the Link with href', () => {
    renderWithTheme(<LinkBox href="https://www.test.com">Portfólio</LinkBox>)

    expect(screen.getByRole('link', { name: /portfólio/i })).toHaveAttribute(
      'href',
      'https://www.test.com'
    )
  })
})
