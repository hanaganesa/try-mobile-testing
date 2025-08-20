import { expect } from 'chai';

describe('API Demos', () => {

  afterEach(async () => {
    // Terminate the app (if running)
    await browser.execute('mobile: terminateApp', { appId: 'io.appium.android.apis' });

    // Short delay to ensure app is closed
    await browser.pause(1000);

    // Start the app again
    // await browser.execute('mobile: activateApp', { appId: 'io.appium.android.apis' });
  });

  it('Try Insert Username and Password', async () => {
    // get into app menu
    const app = await $(`//android.widget.TextView[@content-desc="App"]`);
    await app.click();

    // get into alert dialog menu
    const alertDialog = await $(`//android.widget.TextView[@content-desc="Alert Dialogs"]`);
    await alertDialog.click();

    // click button text entry
    const textEntry = await $(`//android.widget.Button[@content-desc="Text Entry dialog"]`);
    await textEntry.click();

    // input username and password
    const name = await $(`//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]`);
    const password = await $(`//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]`);
    const okButton = await $(`//android.widget.Button[@resource-id="android:id/button1"]`);

    await name.setValue("user");
    await password.setValue("password");
    await okButton.click();
  });
});
