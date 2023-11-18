const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const assert = require('assert');
const uuid = Math.random() * 100;
const uuid2 = Math.random() * 100;

When('I add a newsletter', async function() {
    await this.driver.$("(//h4[normalize-space()='Email newsletter'])[1]").click();
    await this.driver.$("(//a[normalize-space()='Add newsletter'])[1]").click();
    await this.driver.$("#newsletter-title").setValue('Test title ' + uuid);
    await this.driver.$("#newsletter-description").setValue('Test description');
    let element = this.driver.$("(//span[normalize-space()='Create'])[1]");
    return await element.click();
})

When('I validate new newsletter', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/a[1]/h3[1]");
    let text = await element.getText();
    return assert.equal(text, "Test title "+uuid);
})

When('I edit a newsletter', async function() {
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/span[1]").click();
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/ul[1]/li[1]/a[1]").click();
    await this.driver.$("#newsletter-title").setValue('Test title ' + uuid2);
    await this.driver.$("#newsletter-description").setValue('Test description');
    let element = this.driver.$("//span[normalize-space()='Save and close']");
    return await element.click();
})

When('I validate edit newsletter', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/a[1]/h3[1]");
    let text = await element.getText();
    return assert.equal(text, "Test title "+uuid2);
})

When('I archive newsletter', async function() {
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/span[1]").click();
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/ul[1]/li[2]/button[1]").click();
    return await this.driver.$("/html[1]/body[1]/div[5]/div[1]/div[1]/div[2]/button[2]/span[1]").click();
})