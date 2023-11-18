const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const fs = require('fs');

let driver;

const baseUrl = 'http://localhost:3001/ghost';
const username = 'pruebas@correo.com';
const password = 'Test654321';

async function initializeDriver() {
    let options = new chrome.Options();
    options.addArguments(['--remote-debugging-port=9222']);
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

async function takeScreenshot(stepName) {
    let screenshot = await driver.takeScreenshot();
    fs.writeFileSync(`screenshot/v5.68/caso12/screenshot-${stepName}.png`, screenshot, 'base64');
}

Given('the user has logged in to the Ghost Admin', async function () {
    await initializeDriver();
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

When('the user navigates to the pages screen', async function () {
    await driver.get(`${baseUrl}/#/pages`);
    await driver.sleep(2000);
    await takeScreenshot('navigate-to-pages');
});

Then('the user clicks on "New page" button', async function () {
    await driver.wait(until.elementLocated(By.xpath("//span[contains(text(), 'New page')]")), 10000);
    await driver.findElement(By.xpath("//span[contains(text(), 'New page')]")).click();
    await driver.sleep(2000);
    await takeScreenshot('click-new-page');
});

Then('the user is on the page editor screen', async function () {
    let currentUrl = await driver.getCurrentUrl();
    assert.ok(currentUrl.includes('/editor/page'), 'The user is not on the page editor screen');
    await driver.sleep(2000);
    await takeScreenshot('page-editor-screen');
});

Then('the user enters a title "Título de Nueva Página"', async function () {
    let titleTextarea = await driver.wait(until.elementLocated(By.css('textarea[placeholder="Page title"]')), 10000);
    await titleTextarea.sendKeys('Título de Nueva Página');
    await driver.sleep(2000);
    await titleTextarea.sendKeys(Key.ENTER);
    await takeScreenshot('enter-page-title');
});

Then('the user clicks the "Publish" button', async function () {
    let publishButton = await driver.wait(until.elementLocated(By.css('button.gh-btn.gh-btn-editor.gh-publish-trigger[data-test-button="publish-flow"]')), 10000);
    await publishButton.click();
    await takeScreenshot('click-publish');
});

Then('the "Ready, set, publish. Share it with the world." message should be visible', async function () {
    let messageLocator = By.css('div.gh-publish-title');
    let messageElement = await driver.wait(until.elementLocated(messageLocator), 10000);
    await driver.wait(until.elementIsVisible(messageElement), 10000);
    let isVisible = await messageElement.isDisplayed();
    assert.strictEqual(isVisible, true, 'The message should be visible on the page');
    await takeScreenshot('publish-message-visible');
});

AfterAll(async function () {
    await driver.quit();
});
