

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

When ('I write on search {kraken-string}', async function (Meta) {
    let element = await this.driver.$("(//input[@id=':r1:'])[1]");
    return await element.setValue(Meta);
}); 

When ('I click on editMeta', async function() {
    let element = await this.driver.$("(//span[contains(text(),'Edit')])[4]");
    return await element.click();
});

When ('I click on Metatitle', async function() {
    let element = await this.driver.$("(//input[@placeholder='Pruebas automatizadas'])[1]");
    return await element.click();
});

When ('I write a Metatitle {kraken-string}', async function (Metatitle) {
    let element = await this.driver.$("(//input[@placeholder='Pruebas automatizadas'])[1]");
    return await element.setValue(Metatitle);
});

When ('I write a MetaBody {kraken-string}', async function (MetaBody) {
    let element = await this.driver.$("(//input[@placeholder='Thoughts, stories and ideas.'])[1]");
    return await element.setValue(MetaBody);
});

When ('I click on MetaSave' , async function () {
    let element = await this.driver.$("(//span[contains(text(),'Save')])[1]");
    return await element.click();
});

