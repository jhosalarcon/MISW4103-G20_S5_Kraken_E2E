const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const { assert } = require('chai');

When('I add announcement bar', async function() {
    await this.driver.$("//h4[normalize-space()='Announcement bar']").click();
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/p[1]").click();
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/nav[1]/div[1]/section[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/p[1]").setValue('Test bar');
    await this.driver.$("span[data-test-task-button-state='idle']").click();
})

When('I validate announcement bar', async function() {
    let bar = await this.driver.$(".gh-announcement-bar.dark").getText();
    assert.include(bar, "Test bar","Announcement bar is present");
})
