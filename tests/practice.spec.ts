import {test} from '@playwright/test'
test('verify valid login', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.pause();
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    //await page.getByRole('button', {name:'Submit'}).click();
    await page.getByText('Submit').click();
    //page.close();
//await page.getByPlaceholder('Search Amazon.in').fill('dresses'); 
//await page.locator('//*[@id="nav-search-submit-button"]').click;
})

;