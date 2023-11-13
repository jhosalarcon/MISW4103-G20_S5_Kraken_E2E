const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const fs = require('fs');


//------CASOS ERIK--------------------//
//------Caso 6------------------------//
When('I click my avatar', async function() {
    let element = await this.driver.$('//div[@class="flex-auto flex items-center"]');
    return await element.click();
})
When('I click my profile', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/ul[1]/li[4]/a[1]');
    return await element.click();
})
When('I clear my name', async function() {
    let element = await this.driver.$('#user-name');
    return await element.setValue('');
})
When('I type my new name', async function() {
    let element = await this.driver.$('#user-name');
    return await element.setValue("Erik editado");
})
When('I clear my sludge', async function() {
    let element = await this.driver.$('#user-slug');
    return await element.setValue('');
})
When('I type my new sludge', async function() {
    let element = await this.driver.$('#user-slug');
    return await element.setValue("slugeditado");
})
When('I clear my country', async function() {
    let element = await this.driver.$('#user-location');
    return await element.setValue('');
})
When('I type my new country', async function() {
    let element = await this.driver.$('#user-location');
    return await element.setValue("colombia editado");
})
When('I save my profile edited', async function() {
    let element = await this.driver.$('//span[normalize-space()="Save"]');
    return await element.click();
})
When('I click on staff', async function(){
    let element = await this.driver.$('[data-test-staff-link]');
    return await element.click();
})
Then('I validate my new name', async function() {
    let element = await this.driver.$('//h3[@class="apps-card-app-title"]');
    let text = await element.getText();
    assert.ok(text.includes("Erik editado"), `El texto "${text}" no incluye "Erik editado"`);
});
When('I click my edited profile', async function() {
    let element = await this.driver.$('//h3[@class="apps-card-app-title"]');
    return await element.click();
})
When('I type my old name', async function() {
    let element = await this.driver.$('#user-name');
    return await element.setValue("Erik");
})
When('I type my old sludge', async function() {
    let element = await this.driver.$('#user-slug');
    return await element.setValue("slug");
})
When('I type my old country', async function() {
    let element = await this.driver.$('#user-location');
    return await element.click();
})
Then('I validate my old name', async function() {
    let element = await this.driver.$('//h3[@class="apps-card-app-title"]');
    let text = await element.getText();
    assert.ok(text.includes("Erik"), `El texto "${text}" no incluye "Erik"`);
});

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
    const filePath = 'features/fixtures/cargar_miembros.csv';
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
    assert.ok(text.includes("Invalid Email."), `El texto "${text}" no incluye "Invalid Email."`);
})


When('I click member leave', async function(){
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/div[1]/div[1]/a[1]');
    return await element.click();
})
When('I click leave form', async function() {
    let element = await this.driver.$('[data-test-leave-button]');
    return await element.click();
})
Then('I validate bad member doesnt exist', async function() {
    let element = await this.driver.$('a.gh-list-data');
    let text = await element.getText();
    assert.ok(!text.includes("Erik Negativo"), `El texto "${text}" incluye "Erik Negativo"`);
});

//--------------Caso 9-----------------------------//

When('I edit a bad member', async function() {
    let element = await this.driver.$('a.gh-list-data');
    return await element.click();
})
When('I clear my bad member name', async function() {
    let element = await this.driver.$('#member-name');
    return await element.setValue('');
})
When('I clear my bad member email', async function() {
    let element = await this.driver.$('#member-email');
    return await element.setValue('');
})
When('I clear my bad member note', async function() {
    let element = await this.driver.$('#member-note');
    return await element.setValue('');
})
Then('I validate bad member doesnt change', async function() {
    let element = await this.driver.$('a.gh-list-data');
    let text = await element.getText();
    assert.ok(!text.includes("Erik Negativo"), `El texto "${text}" incluye "Erik Negativo"`);
});




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
    assert.ok(text.includes("Update"), `El texto "${text}" no incluye "Update"`);
})


//-------------------------------------------------------
