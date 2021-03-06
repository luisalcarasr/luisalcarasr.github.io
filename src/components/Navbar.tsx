import { Menu } from 'semantic-ui-react'

const Sections = (): JSX.Element => (
  <>
    <Menu.Item name='home'>Home</Menu.Item>
    <Menu.Item name='projects'>Projects</Menu.Item>
    <Menu.Item name='blog'>Blog</Menu.Item>
  </>
)

export const Navbar = (): JSX.Element => (
  <Menu>
    <Menu.Menu position='left'>
      <Sections />
    </Menu.Menu>
    <Menu.Menu position='right'>
    </Menu.Menu>
  </Menu>
)
