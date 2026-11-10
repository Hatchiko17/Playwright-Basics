import {test} from '@playwright/test'
test.beforeEach(async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/'); 
})
test('verify valid login', async({page})=>{
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
})
test('verify invalid login', async({page})=>{
    await page.getByLabel('Username').fill('studen');
    await page.getByLabel('Password').fill('Password23');
    await page.getByRole('button', { name: 'Submit' }).click();
})
test('verify invalid password login', async({page})=>{
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password13');
    await page.getByRole('button', { name: 'Submit' }).click();
});


    
