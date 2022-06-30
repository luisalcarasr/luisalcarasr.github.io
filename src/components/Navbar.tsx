import { Icon, Menu } from 'semantic-ui-react'

const SocialLinks = () => (
  <>
    <Menu.Item name='linkedin'>
      <Icon name='linkedin'></Icon>
    </Menu.Item>
    <Menu.Item name='twitter'>
      <Icon name='twitter'></Icon>
    </Menu.Item>
    <Menu.Item name='github'>
      <Icon name='github'></Icon>
    </Menu.Item>
  </>
)

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
