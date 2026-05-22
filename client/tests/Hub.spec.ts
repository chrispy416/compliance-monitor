import { test, expect } from '@playwright/test'

test('complies result', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Action').fill('Closed ticket #48219 and sent confirmation email');
  await page.getByLabel('Guideline').fill('All closed tickets must include a confirmation email');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('COMPLIES').first()).toBeVisible({ timeout: 6000});
});

test('deviates result', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Action').fill('Closed ticket #48219 without sending confirmation email');
  await page.getByLabel('Guideline').fill('All closed tickets must include a confirmation email');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('DEVIATES').first()).toBeVisible({ timeout: 6000});
});

test('unclear result', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Action').fill('Skipped torque confirmation at Station 3');
  await page.getByLabel('Guideline').fill('No guidelines exist for this case.');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('UNCLEAR').first()).toBeVisible({ timeout: 6000});
})

test('history persists after submit', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Action').fill('Closed ticket #48219 and sent confirmation email');
  await page.getByLabel('Guideline').fill('All closed tickets must include a confirmation email');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('COMPLIES').first()).toBeVisible({ timeout: 6000});
  await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible({ timeout: 6000});
});

test('edit from history repopulates form', async ({ page }) => {
  await page.goto('/');

  // First submission
  await page.getByLabel('Action').fill('Closed ticket #48219 and sent confirmation email');
  await page.getByLabel('Guideline').fill('All closed tickets must include a confirmation email');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('COMPLIES').first()).toBeVisible({ timeout: 6000});

  // Second submission
  await page.getByLabel('Action').fill('Skipped torque confirmation at Station 3');
  await page.getByLabel('Guideline').fill('No guidelines exist for this case.');

  await page.getByRole('button', { name: 'Edit' }).click()
  await expect(page.getByLabel('Action')).toHaveValue("Closed ticket #48219 and sent confirmation email");
  await expect(page.getByLabel('Guideline')).toHaveValue("All closed tickets must include a confirmation email");
})

