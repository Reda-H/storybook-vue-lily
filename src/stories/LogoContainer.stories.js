import LogoContainer from './LogoContainer.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Logo',
  component: LogoContainer,
  tags: ['autodocs'],
  argTypes: {
    option: {
      options: ['Afterglow Regular - Brush 1', 'Afterglow Regular - Brush 2', 'Afterglow Regular - Brush 3', 'Yeseva 1', 'Logo 4', 'PT Serif', 'Nexa', 'Oswald White', 'Questrial White', 'Raleway White', 'Syncopate Black', 'Syncopate White'],
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
