import{test,expect} from '@playwright/test'
test('datepicker1',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    const pick1 = page.locator('//*[@id="datepicker"]');
   await  pick1.fill('11/24/2026');
})
test('datepicker2',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    const pick2 = page.locator('//*[@id="txtDate"]');
    const month = page.locator('//*[@id="ui-datepicker-div"]/div/div/select[1]');
    const year = page.locator('//*[@id="ui-datepicker-div"]/div/div/select[2]');

})
test('datepicker',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    const pick1 = page.locator('//*[@id="datepicker"]');
   await  pick1.click();
   const expecteddate='February 2025';
   while(true){
  const month = await page.locator('//*[@id="ui-datepicker-div"]/div/div/span[1]').innerText();
  const year = await page.locator('//*[@id="ui-datepicker-div"]/div/div/span[2]').innerText();
  const date = month+" "+year;
    if(date===expecteddate){
        break;
    }
    const pre = page.locator('//*[@id="ui-datepicker-div"]/div/a[1]');
    await pre.click();
   }
   await page.locator('//*[@id="ui-datepicker-div"]/table/tbody/tr[3]/td[3]/a').click();
})
test.only('datepickerdropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    const pick2 = page.locator('//*[@id="txtDate"]');
    await pick2.click();
    const month = page.locator('//*[@id="ui-datepicker-div"]/div/div/select[1]');
    const year = page.locator('//*[@id="ui-datepicker-div"]/div/div/select[2]');
    await month.selectOption('Jun');
    await year.selectOption('2020');
    const fixeddate = page.locator('//*[@id="ui-datepicker-div"]/table/tbody/tr[4]/td[1]/a');
    await fixeddate.click();
})

