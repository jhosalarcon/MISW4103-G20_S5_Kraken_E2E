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

When('I click post icon', async function() {
    let element = await this.driver.$('#ember20');
    return await element.click();
});

When('I enter a title {kraken-string}', async function (title) {
    let element = await this.driver.$('[placeholder = "Post title"');
    return await element.setValue(title);
});

When('I click bodys', async function() {
    let element = await this.driver.$('p');
    return await element.click();
});

When('I enter a body {kraken-string}', async function (body) {
    let element = await this.driver.$('p');
    return await element.setValue(body);
});

When('I click publish', async function() {
    let element = await this.driver.$('[data-test-button="publish-flow"]');
    return await element.click();
});

When('I click publish post', async function() {
    let element = await this.driver.$('[data-test-button="continue"]');
    return await element.click();
});

When('I confirm the publish', async function() {   
    let element = await this.driver.$('[data-test-button="confirm-publish"]');
    return await element.click();
});

When( 'I click on back to editor', async function() {
    let element = await this.driver.$('.gh-publish-header > .gh-btn-editor');
    return await element.click();
 });

 When('I click on title to edit it', async function() {
    let element = await this.driver.$('[placeholder = "Post title"');
    return await element.click();
});

When('I enter a new title {kraken-string}', async function (Newtitle) {
    let element = await this.driver.$('[placeholder = "Post title"');
    return await element.setValue(Newtitle);
});

When('I click bodys again', async function() {
    let element = await this.driver.$('p');
    return await element.click();
});

When('I enter a new body {kraken-string}', async function (Newbody) {
    let element = await this.driver.$('p');
    return await element.setValue(Newbody);
});

When('I click update', async function() {
    let element = await this.driver.$('[data-test-task-button-state="idle"]');
    return await element.click();
});

When('I click settings post', async function() {
    let element = await this.driver.$('.settings-menu-toggle > span');
    return await element.click();
});  

When('I click delete post', async function() {
    let element = await this.driver.$('.settings-menu-delete-button > .gh-btn > span');
    return await element.click();
});

Then('I click confirm', async function() {
    let element = await this.driver.$('[data-test-task-button-state="idle"]');
    return await element.click();
});

