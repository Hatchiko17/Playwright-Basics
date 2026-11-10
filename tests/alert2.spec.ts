import {test,expect} from '@playwright/test'
test('alert1', async({page})=>{  //simple 
    await page.goto('https://demo.automationtesting.in/Alerts.html');
    await page.pause();
    //const simple= await page.locator('a[href="#OKTab"]:not([aria-expanded])');
    const button= await page.getByText('click the button to display an  alert box');
    await page.on('dialog', async dialog=>{
    await dialog.accept();
    })
    await button.click()
})

test('alert2', async({page})=>{  //simple 
    await page.goto('https://demo.automationtesting.in/Alerts.html');
    await page.pause();
    const confirmation= await page.getByText('Alert with OK & Cancel ');
    await confirmation.click()
    const button= await page.getByRole('button',{name:'click the button to display a confirm box '});
    await page.on('dialog', async dialog=>{
    await dialog.accept();    
    })
    await button.click();
    const message= await page.getByText('You pressed Ok');
    await expect(message).toHaveText('You pressed Ok');
})

test.only('alert3', async({page})=>{  //simple 
    await page.goto('https://demo.automationtesting.in/Alerts.html');
    await page.pause();
    const prompt= await page.getByText('Alert with Textbox ');
    await prompt.click()
    const button= await page.getByRole('button',{name:'click the button to demonstrate the prompt box '});
    await page.on('dialog', async dialog=>{
    await dialog.accept('Rohini the text you have given in the prompt box is displayed without any error in this UI screen,You can verify the same is present or not.');
    })
    await button.click();
})




