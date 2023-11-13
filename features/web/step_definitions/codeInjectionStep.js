const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');

When('I add code injection', async function() {
    await this.driver.$("(//h4[normalize-space()='Code injection'])[1]").click();
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/form[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/pre[1]").click();
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/form[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/pre[1]").setValue('Test header');
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/form[1]/fieldset[1]/div[2]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/pre[1]").click();
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/form[1]/fieldset[1]/div[2]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/pre[1]").setValue('Test footer');
    await this.driver.$("span[data-test-task-button-state='idle']").click();
})

When('I validate code injection', async function() {
    let body = await this.driver.$("body").getText();
})

When('I clean code injection', async function() {
    await this.driver.$("(//h4[normalize-space()='Code injection'])[1]").click();
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/form[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/pre[1]").click();
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/form[1]/fieldset[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/pre[1]").select();
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/form[1]/fieldset[1]/div[2]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/pre[1]").click();
    await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/form[1]/fieldset[1]/div[2]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/pre[1]").select();
    await this.driver.$("span[data-test-task-button-state='idle']").click();
})