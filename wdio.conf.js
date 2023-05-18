exports.config = {
  runner: 'local',
  specs: [
    './test/e2e/specs/**/*.js',
  ],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      browserName: 'chrome',
    },
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://webb22_alm_cicd:8080',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    'chromedriver', { binaryPath: './node_modules/chromedriver/lib/chromedriver/chromedriver' },
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
