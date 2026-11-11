import {test,expect} from '@playwright/test'
//good morning
test('alert1', async({page})=>{  //simple
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const simple= await page.getByRole('button',{name:'Simple Alert'});
    const confirmation= await page.getByRole('button',{name:'Confirmation Alert'});
    const prompt= await page.getByRole('button',{name:'Prompt Alert'});
   //const prompt=await page.locator('//*[@id="promptBtn"]');
    page.on('dialog', async dialog=>{
        await dialog.accept();
    })

   await simple.click()

})
test('alert2', async({page})=>{  //confirmation
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const confirmation= await page.getByRole('button',{name:'Confirmation Alert'});
    const prompt= await page.getByRole('button',{name:'Prompt Alert'});
   //const prompt=await page.locator('//*[@id="promptBtn"]');
    page.on('dialog', async dialog=>{
       // await dialog.accept();
       await dialog.dismiss();
    })

   await confirmation.click()
})


test.only('alert3', async({page})=>{  //prompt
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();
    const prompt= await page.getByRole('button',{name:'Prompt Alert'});
    page.on('dialog', async dialog=>{
       await dialog.accept('acceptedd the text in text boxvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
    })

   await prompt.click()
})
