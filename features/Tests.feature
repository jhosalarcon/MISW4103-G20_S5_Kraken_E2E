Feature: Cambiar contraseña de la cuenta

@user1 @web
Scenario: Como usuario deseo cambiar la contrasena de mi cuenta
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  When I enter email "<Email>"
  And I enter password "<OldPass>"
  And I click next
  And I click settings icon
  And I click Staff icon
  And I click on user info
  And I enter the old password "<OldPass>"
  And I enter the new password "<NewPass>"
  And I verify the new password "<NewPass>"
  And I change the password
  And I wait for 8 seconds
  And I go to logout
  And I press the button sign out
  And I enter email "<Email>"
  And I enter password "<NewPass>"
  And I click next
  And I click settings icon
  And I click Staff icon
  And I click on user info
  And I enter the old password "<NewPass>"
  And I enter the new password "<OldPass>"
  And I verify the new password "<OldPass>"
  And I change the password
