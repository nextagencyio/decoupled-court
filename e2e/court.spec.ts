import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Justice for All')).toBeVisible()
    await expect(page.locator('text=Fair, Impartial, and Timely')).toBeVisible()
  })

  test('renders statistics section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=12,000+')).toBeVisible()
    await expect(page.locator('text=Cases Resolved Annually')).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Need to File a Case?')).toBeVisible()
  })
})

test.describe('Judges listing', () => {
  test('displays judge cards', async ({ page }) => {
    await page.goto('/judges')
    await expect(page.locator('text=Chief Judge Patricia Harris')).toBeVisible()
    await expect(page.locator('text=Judge Robert Nakamura')).toBeVisible()
  })

  test('shows judge positions', async ({ page }) => {
    await page.goto('/judges')
    await expect(page.locator('text=Chief Judge').first()).toBeVisible()
    await expect(page.locator('text=Associate Judge').first()).toBeVisible()
  })
})

test.describe('Judge detail page', () => {
  test('renders judge details via slug route', async ({ page }) => {
    await page.goto('/judges/chief-judge-harris')
    await expect(page.getByRole('heading', { name: 'Chief Judge Patricia Harris' })).toBeVisible()
    await expect(page.locator('text=Yale Law School')).toBeVisible()
  })
})

test.describe('Divisions listing', () => {
  test('displays division cards', async ({ page }) => {
    await page.goto('/divisions')
    await expect(page.getByRole('heading', { name: 'Civil Division' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Criminal Division' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Family Division' })).toBeVisible()
  })
})

test.describe('Division detail page', () => {
  test('renders division details via slug route', async ({ page }) => {
    await page.goto('/divisions/civil-division')
    await expect(page.getByRole('heading', { name: 'Civil Division' })).toBeVisible()
    await expect(page.locator('text=4th Floor, Main Courthouse')).toBeVisible()
  })
})

test.describe('Resources listing', () => {
  test('displays resource cards', async ({ page }) => {
    await page.goto('/resources')
    await expect(page.locator('text=Civil Complaint Form')).toBeVisible()
    await expect(page.locator('text=Pro Se Filing Guide')).toBeVisible()
  })
})

test.describe('News listing', () => {
  test('displays news cards', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('text=Court Issues Landmark Ruling on Digital Privacy Rights')).toBeVisible()
    await expect(page.locator('text=Court Launches New Electronic Filing System')).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('header links work', async ({ page }) => {
    await page.goto('/')
    // Click on Judges link
    await page.click('a[href="/judges"]')
    await expect(page).toHaveURL('/judges')
    await expect(page.locator('h1')).toContainText('Judges')
  })

  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: 'About the District Court of Appeals' })).toBeVisible()
  })
})
