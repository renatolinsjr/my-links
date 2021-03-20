import Link from 'next/link'
import * as S from './styles'

export type LinkProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'large' | 'xlarge' | 'xxlarge'
  backgroundColor?: 'primary' | 'highlight'
  href?: string
  target?: 'blank' | 'self'
  highlight?: boolean
}

const LinkBox = ({
  children,
  color = 'white',
  backgroundColor = 'primary',
  size = 'large',
  href = 'https://www.renatolins.dev.br/',
  target = 'blank',
  highlight = false
}: LinkProps) => (
  <Link href={href} passHref>
    <S.Wrapper
      color={color}
      size={size}
      backgroundColor={backgroundColor}
      target={target}
      highlight={highlight}
    >
      {children}
    </S.Wrapper>
  </Link>
)

export default LinkBox
