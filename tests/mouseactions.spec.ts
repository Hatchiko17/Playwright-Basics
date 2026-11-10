import{test,expect} from '@playwright/test'
test('doubleclick',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    const double= await page.getByRole('button',{name:'Copy Text'}) // double click
    await double.dblclick(); // double click action
})
test('hovering',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    const pointme = await page.getByRole('button',{name:'Point Me'});// hovering element
    await pointme.hover(); // hover action 
})
test('rightclick',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    const rightclick =  await page.getByRole('button',{name:'Point Me'}); // fine righ clicking element
    await rightclick.click({button: 'right'}); //right click action
})

test.only('draganddrop',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    const dragelement = page.getByText('Drag me to my target') // element found by inspector
    const dropelement = page.locator('#droppable') // element found by inspector
    await dragelement.dragTo(dropelement);
})