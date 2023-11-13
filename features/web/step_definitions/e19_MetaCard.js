const { Given, When, Then } = require('@cucumber/cucumber');




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

