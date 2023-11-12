
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

let driver;

function initializeDriver() {
    let options = new chrome.Options();
    options.addArguments(['--remote-debugging-port=9222']);
    driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

Given('the user has logged in to the Ghost Admin', async function () {
    initializeDriver();
    await driver.get('http://localhost:2368/ghost/#/signin');
    await driver.wait(until.elementLocated(By.css('input[name="identification"]')), 10000);
    await driver.findElement(By.css('input[name="identification"]')).sendKeys('pruebas@correo.com');
    await driver.wait(until.elementLocated(By.css('input[name="password"]')), 10000);
    await driver.findElement(By.css('input[name="password"]')).sendKeys('Test654321');
    await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 10000);
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.sleep(5000);
});

Given('the user waits for {int} seconds', async function (seconds) {
    await driver.sleep(seconds * 1000);
});

When('the user navigates to the dashboard screen', async function () {
    await driver.get('http://localhost:2368/ghost/#/dashboard');
    await driver.sleep(2000);
});

Then('the user toggles the theme to dark', async function () {
    let themeToggle = await driver.findElement(By.css('.nightshift-toggle-container .nightshift-toggle'));
    let themeIsActive = await themeToggle.getAttribute('class').then((classes) => classes.includes('on'));
    if (!themeIsActive) {
        await themeToggle.click();
    }
    await driver.sleep(2000);
});

Then('the dark theme should be active', async function () {
    let themeToggle = await driver.findElement(By.css('.nightshift-toggle-container .nightshift-toggle.on'));
    let themeIsActive = await themeToggle.getAttribute('class').then((classes) => classes.includes('on'));
    assert(themeIsActive, 'The dark theme should be active.');
});

Then('the user toggles the theme to light', async function () {
    let themeToggle = await driver.findElement(By.css('.nightshift-toggle-container .nightshift-toggle.on'));
    let themeIsActive = await themeToggle.getAttribute('class').then((classes) => classes.includes('on'));
    if (themeIsActive) {
        await themeToggle.click();
    }
    await driver.sleep(2000);
});

Then('the light theme should be active', async function () {
    let themeToggle = await driver.findElement(By.css('.nightshift-toggle-container .nightshift-toggle'));
    let themeIsActive = await themeToggle.getAttribute('class').then((classes) => !classes.includes('on'));
    assert(themeIsActive, 'The light theme should be active.');
});

AfterAll(async function () {
    if (driver) {
        await driver.quit();
    }
});
