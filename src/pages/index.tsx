import LinkBox from 'components/LinkBox'
import Container from 'components/Container'

import { isAndroid, isIOS } from 'react-device-detect'

export default function Home() {
  return (
    <Container>
      <LinkBox highlight>Site (desatualizado)</LinkBox>
      <LinkBox icon="github" href="https://github.com/renatolinsjr">
        Github
      </LinkBox>
      <LinkBox
        icon="linkedin"
        href={
          isAndroid || isIOS
            ? 'linkedin://in/renatolinsjr/'
            : 'https://www.linkedin.com/in/renatolinsjr/'
        }
      >
        LinkedIn
      </LinkBox>
      <LinkBox
        icon="facebook"
        href={
          isAndroid || isIOS
            ? 'fb://profile.php?id=100008647985839'
            : 'https://www.facebook.com/profile.php?id=100008647985839'
        }
      >
        Facebook
      </LinkBox>
    </Container>
  )
}
