import * as S from './styles'

export type IconProps = {
  color?: 'white' | 'black'
  icon?: 'facebook' | 'github' | 'linkedin' | 'site'
  size?: 'small' | 'medium' | 'large'
}

const renderIcon = ({ color, icon, size }: IconProps) => {
  switch (icon) {
    case 'facebook':
      return <S.FacebookIcon data-testid="facebook" color={color} size={size} />
    case 'github':
      return <S.GithubIcon data-testid="github" color={color} size={size} />
    case 'linkedin':
      return <S.LinkedinIcon data-testid="linkedin" color={color} size={size} />
    case 'site':
      return <S.SiteIcon data-testid="site" color={color} size={size} />
    default:
      return <S.SiteIcon data-testid="site" color={color} size={size} />
  }
}

const Icon = ({ color = 'white', icon = 'site', size = 'small' }: IconProps) =>
  renderIcon({ color, icon, size })

export default Icon
