
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
    let identificationInput = await driver.wait(until.elementLocated(By.css('input[name="identification"]')), 10000);
    await identificationInput.sendKeys('pruebas@correo.com');
    let passwordInput = await driver.wait(until.elementLocated(By.css('input[name="password"]')), 10000);
    await passwordInput.sendKeys('Test654321');
    let submitButton = await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 10000);
    await submitButton.click();
    await driver.sleep(5000); 
});

When('the user navigates to the post editor screen', async function () {
    await driver.get('http://localhost:2368/ghost/#/editor/post');
    await driver.sleep(2000); 
});

When('the user enters a title "My New Ghost Post" for the draft post', async function () {
    let postTitleInput = await driver.wait(until.elementLocated(By.css('textarea[placeholder="Post title"]')), 10000);
    await driver.wait(until.elementIsVisible(postTitleInput), 10000);
    await postTitleInput.sendKeys('My New Ghost Post');
    await driver.sleep(2000); 
});

When('the user enters content "Contenido del borrador del post." for the draft post', async function () {
    let editorParagraph = await driver.wait(until.elementLocated(By.xpath('//p[@data-koenig-dnd-droppable="true"]')), 10000);
    await driver.executeScript("arguments[0].click();", editorParagraph);
    await editorParagraph.sendKeys('Contenido del borrador del post.');
    await driver.sleep(2000); 
});

When('the user clicks the "Publish" button', async function () {
    let publishButton = await driver.findElement(By.xpath("//span[normalize-space()='Publish']"));
    await publishButton.click();
    await driver.sleep(2000);
});

Then('the user should be on the post editor screen', async function () {
    let currentUrl = await driver.getCurrentUrl();
    assert(currentUrl.includes('/ghost/#/editor/post'), 'User is not on the post editor screen');
    await driver.sleep(2000);
});

Then('the "Ready, set, publish. Share it with the world." message should be visible', async function () {
    let messageElement = await driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'Ready, set, publish. Share it with the world.')]")), 10000);
    let isVisible = await messageElement.isDisplayed();
    assert(isVisible, 'The publish success message is not visible.');
    await driver.sleep(5000); 
});

AfterAll(async function () {
    if (driver) {
        await driver.quit();
    }
});
