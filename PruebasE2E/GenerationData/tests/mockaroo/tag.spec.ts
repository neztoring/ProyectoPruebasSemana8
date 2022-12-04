import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'
import { USERNAME, PASSWORD,GhostURL } from '../../properties.json';

test('TAG01. Crear Tag duplicado con el mismo nombre', async ({ page }) => {
  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.screenshot({ path: "screenshots/TAG01/1.Login.jpg" })  
  await page.getByPlaceholder('•••••••••••••••').press('Enter');
  await page.getByRole('link', { name: 'Tags' }).click();
  await page.screenshot({ path: "screenshots/TAG01/2.Autenticacion_exitosa.jpg" })  
  const tagName=faker.commerce.product();

  await page.locator("//span[normalize-space()='New tag']").click();
  await page.screenshot({ path: "screenshots/TAG01/3.New Tag.jpg" })  
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill(tagName);
  await page.screenshot({ path: "screenshots/TAG01/4.New Tag Diligenciado.jpg" })  
  await page.getByRole('button', { name: 'Save' }).click();

  await page.screenshot({ path: "screenshots/TAG01/5.Save_Tag.jpg" })  


  await page.locator("(//a[normalize-space()='Tags'])[1]").click();
  await page.locator("//span[normalize-space()='New tag']").click();
  await page.screenshot({ path: "screenshots/TAG01/6.New Tag.jpg" })  
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill(tagName);
  await page.screenshot({ path: "screenshots/TAG01/7.New Tag Diligenciado.jpg" })  
  await page.getByRole('button', { name: 'Save' }).click();
  await page.screenshot({ path: "screenshots/TAG01/8.Save_Tag.jpg" })  

  await page.locator("(//a[normalize-space()='Tags'])[1]").click();
  await page.screenshot({ path: "screenshots/TAG01/9.Tag_Duplicado.jpg" })  
  const locator1 = page.locator("(//h3[normalize-space()='"+tagName+"'])[1]");
  const locator2 = page.locator("(//h3[normalize-space()='"+tagName+"'])[2]");


  await expect(locator1).toBeVisible();
  await expect(locator2).toBeVisible();
    


 
});

