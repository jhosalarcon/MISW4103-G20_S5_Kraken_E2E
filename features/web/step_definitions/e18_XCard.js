

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

When ('I click on Search', async function() {
    let element = await this.driver.$("(//input[@id=':r1:'])[1]");
    return await element.click();
});
When ('I write on search {kraken-string}', async function (X) {
    let element = await this.driver.$("(//input[@id=':r1:'])[1]");
    return await element.setValue(X);
}); 

When ('I click on editX', async function() {
    let element = await this.driver.$("(//span[contains(text(),'Edit')])[5]");
    return await element.click();
});

When ('I click on Xtitle', async function() {
    let element = await this.driver.$("(//input[@placeholder='Pruebas automatizadas'])[1]");
    return await element.click();
});

When ('I write a Xtitle {kraken-string}', async function (Xtitle) {
    let element = await this.driver.$("(//input[@placeholder='Pruebas automatizadas'])[1]");
    return await element.setValue(Xtitle);
});

When ('I write a XBody {kraken-string}', async function (XBody) {
    let element = await this.driver.$("(//input[@placeholder='Thoughts, stories and ideas.'])[1]");
    return await element.setValue(XBody);
});

When ('I click on XSave' , async function () {
    let element = await this.driver.$("(//span[normalize-space()='Save'])[1]");
    return await element.click();
});

