import { Config } from '@jest/types';


const config:Config.InitialOptions ={
  testEnvironment:'jsdom',
  setupFilesAfterEnv:['<rootDir>/setup.ts'],
  moduleNameMapper:{
    '\\.(css|scss)':'identity-obj-proxy',
    '\\.(jpg|svg|png|webp)':'<rootDir>/__mock__/file.config.js'
  },
  collectCoverage:true,
  coverageReporters:['lcov'],
  coverageDirectory:'<rootDir>/coverage'
  
}

export default config;