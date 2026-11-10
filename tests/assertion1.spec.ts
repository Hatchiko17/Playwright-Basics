import {test,expect} from '@playwright/test'
test('male radio', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
   const male= await page.locator('//*[@id="post-body-1307673142697428135"]/div[3]/div[1]/label');
   await male.click();
   await expect(male).toBeEnabled(); //radiobutton should be tested with toBeEnabled()
})
test('Sunday checkbox', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
   const sunday= await page.getByLabel('Sunday');
   await sunday.click();
   await expect(sunday).toBeChecked(); //check box should be tested with toBeChecked()
})
test('textvisible', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
   const heading= await page.locator('//*[@id="Blog1"]/div[1]/div/div/div/div[1]/h3');
   await expect(heading).toBeVisible(); // text labels should be tested with toBeVisible()
})
test('containstext', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
   const text= await page.getByText('For Selenium, Cypress & Playwright');
   await expect(text).toContainText('Selenium'); // contains text assertion
})
test('tohavetext', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
   const text= await page.getByText('For Selenium, Cypress & Playwright');
   await expect(text).toHaveText('For Selenium, Cypress & Playwright');  //exact text match assertion 
})
test('checktitle', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
   await expect(page).toHaveTitle('Automation Testing Practice');
})
test.only('checkURL', async({page})=>{
    //arrange
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.pause();
    //act
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', {name:'Submit'}).click();
    //assertion
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
})