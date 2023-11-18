Feature: Dashboard General Review in Ghost

  @user1 @web
  Scenario: Verify dashboard elements
    Given the user has logged in to the Ghost Admin
    And the user waits for 5 seconds
    When the user navigates to the dashboard screen
    And the user waits for 2 seconds
    Then the "Total members" information should be visible
    And the "Created manually" information should be visible
    And the user waits for 2 seconds
    Then the dashboard list footer should be present
    And the user waits for 2 seconds
