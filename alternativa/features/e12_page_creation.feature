Feature: Page Creation and Publishing in Ghost

  @user1 @web
  Scenario: Create and publish a new page
    Given the user has logged in to the Ghost Admin
    And the user waits for 5 seconds
    When the user navigates to the pages screen
    And the user waits for 2 seconds
    Then the user clicks on "New page" button
    And the user waits for 2 seconds
    Then the user is on the page editor screen
    And the user enters a title "Título de Nueva Página"
    And the user waits for 2 seconds
    Then the user clicks the "Publish" button
    And the user waits for 2 seconds
    Then the "Ready, set, publish. Share it with the world." message should be visible
    And the user waits for 2 seconds
