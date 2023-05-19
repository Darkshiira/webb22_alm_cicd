exports.config = {
  runner: 'local',
  specs: [
    './test/e2e/specs/*.e2e.js',
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
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    ['chromedriver', {
      port: 9516,
      logFileName: 'wdio-chromedriver.log',
    }],
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
