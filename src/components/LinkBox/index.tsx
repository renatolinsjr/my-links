import Icon from 'components/Icon'
import Link from 'next/link'
import * as S from './styles'

export type LinkProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: 'primary' | 'highlight'
  href?: string
  target?: '_blank' | '_self'
  highlight?: boolean
  icon?: 'facebook' | 'github' | 'linkedin' | 'site'
}

const LinkBox = ({
  children,
  color = 'white',
  backgroundColor = 'primary',
  size = 'small',
  href = 'https://www.renatolins.dev.br/',
  target = '_blank',
  highlight = false,
  icon = 'site'
}: LinkProps) => (
  <Link href={href} passHref>
    <S.Wrapper
      color={color}
      size={size}
      backgroundColor={backgroundColor}
      target={target}
      highlight={highlight}
    >
      <Icon icon={icon} size={size} color={color} />
      {children}
    </S.Wrapper>
  </Link>
)

export default LinkBox
