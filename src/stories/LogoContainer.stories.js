import LogoContainer from './LogoContainer.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Logo',
  component: LogoContainer,
  tags: ['autodocs'],
  argTypes: {
    option: {
      options: ['1', '2', '3', '4', '5', '6', '7', 'nexa', 'oswald blanc', 'questrial blanc', 'raleway white', 'syncopate black', 'syncopate white'],
      control: 'select'
    },
    transition: {
      options: ['fade', 'bounce', 'reveal'],
      control: 'select'
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
};
