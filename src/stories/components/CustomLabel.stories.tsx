import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomLabel } from "../../components/CustomLabel";


export default {
  title: 'Example/CustomLabel',
  component: CustomLabel,
  argTypes: {
    label: { control: { type: 'text' } },
    size: {
      control: { type: 'select' },
      options: ['normal', 'h1', 'h2', 'h3'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'tertiary'],
    },
    textColor: {
      control: { type: 'color' }
    }
  }
} as ComponentMeta<typeof CustomLabel>;

const Template: ComponentStory<typeof CustomLabel> = (args) => <CustomLabel {...args} />;


export const Basic = Template.bind({}); // Crea copia sin referencia del template original
Basic.args = {
  size: 'normal',
  capitalize: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  capitalize: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
};

export const FontColor = Template.bind({});
FontColor.args = {
  size: 'h1',
  textColor: '#0012ff',
};