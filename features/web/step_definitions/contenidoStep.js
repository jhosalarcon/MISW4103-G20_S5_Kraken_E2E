const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');

When('I click Labs icon', async function() {
    let element = await this.driver.$("(//h4[normalize-space()='Labs'])[1]");
    return await element.click();
})

When('I click on export icon', async function() {
    let element = await this.driver.$("(//span[normalize-space()='Export'])[1]");
    return await element.click();
})

When('I click on delete icon', async function() {
    let element = await this.driver.$("(//span[normalize-space()='Delete'])[1]");
    return await element.click();
})

When('I confirm delete content', async function() {
    let element = await this.driver.$("(//span[@data-test-task-button-state='idle'])[1]");
    return await element.click();
})

When('I validate deleted content', async function() {
    let element = await this.driver.$(".gh-alert.gh-alert-green");
    return await element.click();
})

When('I import content', async function() {
    let element = await this.driver.$("(//span[normalize-space()='Open Importer'])[1]");
    return await element.click();
})

When('I drop a json file', async function() {
    const filePath = 'features/fixtures/import-content.json';
    const fileContent = fs.readFileSync(filePath, 'utf8');
    let element = await this.driver.$(".gh-content-import-wrapper");
    await this.driver.$('input[type="file"]')
    return element.setValue(fileContent);
})
