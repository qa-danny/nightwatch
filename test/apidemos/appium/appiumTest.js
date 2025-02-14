const assert = require('assert');

describe('appium api demo', function () {
  after((app) => app.end());

  const availableAppiumCommands = [
    'startActivity',
    'getCurrentActivity',
    'getCurrentPackage',
    'getOrientation',
    'setOrientation',
    'getGeolocation',
    'setGeolocation',
    'pressKeyCode',
    'longPressKeyCode',
    'hideKeyboard',
    'isKeyboardShown',
    'getContexts',
    'getContext',
    'setContext'
  ];

  it('test appium available API commands', async function () {
    // app variable is available globally
    assert.strictEqual(app !== undefined, true);

    availableAppiumCommands.forEach((command) => {
      assert.strictEqual(typeof app.appium[command], 'function');
    });
  });

  it('Search for Nightwatch', async function() {
    app  // available globally
      .click('id', 'com.app:id/search')
      .sendKeys('id', 'com.app:id/search', 'Nightwatch');
  });
});
