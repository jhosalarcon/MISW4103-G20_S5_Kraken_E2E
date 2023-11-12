Feature: Test generales de Ghost

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
  And I wait for 8 seconds  And I go to logout
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


# @user1 @web
# Scenario: Como usuario deseo exportar, eliminar e importar contenido
#  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
#  When I enter email "<Email>"
#  And I enter password "<OldPass>"
#  And I click next
#  And I click settings icon
#  And I click Labs icon
#  And I click on export icon
#  And I wait for 4 seconds
#  And I click on delete icon
#  And I confirm delete content
#  And I wait for 4 seconds
#  And I validate deleted content
#  And I import content
#  And I wait for 2 seconds
#  And I drop a json file
#  And I wait for 5 seconds


@user1 @web
Scenario: Como usuario deseo crear, editar y archivar un newsletter
 Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
 When I enter email "<Email>"
 And I enter password "<OldPass>"
 And I click next
 And I click settings icon
 And I add a newsletter
 And I wait for 2 seconds
 And I validate new newsletter
 And I edit a newsletter
 And I wait for 2 seconds
 And I validate edit newsletter
 And I archive newsletter
 And I wait for 2 seconds
