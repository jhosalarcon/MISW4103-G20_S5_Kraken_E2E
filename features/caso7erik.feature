Feature: importar miembros con csv

@user1 @web
Scenario: Importar miembros desde un archivo csv
Given I navigate to page "http://localhost:2368/ghost"
When I enter email "<Email>"
And I enter password "<OldPass>"
And I click next
And I wait for 2 seconds
And I click on members
And I wait for 2 seconds
And I click on member actions
And I wait for 2 seconds
And I click on import members
And I wait for 2 seconds
And I drop a csv file
And I wait for 2 seconds
And I click on import members button
And I wait for 2 seconds
Then I validate the error