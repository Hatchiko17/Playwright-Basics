import {test} from '@playwright/test'
test('amazon', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();  
    // await page.getByPlaceholder('Enter Name').fill('Rohini');
    await page.locator('//*[@id="name"]').fill('Rohini');
    // await page.getByPlaceholder('Enter EMail').fill('Rohini@gmail.com');
    await page.locator('//*[@id="email"]').fill('Rohini@gmail.com'); //xpath      
    // await page.getByPlaceholder('Enter Phone').fill('123');  
    await page.locator('//*[@id="phone"]').fill('123'); //xpath
    // await page.getByLabel('Address:').fill('Thekkedathu Parambil');
    await page.locator('//*[@id="textarea"]').fill('thekkedathu Parambil'); //xpath
    // await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.locator('//*[@id="post-body-1307673142697428135"]/div[3]/div[1]/label').click(); //xpath
})


    //const nameField= page.locator('//*[@id="name"]'); //xpath
    //await nameField.fill('Rohini');










  