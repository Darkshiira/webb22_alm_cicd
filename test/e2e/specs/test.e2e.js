/* eslint-disable no-undef */
describe('Test', function () {
  it('should display the title', async function () {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Pandamonium');
  });
  it('should take a screenshot', async function () {
    browser.get('/');
    await browser.saveScreenshot('/images/screenshot.png');
  });
  it('should detect if "Welcome to Pandamonium" is visible', async function () {
    browser.get('/');
    const elem = await $('#welcomeText').isDisplayed();
    expect(elem).toBe(true);
  });
});
