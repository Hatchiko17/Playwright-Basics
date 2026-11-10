import {test,expect} from '@playwright/test'
test('amazon', async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.pause();
await page.getByPlaceholder('Search Amazon.in').fill('dresses'); 
await page.locator('//*[@id="nav-search-submit-button"]').click;
});

