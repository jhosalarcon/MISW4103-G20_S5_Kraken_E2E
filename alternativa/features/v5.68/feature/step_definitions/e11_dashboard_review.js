const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const fs = require('fs');

let driver;

const baseUrl = 'http://localhost:3001/ghost';
const username = 'pruebas@correo.com';
const password = 'Test654321';

function initializeDriver() {
    let options = new chrome.Options();
    options.addArguments(['--remote-debugging-port=9222']);
    driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

async function takeScreenshot(stepName) {
    let screenshot = await driver.takeScreenshot();
    fs.writeFileSync(`screenshot/v5.68/caso11/screenshot-${stepName}.png`, screenshot, 'base64');
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

Then('the "Total members" information should be visible', async function () {
    await driver.wait(until.elementLocated(By.xpath("//h5[normalize-space()='Total members']")), 10000);
    let totalMembersElement = await driver.findElement(By.xpath("//h5[normalize-space()='Total members']"));
    assert(await totalMembersElement.isDisplayed(), '"Total members" information is not visible');
    await takeScreenshot('total-members-visible');
});

Then('the "Created manually" information should be visible', async function () {
    await driver.wait(until.elementLocated(By.xpath("//span[normalize-space()='Created manually']")), 10000);
    let createdManuallyElement = await driver.findElement(By.xpath("//span[normalize-space()='Created manually']"));
    assert(await createdManuallyElement.isDisplayed(), '"Created manually" information is not visible');
    await takeScreenshot('created-manually-visible');
});

Then('the dashboard list footer should be present', async function () {
    await driver.wait(until.elementLocated(By.css(".gh-dashboard-list-footer")), 10000);
    let listFooterElement = await driver.findElement(By.css(".gh-dashboard-list-footer"));
    assert(await listFooterElement.isDisplayed(), 'Dashboard list footer is not present');
    await takeScreenshot('dashboard-footer-present');
});

AfterAll(async function () {
    if (driver) {
        await driver.quit();
    }
});
