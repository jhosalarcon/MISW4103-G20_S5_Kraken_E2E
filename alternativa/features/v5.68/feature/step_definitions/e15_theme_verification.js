const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const fs = require('fs');

let driver;

const baseUrl = 'http://localhost:2368/ghost';
const username = 'lordmkichavi@gmail.com';
const password = 'Corinna2019*';

function initializeDriver() {
    let options = new chrome.Options();
    options.addArguments(['--remote-debugging-port=9222']);
    driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

async function takeScreenshot(stepName) {
    let screenshot = await driver.takeScreenshot();
    fs.writeFileSync(`screenshot/v5.68/caso15/screenshot-${stepName}.png`, screenshot, 'base64');
}

Given('the user has logged in to the Ghost Admin', async function () {
    initializeDriver();
    await driver.get(`${baseUrl}/#/signin`);
    await driver.wait(until.elementLocated(By.css('input[name="identification"]')), 10000);
    await driver.findElement(By.css('input[name="identification"]')).sendKeys(username);
    await driver.wait(until.elementLocated(By.css('input[name="password"]')), 10000);
    await driver.findElement(By.css('input[name="password"]')).sendKeys(password);
    await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 10000);
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.sleep(5000);
    await takeScreenshot('login');
});

Given('the user waits for {int} seconds', async function (seconds) {
    await driver.sleep(seconds * 1000);
});

When('the user navigates to the dashboard screen', async function () {
    await driver.get(`${baseUrl}/#/dashboard`);
    await driver.sleep(2000);
    await takeScreenshot('navigate-to-dashboard');
});

Then('the user toggles the theme to dark', async function () {
    let themeToggle = await driver.findElement(By.css('.nightshift-toggle-container .nightshift-toggle'));
    let themeIsActive = await themeToggle.getAttribute('class').then((classes) => classes.includes('on'));
    if (!themeIsActive) {
        await themeToggle.click();
    }
    await driver.sleep(2000);
    await takeScreenshot('toggle-to-dark-theme');
});

Then('the dark theme should be active', async function () {
    let themeToggle = await driver.findElement(By.css('.nightshift-toggle-container .nightshift-toggle.on'));
    let themeIsActive = await themeToggle.getAttribute('class').then((classes) => classes.includes('on'));
    assert(themeIsActive, 'The dark theme should be active.');
    await takeScreenshot('dark-theme-active');
});

Then('the user toggles the theme to light', async function () {
    let themeToggle = await driver.findElement(By.css('.nightshift-toggle-container .nightshift-toggle.on'));
    let themeIsActive = await themeToggle.getAttribute('class').then((classes) => classes.includes('on'));
    if (themeIsActive) {
        await themeToggle.click();
    }
    await driver.sleep(2000);
    await takeScreenshot('toggle-to-light-theme');
});

Then('the light theme should be active', async function () {
    let themeToggle = await driver.findElement(By.css('.nightshift-toggle-container .nightshift-toggle'));
    let themeIsActive = await themeToggle.getAttribute('class').then((classes) => !classes.includes('on'));
    assert(themeIsActive, 'The light theme should be active.');
    await takeScreenshot('light-theme-active');
});

AfterAll(async function () {
    if (driver) {
        await driver.quit();
    }
});
