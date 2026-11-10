import{test,expect} from '@playwright/test'
import * as XLSX from 'xlsx' // This import should be added when excel is used 
const workbook = XLSX.readFile('./Test Data/DatadrivenTestdata.xlsx') //giving excel path

const sheet1 = workbook.Sheets[workbook.SheetNames[0]]; // fetch sheet1 from excel

const testData : any[] = XLSX.utils.sheet_to_json(sheet1); // store each row in excel in json formt key value combination
// {
//      username:student1
//     password: pass1
// }

//Iterate through each row in excel
for(const Data of testData) {
test(`data driven test-${Data.username}`,async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByLabel('Username').fill(`${Data.username}`);
    await page.getByLabel('Password').fill(`${Data.password}`);
    await page.getByRole('button', {name:'Submit'}).click();
   // await page.getByText('Submit').click();
})
}

