Feature: crear miembro negativo

@user1 @web
Scenario: Crear un miembro negativo en ghost
Given I navigate to page "http://localhost:2368/ghost"
When I enter email "<Email>"
And I enter password "<OldPass>"
And I click next
And I wait for 2 seconds
And I click on members
And I wait for 2 seconds
And I edit a bad member
And I wait for 2 seconds
And I clear my bad member name
And I type my bad member name
And I clear my bad member email
And I type my bad member email
And I clear my bad member note
And I type my bad member note
And I click to save my bad member
Then I validate the bad response
And I wait for 2 seconds
And I click on members
And I wait for 2 seconds
And I click leave form
And I wait for 2 seconds
Then I validate bad member doesnt change
And I wait for 2 seconds