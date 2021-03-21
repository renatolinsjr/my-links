import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Container from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Container>Teste</Container>)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
