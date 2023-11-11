Feature: modificar perfil de ghost

@user1 @web
Scenario: Modificar y validar acciones de mi perfil de ghost
Given I navigate to page "http://localhost:2368/ghost"
When I enter email "<Email>"
And I enter password "<OldPass>"
And I click next
And I wait for 2 seconds
And I click my avatar
And I click my profile
And I wait for 2 seconds
And I clear my name
And I type my new name
And I clear my sludge
And I type my new sludge
And I clear my country
And I type my new country
And I wait for 2 seconds
And I save my profile edited
And I wait for 2 seconds
Then I validate my new name
And I click my edited profile
And I wait for 2 seconds
And I clear my name
And I type my old name
And I clear my sludge
And I type my old sludge
And I clear my country
And I type my old country
And I save my profile edited
Then I validate my old name