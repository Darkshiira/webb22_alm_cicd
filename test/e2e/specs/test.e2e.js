/* eslint-disable no-undef */
describe('Test', function () {
  it('should display the title', async function () {
    await browser.url('/');
    const title = await browser.getTitle();
    expect(title).toEqual('Pandamonium');
  });
  it('should take a screenshot', async function () {
    browser.url('/');
    await browser.saveScreenshot('./test/e2e/screenshots/homepage.png');
  });
  it('should detect if "Welcome to Pandamonium" is visible', async function () {
    browser.url('/');
    const elem = await $('#welcomeText').isDisplayed();
    expect(elem).toBe(true);
  });
});
