import { Story, Meta } from '@storybook/react/types-6-0'
import LinkBox, { LinkProps } from '.'

export default {
  title: 'LinkBox',
  component: LinkBox,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<LinkProps> = (args) => <LinkBox {...args} />

Default.args = {
  children: 'Portfólio'
}
