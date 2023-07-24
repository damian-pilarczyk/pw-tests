import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: 'https://www.saucedemo.com/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'API',
      use: {
        baseURL: 'https://reqres.in/api/',
      },
      testDir: './tests/api',
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        screenshot: 'only-on-failure',
      },
      testDir: './tests/ui',
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        screenshot: 'only-on-failure',
      },
      testDir: './tests/ui',
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        screenshot: 'only-on-failure',
      },
      testDir: './tests/ui',
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
        screenshot: 'only-on-failure',
      },
      testDir: './tests/ui',
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 13 Mini'],
        screenshot: 'only-on-failure',
      },
      testDir: './tests/ui',
    },
  ],
};

export default config;
