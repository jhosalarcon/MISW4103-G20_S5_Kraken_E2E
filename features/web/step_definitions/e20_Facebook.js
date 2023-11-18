const { Given, When, Then } = require('@cucumber/cucumber');




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