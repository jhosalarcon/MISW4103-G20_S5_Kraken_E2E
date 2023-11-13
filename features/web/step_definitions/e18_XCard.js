

const { Given, When, Then } = require('@cucumber/cucumber');





When ('I click on Search', async function() {
    let element = await this.driver.$("(//input[@id=':r1:'])[1]");
    return await element.click();
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

