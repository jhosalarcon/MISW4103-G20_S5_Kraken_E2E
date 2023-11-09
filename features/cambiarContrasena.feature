Feature: Cambiar contrasena de la cuenta

@user1 @web
Scenario: Como usuario deseo cambiar la contrasena de mi cuenta
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<Email>"
  And I wait for 2 seconds
  And I enter password "<OldPass>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I click settings icon
  And I wait for 2 seconds
  And I click Staff icon
  And I wait for 2 seconds
  And I click on user info
  And I wait for 2 seconds
  And I enter the old password "<OldPass>"
  And I wait for 2 seconds
  And I enter the new password "<NewPass>"
  And I verify the new password "<NewPass>"
 

