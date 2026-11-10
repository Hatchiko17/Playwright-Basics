import {test} from '@playwright/test'
test('amazon', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const nameField= page.locator('//*[@id="name"]'); //xpath
    const emailField=page.locator('//*[@id="email"]');
    const phone=page.locator('//*[@id="phone"]');
    const address=page.locator('//*[@id="textarea"]');
    await nameField.fill('Rohini');
    await emailField.fill('Rohini@gmail.com');
    await emailField.fill('123');
    await emailField.fill('Thekkedathu');

})