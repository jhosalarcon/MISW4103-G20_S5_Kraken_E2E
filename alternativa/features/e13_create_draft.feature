Feature: Post Draft Creation in Ghost

  @user1 @web
  Scenario: Create a new draft post with a title and content after login
    Given I navigate to page "https://your-ghost-admin-url.com/login"
    And I wait for 5 seconds
    When I enter email "USERNAME"
    And I wait for 2 seconds
    And I enter password "PASSWORD"
    And I wait for 2 seconds
    And I click next
    And I wait for 7 seconds
    Then I am on the post editor screen
    When the user navigates to the post editor screen
    And the user enters a title "My New Ghost Post" for the draft post
    And the user enters content "Contenido del borrador del post." for the draft post
    And I wait for 2 seconds
    Then the user should be on the post editor screen
    When the user clicks the "Publish" button
    And I wait for 2 seconds
