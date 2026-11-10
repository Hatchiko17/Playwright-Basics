import{test} from '@playwright/test'
test('facebook',async({page})=>{
    await page.goto("https://www.facebook.com/login");
} )   