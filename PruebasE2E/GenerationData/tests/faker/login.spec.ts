import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD, GhostURL } from '../../properties.json';
import { faker } from '@faker-js/faker'



test('LOGIN01. Realizar Login con email con formato inválido', async ({ page }) => {
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(faker.internet.exampleEmail()+'@'+faker.internet.domainSuffix());
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(faker.internet.password());
  await page.screenshot({ path: "screenshots/LOGIN01/1.Login.jpg" })  
  await page.getByRole('button', { name: 'Sign in →' }).click();

  await page.screenshot({ path: "screenshots/LOGIN01/2.Login_Error.jpg" })   
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await !expect(locator).toContainText("invalid");
});

test('LOGIN02.Error envío email en opcioón Forgot de usuario registrado', async ({ page }) => {
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(faker.internet.password());
  await page.screenshot({ path: "screenshots/LOGIN02/1.Login.jpg" })  
  await  page.locator("(//span[contains(text(),'Forgot?')])[1]").click();

  await page.screenshot({ path: "screenshots/LOGIN01/2.Error_Envio.jpg" })  
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Failed to send email");
});
