const path = require('path');
const { config } = require('./wdio.shared.conf');
require('@babel/register');
// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/AddNote.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "15",
    "appium:deviceName": "Pixel3a",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "./app/android/colorApp.apk"),
    "appium:autoGrantPermissions": true
  }
]

// ============
// Suites
// ============
config.suites = {
  sampleSuite: [
    path.join(process.cwd(), './test/specs/AddNote.js')
  ],
  anotherSuite: [
    './test/specs/anotherTest.js'
  ]
};

exports.config = config;
