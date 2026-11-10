import {test,expect} from '@playwright/test'
test('male radio', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const drop= await page.locator('//*[@id="country"]');
    await drop.selectOption('Germany'); // find element from dropdown
    await expect(drop).toHaveValue('germany'); // for assertion we are taking value comes upder <option> tag value=germany.
})