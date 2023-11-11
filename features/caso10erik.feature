Feature: crear miembro negativo

@user1 @web
Scenario: Crear un miembro negativo en ghost
Given I navigate to page "http://localhost:2368/ghost"
When I enter email "<Email>"
And I enter password "<OldPass>"
And I click next
And I wait for 2 seconds
And I click on searchbar
And I wait for 2 seconds
And I type on the searchbar
And I wait for 5 seconds
And I click on the results
And I wait for 2 seconds
Then I validate the results of the searchbar