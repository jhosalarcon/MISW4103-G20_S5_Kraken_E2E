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
    fs.writeFileSync(`screenshot/v5.68/caso14/screenshot-${stepName}.png`, screenshot, 'base64');
}

Given('the user has logged in to the Ghost Admin', async function () {
    initializeDriver();
    await driver.get(`${baseUrl}/#/signin`);

    let identificationInput = await driver.wait(until.elementLocated(By.css('input[name="identification"]')), 10000);
    await identificationInput.sendKeys(username);

    let passwordInput = await driver.wait(until.elementLocated(By.css('input[name="password"]')), 10000);
    await passwordInput.sendKeys(password);

    let submitButton = await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 10000);
    await submitButton.click();

    await driver.wait(until.urlContains('ghost/#/dashboard'), 15000);
    await takeScreenshot('login');
});

Then('the user navigates to the tags management page', async function () {
    await driver.get(`${baseUrl}/#/tags`);
    await driver.wait(until.elementLocated(By.xpath("//span[text()='New tag']")), 10000);
    await takeScreenshot('navigate-to-tags');
});

When('I click on the "New tag" button', async function () {
    let newTagButton = await driver.wait(until.elementLocated(By.xpath("//span[text()='New tag']")), 10000);
    await newTagButton.click();
    await takeScreenshot('new-tag-button-click');
});

When('I enter "New Tag Name" into the tag name input field', async function () {
    let tagNameInput = await driver.wait(until.elementLocated(By.css('input[name="name"]')), 10000);
    await tagNameInput.sendKeys('New Tag Name');
    await takeScreenshot('enter-tag-name');
});

When('I enter "A description for the new tag" into the description input field', async function () {
    let tagDescriptionInput = await driver.wait(until.elementLocated(By.css('textarea[name="description"]')), 10000);
    await tagDescriptionInput.sendKeys('A description for the new tag');
    await takeScreenshot('enter-tag-description');
});

When('I click the "Save" button', async function () {
    let saveButton = await driver.wait(until.elementLocated(By.xpath("//button/span[text()='Save']")), 10000);
    await saveButton.click();
    await takeScreenshot('click-save-button');
});

AfterAll(async function () {
    if (driver) {
        await driver.quit();
    }
});
