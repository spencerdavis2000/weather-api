// jest.config.ts
import type { Config } from 'jest';


const config: Config =  {
    transform: {
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          tsconfig: 'tsconfig.json',
        },
      ],
    },
    preset: 'ts-jest',
    testMatch: [
      'tests/*.ts',
      'tests/**/*.[t]s?(x)',
      '**/?(*.)+(spec|test).[t]s?(x)'
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
      'dist/'
    ],
    testEnvironment: 'node',
    collectCoverageFrom: [
      'src/**'
    ],
    coverageReporters: [
      'json',
      'text',
      'cobertura',
      'html'
    ],
    reporters: [
      'jest-standard-reporter',
      [
        "jest-junit",
        {
          outputDirectory: 'coverage',
          outputName: 'junit.xml',
          classNameTemplate: '{classname}-{title}',
          titleTemplate: '{classname}-{title}',
          ancestorSeparator: ' › ',
          usePathForSuiteName: true
        }
      ]
    ]
  }
export default config;
