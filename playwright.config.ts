import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 1,
  use: {
    baseURL: 'https://github.com', // Основной URL GitHub
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
};

export default config;
