import type { StorybookConfig } from '@storybook/react-vite';
 
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  framework: '@storybook/react-vite',
  features: {
    actions: true,
  },
};
 
export default config;