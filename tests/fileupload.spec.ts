import{test,expect} from '@playwright/test'
test('fileupload',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    const filechoose = page.locator('//*[@id="singleFileInput"]');
    await filechoose.setInputFiles('C:\\Users\\acer\\Desktop\\dummy.txt');
    const fileName = await filechoose.evaluate(
    element => element.files[0].name
);
    await expect(await page.locator('//*[@id="singleFileInput"]')).toHaveValue('dummy.txt');
} )   
test('fileupload2',async({page})=>{
    await page.goto("https://demo.guru99.com/test/upload/");
    await page.pause();
    const filechoose = page.locator('//*[@id="uploadfile_0"]');
    await filechoose.setInputFiles('C:\\Users\\acer\\Desktop\\dummy.txt');
    const check = await page.locator('//*[@id="terms"]');
    const submitbutton = await page.getByRole('button',{name:'Submit File'});
    await check.click;
    await submitbutton.click;
    const text=page.getByText('file has been successfully uploaded.');
    await expect(text).toHaveText('1 file has been successfully uploaded.');
   
} )
test.only('multiplefiles',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    const filechoose = page.locator('//*[@id="multipleFilesInput"]');// locate mutifile upload choose button, no need to click on it , click will be done by below step
    await filechoose.setInputFiles(['C:\\Users\\acer\\Desktop\\dummy.txt','C:\\Users\\acer\\Desktop\\multi.txt']); // multi file upload step 
    const uploadbutton =  page.locator('//*[@id="multipleFilesForm"]/button');// finding upload button
    await uploadbutton.click();
   
} ) 
