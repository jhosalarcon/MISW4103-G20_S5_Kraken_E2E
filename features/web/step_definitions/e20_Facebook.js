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

When ('I write on search {kraken-string}', async function (FB) {
    let element = await this.driver.$("(//input[@id=':r1:'])[1]");
    return await element.setValue(FB);
}); 

When ('I click on editFB', async function() {
    let element = await this.driver.$("//div[contains(@class,'relative flex-col gap-6 rounded-lg transition-all border p-5 md:p-7 flex is-not-editing group/setting-group undefined border-grey-300 dark:border-grey-800 hover:border-grey-500')]//span[contains(text(),'Edit')]");
    return await element.click();
});

When ('I click on FBtitle', async function() {
    let element = await this.driver.$("(//input[@placeholder='Pruebas automatizadas'])[1]");
    return await element.click();
});

When ('I write a FBtitle {kraken-string}', async function (FBtitle) {
    let element = await this.driver.$("(//input[@placeholder='Pruebas automatizadas'])[1]");
    return await element.setValue(FBtitle);
});

When ('I write a FBBody {kraken-string}', async function (FBBody) {
    let element = await this.driver.$("(//input[@placeholder='Thoughts, stories and ideas.'])[1]");
    return await element.setValue(FBBody);
});

When ('I click on FBSave' , async function () {
    let element = await this.driver.$("(//span[contains(text(),'Save')])[1]");
    return await element.click();
});