Feature: Theme toggle in Ghost Admin

  @user1 @web
  Scenario: Switch between light and dark themes
    Given the user has logged in to the Ghost Admin
    And the user waits for 5 seconds
    When the user navigates to the dashboard screen
    And the user waits for 2 seconds
    Then the user toggles the theme to dark
    And the user waits for 2 seconds
    Then the dark theme should be active
    And the user waits for 2 seconds
    Then the user toggles the theme to light
    And the user waits for 2 seconds
    Then the light theme should be active
    And the user waits for 2 seconds