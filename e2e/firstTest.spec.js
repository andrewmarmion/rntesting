describe('Initial Test', () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('home'))).toBeVisible();
  });

  it('should show welcome text', async () => {
    await expect(element(by.id('home:welcome'))).toBeVisible();
  });

  it('should tap button', async () => {
    element(by.id('home:button')).tap()
  });

  // it('should dismiss alert',async () => {
  //   await element(by.label('OK').and(by.type('_UIAlertControllerActionView'))).tap();
  // });
});