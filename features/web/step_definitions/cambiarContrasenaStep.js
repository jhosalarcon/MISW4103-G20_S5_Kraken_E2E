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
})

When('I click settings icon', async function() {
    let element = await this.driver.$('#ember34');
    return await element.click();
})

When('I click Staff icon', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[2]/a[4]');
    return await element.click();
})

When('I click on user info', async function() {
    let element = await this.driver.$('.apps-card-app');
    return await element.click();
})
When('I enter the old password {kraken-string}', async function(password) {
    let element = await this.driver.$('#user-password-old');
    return await element.setValue(password);
})

When('I enter the new password {kraken-string}', async function(password) {
    let element = await this.driver.$('#user-password-new');
    return await element.setValue(password);
})

When('I verify the new password {kraken-string}', async function(password) {
    let element = await this.driver.$('#user-new-password-verification');
    return await element.setValue(password);
})

When('I change the password', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/form[2]/div[1]/fieldset[1]/div[4]/button[1]/span[1]");
    return await element.click();
})

When('I validate successful change', async function() {
    let element = await this.driver.$(".gh-notification-close");
    return await element.click();
})

When('I go to logout', async function() {
    let element = await this.driver.$(".gh-user-avatar.relative");
    return await element.click();
})
When('I press the button sign out', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[1]/div[1]/ul[1]/li[9]/a[1]");
    return await element.click();
})
//-------------------------------------------------------