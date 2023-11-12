
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
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

    let identificationInput = await driver.wait(until.elementLocated(By.css('input[name="identification"]')), 10000);
    await identificationInput.sendKeys('pruebas@correo.com');

    let passwordInput = await driver.wait(until.elementLocated(By.css('input[name="password"]')), 10000);
    await passwordInput.sendKeys('Test654321');

    let submitButton = await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 10000);
    await submitButton.click();

    await driver.wait(until.urlContains('ghost/#/dashboard'), 15000);
});

Then('the user navigates to the tags management page', async function () {
    await driver.get('http://localhost:2368/ghost/#/tags');
    await driver.wait(until.elementLocated(By.xpath("//span[text()='New tag']")), 10000);
});

When('I click on the "New tag" button', async function () {
    let newTagButton = await driver.wait(until.elementLocated(By.xpath("//span[text()='New tag']")), 10000);
    await newTagButton.click();
});

When('I enter "New Tag Name" into the tag name input field', async function () {
    let tagNameInput = await driver.wait(until.elementLocated(By.css('input[name="name"]')), 10000);
    await tagNameInput.sendKeys('New Tag Name');
});

When('I enter "A description for the new tag" into the description input field', async function () {
    let tagDescriptionInput = await driver.wait(until.elementLocated(By.css('textarea[name="description"]')), 10000);
    await tagDescriptionInput.sendKeys('A description for the new tag');
});

When('I click the "Save" button', async function () {
    let saveButton = await driver.wait(until.elementLocated(By.xpath("//button/span[text()='Save']")), 10000);
    await saveButton.click();
});

AfterAll(async function () {
    if (driver) {
        await driver.quit();
    }
});
