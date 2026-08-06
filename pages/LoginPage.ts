import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('https://sads-test.finztrust.com/admin/login');
  }

  async login(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'ឈ្មោះអ្នកប្រើប្រាស់*' }).fill(username);
    await this.page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).fill(password);
    await this.page.getByRole('button', { name: 'ចូលក្នុងប្រព័ន្ធ' }).click();
  }
}
