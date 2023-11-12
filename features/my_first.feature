Feature: Test generales de Ghost

@user1 @web
Scenario: Admin - crear editar y eliminar mi post
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I enter email "pruebas@correo.com"
  And I wait for 2 seconds
  And I enter password "abcde12345"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I click post icon
  And I wait for 2 seconds
  And I enter a title "E2E Post"
  And I wait for 2 seconds
  And I click bodys
  And I wait for 2 seconds
  And I enter a body "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eros in libero sagittis, at ornare leo rhoncus. Duis odio mauris, blandit ut blandit eu, luctus eu eros. Morbi quis massa in ante gravida posuere condimentum et dui. Mauris eu interdum urna. Nullam arcu ante, elementum at leo id, tincidunt sodales tellus. Etiam placerat enim et nisl tincidunt, vel aliquam leo ornare."
  And I wait for 2 seconds
  And I click publish
  And I wait for 2 seconds
  And I click publish post
  And I wait for 2 seconds
  And I confirm the publish
  And I wait for 2 seconds
  And I click on back to editor
  And I wait for 2 seconds
  And I click on title to edit it
  And I wait for 2 seconds
  And I enter a new title "EDITED"
  And I wait for 2 seconds
  And I click bodys again
  And I wait for 2 seconds
  And I enter a new body "EDITED/EDITED/EDITED"
  And I wait for 2 seconds
  And I click update
  And I wait for 2 seconds
  And I click settings post
  And I click delete post
  Then I click confirm

@user1 @web
Scenario: TimeZone
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I enter email "pruebas@correo.com"
  And I wait for 1 seconds
  And I enter password "abcde12345"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click settings
  And I wait for 3 seconds
  And I click on edit Timezone
  And I write on search "TimeZone"
  And I click on edit
  And I click UTC
  And I wait for 3 seconds
  And I write new UTC "Bogota"
  And I save it
  Then I wait for 5 seconds

  @user1 @seb
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
  And I click on edit X
