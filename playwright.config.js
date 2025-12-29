
import { defineConfig, devices } from '@playwright/test';
import config from "./config/config.js";

export default defineConfig({
  testDir: './tests',
  // testMatch: /\/tests\/.*\.spec\.js/,
    globalSetup: './global-setup',
    globalTeardown: './globalTeardown',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 3,
  reporter: 'html',

  use: {

    baseURL: config.baseURLStage,
    httpCredentials: config.httpCredentials,
    headless: false,
    viewport: { width: 1280, height: 720 },
    trace: 'on',
    video: "on",
    screenshot: "on"
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
      {
          name: 'regression',
          dependencies: ['setup'],
          grepInvert: /@my-label/,
          use: { ...devices['Desktop Chrome'] },
      },
  ],


});