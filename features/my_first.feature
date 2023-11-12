Feature: Test generales de Ghost

@user1 @web
Scenario: XCard
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I enter email "pruebas@correo.com"
  And I wait for 1 seconds
  And I enter password "abcde12345"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click settings
  And I wait for 3 seconds
  And I click on Search
  And I write on search "X"
  And I wait for 4 seconds
  And I click on editX
  And I click on Xtitle
  And I write a Xtitle "Pruebas automatizadas X Card"
  And I wait for 2 seconds
  And I write a XBody "Cuerpo de X card"
  And I wait for 2 seconds
  And I click on XSave
  And I wait for 2 seconds