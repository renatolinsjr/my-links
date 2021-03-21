import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Icon from '.'

describe('<Icon />', () => {
  it('should render the Facebook Icon', () => {
    renderWithTheme(<Icon icon="facebook" />)

    expect(screen.getByTestId('facebook')).toBeInTheDocument()
  })
  it('should render the Linked Icon', () => {
    renderWithTheme(<Icon icon="linkedin" />)

    expect(screen.getByTestId('linkedin')).toBeInTheDocument()
  })
  it('should render the Github Icon', () => {
    renderWithTheme(<Icon icon="github" />)

    expect(screen.getByTestId('github')).toBeInTheDocument()
  })
  it('should render the Site Icon', () => {
    renderWithTheme(<Icon icon="site" />)

    expect(screen.getByTestId('site')).toBeInTheDocument()
  })
})
