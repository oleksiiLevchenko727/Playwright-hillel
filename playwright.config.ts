import { defineConfig, devices } from '@playwright/test';
import  config  from './config/config';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: config.baseURL,
    httpCredentials: config.httpCredentials,
    trace: 'on-first-retry',
  },
  
  projects: [
    {
          name: 'setup',
          testMatch: /\/tests\/setup\/.*\.setup\.js/,
          use: { ...devices['Desktop Chrome'] },
      },
      {
          name: 'smoke',
          dependencies: ['setup'],
          grep: /@my-label/,
          use: {
              ...devices['Desktop Chrome'],
                viewport: { width: 1920, height: 1080 },
              trace: 'on',
              screenshot: {
                  fullPage: true,
                  mode: "on"
              },
          },
      },

    // {
    //   name: 'firefox',
    //   use: { 
    //   ...devices['Desktop Firefox'] 
    //   },
    //   storageState: 'playwright/.auth/user.json',
    // },

    // {
    //   name: 'webkit',
    //   use: { 
    //   ...devices['Desktop Safari'] 
    //   },
    //   storageState: 'playwright/.auth/user.json',
    // },
  ],

});
