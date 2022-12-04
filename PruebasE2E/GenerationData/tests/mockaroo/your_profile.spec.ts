import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD, GhostURL } from '../../properties.json';




test('PROFILE01. La funcionalidad Cambiar Password permite ingresar el mismo password en el nuevo ', async ({ page }) => {
  await page.goto('http://localhost:2368/ghost/');
  await page.goto('http://localhost:2368/ghost/#/signin');
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.screenshot({ path: "screenshots/PROFILE01/1.Login.jpg" })
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.locator('#ember31').click();
  await page.screenshot({ path: "screenshots/PROFILE01/2.Autenticacion_Exitosa.jpg" })
  await page.getByRole('link', { name: 'Your profile' }).click();
  await page.screenshot({ path: "screenshots/PROFILE01/3.Your_Profile.jpg" })
  await page.getByLabel('Old password').click();
  await page.getByLabel('Old password').fill(PASSWORD);
  await page.getByLabel('Old password').press('Tab');
  await page.getByLabel('New password').fill(PASSWORD);
  await page.getByLabel('New password').press('Tab');
  await page.getByLabel('Verify password').fill(PASSWORD);
  await page.screenshot({ path: "screenshots/PROFILE01/4.Cambiar_Password.jpg" })
  await page.getByRole('button', { name: 'Change Password' }).click();
  await page.getByText('Password updated').click({button: 'right'});
  await page.screenshot({ path: "screenshots/PROFILE01/5.Cambiar_Password_exitoso.jpg" })

  const locator2 = page.getByText('Password updated');
  await expect(locator2).toBeVisible();
});