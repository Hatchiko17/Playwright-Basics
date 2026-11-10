import{test,expect} from '@playwright/test'
test('screenshot',async({page})=>{
    await page.goto("https://edure.in/");
    await page.pause();
    await page.screenshot({path:'./scrn/scrn1.png'})
})
test.only('elementscreenshot',async({page})=>{
    await page.goto("https://edure.in/");
    await page.pause();
    const element = await page.locator('//*[@id="menu-item-984"]/a/span');
    //await element.click();
    await element.screenshot({path:'./scrn/elementscr1.png'})
})
