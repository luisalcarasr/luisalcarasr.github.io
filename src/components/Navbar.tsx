import { Icon, Menu } from 'semantic-ui-react'

enum SocialNetworks {
  Twitter = 'https://twitter.com/luisalcarasr',
  LinkedIn = 'https://linkedin.com/in/luisalcarasr',
  GitHub = 'https://github.com/luisalcarasr',
}

const SocialLinks = () => {
  const { open } = window
  return (
    <>
      <Menu.Item name='linkedin' onClick={ () => open(SocialNetworks.LinkedIn) }>
        <Icon name='linkedin'></Icon>
      </Menu.Item>
      <Menu.Item name='twitter' onClick={ () => open(SocialNetworks.Twitter) }>
        <Icon name='twitter'></Icon>
      </Menu.Item>
      <Menu.Item name='github' onClick={ () => open(SocialNetworks.GitHub) }>
        <Icon name='github'></Icon>
      </Menu.Item>
    </>
  )
}

const Sections = () => (
  <>
    <Menu.Item name='resume'>Resume</Menu.Item>
    <Menu.Item name='portfolio'>Portfolio</Menu.Item>
    <Menu.Item name='blog'>Blog</Menu.Item>
  </>
)

export const Navbar = () => (
  <Menu>
    <Menu.Menu position='left'>
      <Sections />
    </Menu.Menu>
    <Menu.Menu position='right'>
      <SocialLinks />
    </Menu.Menu>
  </Menu>
)
