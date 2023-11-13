/*
const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
});

When('I click settings', async function() {
    let element = await this.driver.$('[data-test-nav="settings"]');
    return await element.click();
});

When ('I click on edit Timezone', async function() {
    let element = await this.driver.$("(//input[@id=':r1:'])[1]");
    return await element.click();
});
When ('I write on search {kraken-string}', async function (timezone) {
    let element = await this.driver.$("(//input[@id=':r1:'])[1]");
    return await element.setValue(timezone);
}); 

When ('I click on edit', async function() {
    let element = await this.driver.$("(//span[contains(text(),'Edit')])[2]");
    return await element.click();
});

When ('I click UTC' , async function () {
    let element = await this.driver.$("(//div[@class=' css-n9qnu9'])[1]");
    return await element.setValue();
});

When ('I write new UTC {kraken-string}' , async function (Bogota) {
    let element = await this.driver.$("(//div[@class=' css-n9qnu9'])[1]")
});

Then('I save it', async function() {
    let element = await this.driver.$("//span[normalize-space()='Save']");
    return await element.click();
});

**/