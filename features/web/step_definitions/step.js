const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const fs = require('fs');


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
    let element = await this.driver.$('#user-password-new');
    return await element.setValue(password);
})


//------CASOS ERIK--------------------//
//------Caso 6------------------------//
When('I click my avatar', async function() {
    let element = await this.driver.$('.gh-user-avatar');
    return await element.click();
})
When('I click my profile', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[4]/a[1]');
    return await element.click();
})
When('I clear my name', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/section[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]');
    return await element.clear();
})
When('I type my new name', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/section[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]');
    return await element.setValue("Erik editado");
})
When('I clear my sludge', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/section[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/input[1]');
    return await element.clear();
})
When('I type my new sludge', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/section[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/input[1]');
    return await element.setValue("slugeditado");
})
When('I clear my country', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/section[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]');
    return await element.clear();
})
When('I type my new country', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/section[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]');
    return await element.setValue("colombia editado");
})
When('I save my profile edited', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/section[1]/div[2]/div[2]/div[1]/div[2]/div[1]/button[2]/span[1]');
    return await element.click();
})
Then('I validate my new name', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[9]/div[3]/div[2]/span[1]');
    let text = await element.getText();
    assert.include(text, "Erik editado")
})
When('I click my edited profile', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[9]/div[3]/div[2]/span[1]');
    return await element.click();
})
When('I type my old name', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/section[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]');
    return await element.setValue("Erik");
})
When('I type my old sludge', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/section[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/input[1]');
    return await element.setValue("slug");
})
When('I type my old country', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[4]/section[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]');
    return await element.click();
})
Then('I validate my old name', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[9]/div[3]/div[2]/span[1]');
    let text = await element.getText();
    assert.include(text, "Erik")
})

//--------------Caso 7-----------------------------//

When('I click on members', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/ul[2]/li[4]/a[1]');
    return await element.click();
})
When('I click on member actions', async function() {
    let element = await this.driver.$('button.gh-btn[data-test-button="members-actions"]');
    return await element.click();
})
When('I click on import members', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[2]/span[1]/ul[1]/li[1]/a[1]');
    return await element.click();
})
When('I drop a csv file', async function() {
    const filePath = 'features\fixtures\cargar_miembros.csv';
    const fileContent = fs.readFileSync(filePath, 'utf8');
    let element = await this.driver.$('/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[1]/div[1]/div[1]/section[1]/span[1]/label[1]');
    await element.click();
    await this.driver.$('input[type="file"]').uploadFile(filePath);
    return fileContent;
})
When('I click on import members button', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[1]/div[2]/button[2]/span[1]');
    return await element.click();
})
Then('I validate the error', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[1]/div[1]/div[1]/p[1]');
    let text = await element.getText();
    assert.include(text, "An unexpected error occurred, please try again");
})



//--------------Caso 8-----------------------------//

When('I create a new bad member', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/div[2]/a[1]/span[1]');
    return await element.click();
})
When('I type my bad member name', async function() {
    let element = await this.driver.$('#member-name');
    return await element.setValue("Erik Negativo");
})
When('I type my bad member email', async function() {
    let element = await this.driver.$('#member-email');
    return await element.setValue("34325qwe");
})
When('I type my bad member note', async function() {
    let element = await this.driver.$('#member-note');
    return await element.setValue("Esto es una prueba de crear miembro de manera negativa");
})
When('I click to save my bad member', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/button[1]/span[1]');
    return await element.click();
})
Then('I validate the bad response', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[2]/form[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[2]/p[1]');
    let text = await element.getText();
    assert.include(text, "Invalid Email.");
})
When('I click member leave', async function(){
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/div[1]/div[1]/a[1]');
    return await element.click();
})
When('I click leave form', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/div[1]/div[1]/a[1]');
    return await element.click();
})
Then('I validate bad member dont exist', async function() {
    let element = await this.driver.$('a.gh-list-data');
    let text = await element.getText();
    assert.notInclude(text, "Erik Negativo", "Erik Negativo should not exist");
})

//--------------Caso 9-----------------------------//

When('I clear my bad member name', async function() {
    let element = await this.driver.$('#member-name');
    return await element.clear();
})
When('I clear my bad member email', async function() {
    let element = await this.driver.$('#member-email');
    return await element.clear();
})
When('I clear my bad member note', async function() {
    let element = await this.driver.$('#member-note');
    return await element.clear();
})
Then('I validate bad member doesnt change', async function() {
    let element = await this.driver.$('a.gh-list-data');
    let text = await element.getText();
    assert.include(text, "Erik");
})


//--------------Caso 10-----------------------------//

When('I click on searchbar', async function() {
    let element = await this.driver.$('button.gh-nav-btn-search');
    return await element.click();
})
When('I type on the searchbar', async function() {
    let element = await this.driver.$('input.gh-input-with-select-input');
    return await element.setValue("Coming soon");
})
When('I click on the results', async function() {
    let element = await this.driver.$('li.ember-power-select-option');
    return await element.click();
})
Then('I validate the results of the searchbar', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/section[1]/button[1]/span[1]');
    let text = await element.getText();
    assert.include(text, "Update");
})


//-------------------------------------------------------
